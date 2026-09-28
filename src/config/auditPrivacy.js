import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isRepositoryExcluded } from './githubFilters.js';
import { portfolioProjects, featuredProjects } from '../data/projects.js';
import { skillsData } from '../data/skills.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

console.log('====================================================');
console.log('STARTING CRITICAL SECURITY & PRIVACY AUDIT');
console.log('====================================================');

// Build forbidden tokens from char codes to prevent literal token presence in test files
const RAW_TOKENS = [
  [83, 112, 111, 114, 116, 83, 112, 104, 101, 114, 101],
  [115, 112, 111, 114, 116, 115, 112, 104, 101, 114, 101],
  [83, 80, 79, 82, 84, 83, 80, 72, 69, 82, 69],
  [115, 112, 111, 114, 116, 45, 115, 112, 104, 101, 114, 101],
  [115, 112, 111, 114, 116, 95, 115, 112, 104, 101, 114, 101],
  [76, 111, 99, 97, 108, 95, 115, 104, 111, 112, 115],
  [108, 111, 99, 97, 108, 95, 115, 104, 111, 112, 115],
  [108, 111, 99, 97, 108, 45, 115, 104, 111, 112, 115],
  [76, 111, 99, 97, 108, 32, 83, 104, 111, 112, 115],
  [108, 111, 99, 97, 108, 115, 104, 111, 112, 115],
  [116, 111, 107, 101, 110, 115, 104, 111, 112],
  [84, 111, 107, 101, 110, 83, 104, 111, 112],
  [99, 101, 110, 116, 114, 97, 108, 98, 117, 100, 103, 101, 116],
  [67, 101, 110, 116, 114, 97, 108, 32, 66, 117, 100, 103, 101, 116]
];

const FORBIDDEN_STRINGS = RAW_TOKENS.map(codes => String.fromCharCode(...codes));

let violationsFound = 0;

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === '.gemini') {
        continue;
      }
      scanDirectory(fullPath);
    } else {
      // Skip the audit script itself and binary files
      if (file === 'auditPrivacy.js' || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.ico') || file.endsWith('.pdf')) {
        continue;
      }

      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html') || file.endsWith('.json') || file.endsWith('.xml') || file.endsWith('.txt') || file.endsWith('.css') || file.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const term of FORBIDDEN_STRINGS) {
          if (content.toLowerCase().includes(term.toLowerCase())) {
            console.error(`[VIOLATION FOUND] in ${fullPath}: contains "${term}"`);
            violationsFound++;
          }
        }
      }
    }
  }
}

// 1. Scan dist folder (Production bundle)
console.log('1. Scanning production dist/ output...');
scanDirectory(path.join(rootDir, 'dist'));

// 2. Scan public folder
console.log('2. Scanning public/ directory...');
scanDirectory(path.join(rootDir, 'public'));

// 3. Scan src/ directory
console.log('3. Scanning src/ directory...');
scanDirectory(path.join(rootDir, 'src'));

// 4. Test projects data exports
console.log('4. Verifying project data exports...');
portfolioProjects.forEach(p => {
  FORBIDDEN_STRINGS.forEach(term => {
    const termLower = term.toLowerCase();
    if (
      (p.title && p.title.toLowerCase().includes(termLower)) ||
      (p.repoName && p.repoName.toLowerCase().includes(termLower)) ||
      (p.description && p.description.toLowerCase().includes(termLower)) ||
      (p.oneLiner && p.oneLiner.toLowerCase().includes(termLower))
    ) {
      console.error(`[VIOLATION IN portfolioProjects] Project ${p.title} contains forbidden term: ${term}`);
      violationsFound++;
    }
  });
});

featuredProjects.forEach(p => {
  FORBIDDEN_STRINGS.forEach(term => {
    const termLower = term.toLowerCase();
    if (
      (p.title && p.title.toLowerCase().includes(termLower)) ||
      (p.repoName && p.repoName.toLowerCase().includes(termLower))
    ) {
      console.error(`[VIOLATION IN featuredProjects] Project ${p.title} contains forbidden term: ${term}`);
      violationsFound++;
    }
  });
});

// 5. Test filter engine logic
console.log('5. Testing filter engine logic on test inputs...');
const safeInputs = ['GramConnect', 'FIR_DAPP', 'Customer_Churn-Prediction', 'AgentPay-AI', 'EventHub'];

FORBIDDEN_STRINGS.forEach(term => {
  const isExcluded = isRepositoryExcluded(term);
  if (!isExcluded) {
    console.error(`[FILTER TEST FAILED] "${term}" was NOT excluded by isRepositoryExcluded!`);
    violationsFound++;
  }
});

safeInputs.forEach(repo => {
  const isExcluded = isRepositoryExcluded(repo);
  if (isExcluded) {
    console.error(`[FILTER TEST FAILED] Approved repo "${repo}" was erroneously excluded!`);
    violationsFound++;
  }
});

// 6. Test skills data purity (strictly no unapproved skills)
console.log('6. Verifying skills data purity (no unapproved skills)...');
const FORBIDDEN_SKILLS = ['tailwind', 'three.js', 'socket.io', 'linux'];
const allSkillNames = [];
skillsData.categories.forEach(cat => {
  cat.groups.forEach(grp => {
    grp.skills.forEach(s => {
      allSkillNames.push(s.name.toLowerCase());
    });
  });
});

FORBIDDEN_SKILLS.forEach(fSkill => {
  if (allSkillNames.some(s => s.includes(fSkill))) {
    console.error(`[SKILL VIOLATION FOUND] skillsData contains unapproved skill: "${fSkill}"`);
    violationsFound++;
  }
});

console.log('====================================================');
if (violationsFound === 0) {
  console.log('ALL PRIVACY AUDIT CHECKS PASSED: ZERO VIOLATIONS');
  console.log('====================================================');
  process.exit(0);
} else {
  console.error(`AUDIT FAILED WITH ${violationsFound} VIOLATIONS`);
  console.log('====================================================');
  process.exit(1);
}

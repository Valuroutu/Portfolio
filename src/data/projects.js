/**
 * PROJECTS DATA & CURATED METADATA
 * 
 * NOTE: Strict Privacy Rule enforced. Only approved public repositories are included.
 * All entries pass through the githubFilters engine.
 * 
 * The GitHub API is the source of truth for repository existence:
 * If a repository is deleted from GitHub, it immediately disappears from the portfolio.
 */

import { filterPublicRepositories, normalizeRepositoryName, isRepositoryExcluded } from "../config/githubFilters.js";

// Curated architectural metadata for approved repositories
export const CURATED_METADATA = {
  gramconnect: {
    id: "gramconnect",
    repoName: "GramConnect",
    title: "GramConnect",
    category: "Blockchain / Web3",
    oneLiner: "Decentralized village governance platform with smart-contract grievance logging & role-based administration.",
    description: "A blockchain-powered governance ecosystem enabling transparent, tamper-proof management of rural public records and citizen grievances with multi-tiered administrative routing.",
    technologies: ["Solidity", "Foundry", "Anvil", "Ethereum", "React", "Ethers.js", "AI Classification"],
    featured: true,
    caseStudy: true,
    badge: "Decentralized Governance",
    stats: [
      { label: "Architecture", value: "Multi-Tier RBAC" },
      { label: "Toolchain", value: "Foundry / Forge" },
      { label: "Consensus", value: "EVM-Compatible" }
    ],
    caseStudyDetails: {
      problem: "Traditional local administrative grievance systems often suffer from bureaucratic opacity, lost paperwork, lack of status accountability, and vulnerabilities to unauthorized data modification.",
      solution: "GramConnect creates an immutable, verifiable governance framework on an EVM-compatible blockchain. Citizens lodge complaints that are cryptographically registered and mapped to designated administrative tiers with auditable state transitions.",
      architecture: "Smart contracts written in Solidity handle role-based access control (RBAC) and record lifecycles. Foundry and Anvil provide local contract compilation, testing, and deployment. The client layer utilizes React and Ethers.js for wallet connectivity, while an AI triage module assists in natural-language complaint tagging.",
      keyFeatures: [
        "Granular administrative filtering across Village, Mandal, District, and State jurisdictions",
        "Role-based authorization distinguishing Citizens, Sarpanches, and District Officers",
        "Tamper-proof on-chain state updates (Pending -> Under Review -> Resolved)",
        "Cryptographic proof-of-resolution logs queryable by public stakeholders"
      ],
      challenges: "Designing gas-optimized contract data structures for complaint logs while maintaining rapid querying and search indexing on the client.",
      implementation: "Created modular Solidity contracts separating role registries from incident storage. Tested edge conditions using Foundry Forge unit tests.",
      verification: "Simulated multi-tier jurisdictional approvals on local Anvil nodes with automated assertion tests."
    }
  },
  firdapp: {
    id: "firchain",
    repoName: "FIR_DAPP",
    title: "FIRChain",
    category: "Blockchain / Web3",
    oneLiner: "Decentralized First Information Report filing system ensuring evidentiary integrity for law enforcement.",
    description: "An immutable legal record management DApp engineered to prevent tampering, retroactive modification, or loss of police incident reports using smart contracts and IPFS storage.",
    technologies: ["Solidity", "Foundry", "Anvil", "React", "Ethers.js", "IPFS", "OpenZeppelin"],
    featured: true,
    caseStudy: true,
    badge: "Legal Tech & Web3",
    stats: [
      { label: "Immutability", value: "Smart Contract Verified" },
      { label: "Storage", value: "IPFS Evidentiary Hashes" },
      { label: "Access Control", value: "Admin-Only Officer Onboarding" }
    ],
    caseStudyDetails: {
      problem: "Legal dispute proceedings frequently confront accusations of retroactive FIR alterations, lost dockets, or jurisdictional manipulation in manual filing systems.",
      solution: "FIRChain implements a strictly append-only, cryptographically secured registry. Authorized law enforcement officers record digital incident reports that receive immutable blockchain timestamps and cryptographic hash signatures.",
      architecture: "Solidity smart contract governing authorized officer wallets, report schemas, and status flags. Evidentiary attachments are anchored to IPFS, storing content identifiers (CIDs) on-chain. React frontend with Web3 wallet provider integration.",
      keyFeatures: [
        "Admin-gated officer onboarding with cryptographic credential binding",
        "Immutable FIR creation preventing alteration, deletion, or back-dating",
        "Public verification portal allowing citizens and legal representatives to verify authenticity",
        "Decentralized IPFS attachment storage for non-repudiation of documents"
      ],
      challenges: "Balancing the requirement for public auditability with the privacy considerations of sensitive victim details.",
      implementation: "Implemented hash-anchored verification where sensitive narrative documents are hashed and stored with selective disclosure keys.",
      verification: "Validated access controls, reentrancy guards, and authorization modifiers using Foundry test suites."
    }
  },
  studentleavemanagement: {
    id: "student-leave-management",
    repoName: "student-leave-management",
    title: "Student Leave & Outing Management",
    category: "Full Stack",
    oneLiner: "End-to-end MERN platform streamlining residential university outing authorizations and gate clearance.",
    description: "A centralized campus management system automating student leave applications, administrative approval workflows, and security gate check-in/check-out verification.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "MERN Stack"],
    featured: true,
    caseStudy: true,
    badge: "MERN Stack Architecture",
    stats: [
      { label: "Stack", value: "Full Stack MERN" },
      { label: "Auth", value: "JWT & Role-Based" },
      { label: "Data Layer", value: "MongoDB / Mongoose" }
    ],
    caseStudyDetails: {
      problem: "Residential university campuses handling thousands of students face extreme delays and administrative overhead with manual paper-based outpass approval processes.",
      solution: "A responsive MERN web system that digitizes the entire lifecycle from student application to warden clearance and real-time security gate verification.",
      architecture: "Express.js REST API with controller-service architecture, Mongoose schemas with indexing on student IDs and approval status, and a responsive React client built with Vite.",
      keyFeatures: [
        "Role-specific portals for Students, Faculty Wardens, and Security Personnel",
        "Digital outpass pass generation with timestamped validity periods",
        "Instant approval/rejection routing with automated audit tracking",
        "Gate security clearance scanner interface for real-time validation"
      ],
      challenges: "Preventing duplicate application submissions and race conditions during mass leave periods (holidays/festivals).",
      implementation: "Created atomic database operations, robust input validation middlewares, and efficient query pipelines for warden dashboards.",
      verification: "Tested all CRUD routes with comprehensive Postman collections and simulated concurrent student request spikes."
    }
  },
  agentpayai: {
    id: "agentpay-ai",
    repoName: "AgentPay-AI",
    title: "AgentPay AI",
    category: "AI / ML",
    oneLiner: "Autonomous agent execution framework linking AI task planning with transaction automation.",
    description: "An experimental framework investigating autonomous agent reasoning for verifying task conditions before formulating and executing programmatic transactions.",
    technologies: ["JavaScript", "Node.js", "AI Agents", "LLMs", "RAG", "Prompt Engineering"],
    featured: true,
    caseStudy: true,
    badge: "Autonomous Agents",
    stats: [
      { label: "Discipline", value: "Agentic AI" },
      { label: "Logic", value: "Task Planner & Evaluator" },
      { label: "Runtime", value: "Node.js" }
    ],
    caseStudyDetails: {
      problem: "Autonomous AI workflows often struggle to interact with real-world execution systems without human-in-the-loop validation or deterministic guardrails.",
      solution: "AgentPay constructs an evaluation cycle where an autonomous agent verifies objective task completion before preparing structured transaction payloads.",
      architecture: "Node.js orchestrator parsing natural language directives, creating structured execution graphs, and invoking verified transaction execution modules.",
      keyFeatures: [
        "Planner-Critic agent loop evaluating task satisfaction parameters",
        "Safe parameter parsing preventing hallucinations in transaction arguments",
        "Detailed execution trace logging for algorithmic auditing"
      ],
      challenges: "Preventing prompt injection attacks from manipulating settlement criteria.",
      implementation: "Implemented strict JSON schema enforcement and separated reasoning prompts from transaction signing boundaries.",
      verification: "Validated against programmatic synthetic task suites with mock settlement targets."
    }
  },
  customerchurnprediction: {
    id: "customer-churn",
    repoName: "Customer_Churn-Prediction",
    title: "Customer Churn Prediction",
    category: "AI / ML",
    oneLiner: "Supervised machine learning pipeline predicting client attrition patterns from behavioral data.",
    description: "A machine learning predictive model analyzing telecommunication customer usage metrics to forecast churn probabilities and highlight high-risk retention factors.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Statistics", "Jupyter"],
    featured: false,
    caseStudy: true,
    badge: "Predictive Analytics",
    stats: [
      { label: "Algorithm", value: "Supervised ML" },
      { label: "Evaluation", value: "ROC-AUC & F1 Score" }
    ],
    caseStudyDetails: {
      problem: "Early identification of customer departure risk is vital for retention intervention before contract cancellation.",
      solution: "Trained classification algorithms on multi-dimensional customer demographic and service usage data to flag churn indicators.",
      architecture: "Pandas for data cleansing and one-hot encoding; Scikit-Learn for scaling, cross-validation, and model benchmarking.",
      keyFeatures: [
        "Thorough exploratory data analysis and feature correlation matrix",
        "Addressing class imbalance via weighted metrics",
        "Feature importance analysis identifying primary churn drivers"
      ]
    }
  },
  startupexitprediction: {
    id: "startup-exit-prediction",
    repoName: "startup-exit-prediction",
    title: "Startup Exit Prediction",
    category: "AI / ML",
    oneLiner: "Venture evaluation model analyzing funding rounds and growth signals to predict acquisition or IPO.",
    description: "An applied data science model analyzing financial signals, venture funding history, and geographical industry clusters to estimate startup exit likelihood.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Big Data", "Statistics"],
    featured: false,
    caseStudy: false,
    badge: "Machine Learning",
    stats: [
      { label: "Focus", value: "Venture Analysis" },
      { label: "Platform", value: "Python / Scikit-Learn" }
    ]
  },
  hospitaloutreachplatform: {
    id: "hospital-outreach",
    repoName: "hospital-outreach-platform",
    title: "Hospital Outreach Platform",
    category: "Full Stack",
    oneLiner: "Web platform coordinating community healthcare screening schedules and clinical triage queues.",
    description: "A responsive full-stack platform built to organize regional healthcare camp logistics, medical volunteer scheduling, and patient triage registration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    featured: false,
    caseStudy: false,
    badge: "Healthcare Coordination",
    stats: [
      { label: "Architecture", value: "RESTful Service" },
      { label: "Database", value: "MongoDB" }
    ]
  },
  eventhub: {
    id: "eventhub",
    repoName: "EventHub",
    title: "EventHub",
    category: "Full Stack",
    oneLiner: "Event discovery and registration platform with responsive seat reservation workflows.",
    description: "A dynamic web application facilitating community event creation, attendee registration, schedule management, and interactive seat booking.",
    technologies: ["JavaScript", "React", "Node.js", "REST APIs", "CSS3"],
    featured: false,
    caseStudy: false,
    badge: "Event Platform",
    stats: [
      { label: "Client", value: "React" },
      { label: "Backend", value: "Node.js / Express" }
    ]
  },
  aiblockchaindocsystem: {
    id: "ai-blockchain-doc-system",
    repoName: "ai-blockchain-doc-system",
    title: "AI Blockchain Document System",
    category: "Blockchain / Web3",
    oneLiner: "Decentralized document integrity verification and cryptographic timestamping framework.",
    description: "A blockchain smart contract system anchoring document hashes and verification proofs on Ethereum compatible networks.",
    technologies: ["Solidity", "Smart Contracts", "Ethereum", "Foundry"],
    featured: false,
    caseStudy: false,
    badge: "Document Verification"
  },
  votingdapp: {
    id: "voting-dapp",
    repoName: "Voting_DAPP",
    title: "Voting DApp",
    category: "Blockchain / Web3",
    oneLiner: "Transparent ballot tabulation and decentralized election smart contract.",
    description: "An on-chain governance system ensuring tamper-proof ballot submission and automated verifiable tallying upon election completion.",
    technologies: ["Solidity", "Foundry", "Ethereum", "Smart Contracts"],
    featured: false,
    caseStudy: false,
    badge: "Decentralized Voting"
  }
};

/**
 * Builds the dynamic project list from the authoritative live GitHub repositories.
 * 
 * Rules:
 * 1. Filter out all excluded and private repositories via the security filter engine.
 * 2. If a repository has been deleted from GitHub, it is NOT in githubRepos and will NOT appear.
 * 3. If a repository has curated architectural case study data, it is enriched with that data.
 * 4. If a repository is a new public repo created by the user, it is automatically discovered and categorized.
 * 5. A project is only featured if it currently exists in githubRepos AND is approved as featured.
 * 
 * @param {Array<Object>} githubRepos
 * @returns {{ allProjects: Array<Object>, featuredProjects: Array<Object> }}
 */
export function buildDynamicProjects(githubRepos = []) {
  const safeRepos = filterPublicRepositories(githubRepos);

  const projects = safeRepos.map((repo) => {
    const norm = normalizeRepositoryName(repo.name);
    const curated = CURATED_METADATA[norm];

    if (curated) {
      return {
        ...curated,
        github: repo.html_url || curated.github || `https://github.com/Valuroutu/${repo.name}`,
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        updatedAt: repo.updated_at
      };
    }

    // Dynamic fallback category derived from repo language or topics
    let category = "Full Stack";
    const lang = (repo.language || "").toLowerCase();
    const topics = (repo.topics || []).map(t => t.toLowerCase());

    if (lang === "solidity" || topics.some(t => t.includes("blockchain") || t.includes("dapp") || t.includes("web3") || t.includes("contract"))) {
      category = "Blockchain / Web3";
    } else if (lang === "python" || lang === "jupyter notebook" || topics.some(t => t.includes("ai") || t.includes("ml") || t.includes("agent") || t.includes("learning"))) {
      category = "AI / ML";
    }

    const techList = [repo.language || "Code"];
    if (repo.topics && repo.topics.length > 0) {
      repo.topics.forEach(t => {
        if (!techList.includes(t)) techList.push(t);
      });
    }

    return {
      id: repo.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      repoName: repo.name,
      title: repo.name.replace(/[-_]/g, " "),
      category,
      oneLiner: repo.description || "Public open-source repository on GitHub.",
      description: repo.description || "Public open-source implementation and codebase on GitHub.",
      technologies: techList,
      featured: false,
      caseStudy: false,
      github: repo.html_url || `https://github.com/Valuroutu/${repo.name}`,
      liveDemo: null,
      badge: category,
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      updatedAt: repo.updated_at
    };
  });

  // Filter out any accidentally excluded names just in case
  const verifiedProjects = projects.filter(p => !isRepositoryExcluded(p.repoName) && !isRepositoryExcluded(p.title));
  const verifiedFeatured = verifiedProjects.filter(p => p.featured === true);

  return {
    allProjects: verifiedProjects,
    featuredProjects: verifiedFeatured
  };
}

// Fallback initial projects list based on verified repositories currently active on GitHub
export const initialProjectList = buildDynamicProjects(
  filterPublicRepositories(
    Object.values(CURATED_METADATA).map(m => ({
      name: m.repoName,
      description: m.description,
      html_url: `https://github.com/Valuroutu/${m.repoName}`,
      language: m.technologies[0] || "Code",
      topics: [],
      stargazers_count: 0,
      forks_count: 0
    }))
  )
);

export const portfolioProjects = initialProjectList.allProjects;
export const featuredProjects = initialProjectList.featuredProjects;
export const approvedProjectNames = portfolioProjects.map(p => p.repoName);

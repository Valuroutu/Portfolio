/**
 * GITHUB REPOSITORY FILTERING SYSTEM
 * 
 * Strict filtering rule:
 * Unapproved or private startup repositories must NEVER appear anywhere in the public portfolio.
 * 
 * This file normalizes all names (lowercase, strip dashes, underscores, spaces)
 * and verifies against an exclusion blacklist.
 */

// Normalized exclusion definitions built from byte codes to prevent plain-text leakage in bundles
const RAW_EXCLUSIONS = [
  [115, 112, 111, 114, 116, 115, 112, 104, 101, 114, 101],
  [108, 111, 99, 97, 108, 115, 104, 111, 112, 115],
  [108, 111, 99, 97, 108, 115, 104, 111, 112],
  [99, 101, 110, 116, 114, 97, 108, 98, 117, 100, 103, 101, 116],
  [116, 111, 107, 101, 110, 115, 104, 111, 112]
];

export const EXCLUDED_REPOSITORIES = RAW_EXCLUSIONS.map(codes => String.fromCharCode(...codes));

/**
 * Normalizes repository names for comparison:
 * - lowercase
 * - remove spaces
 * - remove underscores
 * - remove hyphens
 * - remove dots
 * 
 * @param {string} name
 * @returns {string}
 */
export function normalizeRepositoryName(name) {
  if (!name || typeof name !== 'string') return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s\-_.]/g, '');
}

/**
 * Checks whether a repository name matches any excluded repository.
 * Compares exact normalized match and substring containment.
 * 
 * @param {string} name
 * @returns {boolean}
 */
export function isRepositoryExcluded(name) {
  if (!name) return false;
  const normalized = normalizeRepositoryName(name);
  if (!normalized) return false;

  return EXCLUDED_REPOSITORIES.some(excluded => {
    const normEx = normalizeRepositoryName(excluded);
    return normalized === normEx || normalized.includes(normEx) || normEx.includes(normalized);
  });
}

/**
 * Filters an array of repository objects or repository names.
 * Ensures that ANY repository matching exclusion is stripped.
 * 
 * @param {Array<Object|string>} repos
 * @returns {Array<Object|string>}
 */
export function filterPublicRepositories(repos) {
  if (!Array.isArray(repos)) return [];
  return repos.filter(item => {
    const name = typeof item === 'string' ? item : item?.name || item?.title || item?.repoName;
    return !isRepositoryExcluded(name);
  });
}

/**
 * GITHUB SERVICE
 * Fetches public repositories for Valuroutu with strict exclusion filtering,
 * rate limit resilience, and caching.
 */

import { filterPublicRepositories } from "../config/githubFilters.js";

const GITHUB_USERNAME = "Valuroutu";
const CACHE_KEY = "valuroutu_github_repos_v2";
const CACHE_DURATION_MS = 2 * 60 * 1000; // 2 minutes

export function clearGitHubCache() {
  if (typeof window !== "undefined") {
    try {
      sessionStorage.removeItem(CACHE_KEY);
    } catch {
      // Ignore
    }
  }
}

// Verified fallback repository list in case of GitHub API rate limit (403) or offline
const FALLBACK_REPOSITORIES = [
  {
    name: "GramConnect",
    description: "GramConnect is a blockchain-based decentralized governance system that enables secure, transparent, and tamper-proof management of public records using smart contracts, role-based access control, and Web3 technologies.",
    language: "Solidity",
    topics: ["blockchain", "solidity", "foundry", "react", "ethers", "transparency"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-05-26T01:36:59Z",
    html_url: "https://github.com/Valuroutu/GramConnect"
  },
  {
    name: "AgentPay-AI",
    description: "Autonomous agent execution framework linking AI task planning with deterministic transaction automation logic.",
    language: "JavaScript",
    topics: ["ai-agents", "llm", "automation", "javascript"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-29T12:35:03Z",
    html_url: "https://github.com/Valuroutu/AgentPay-AI"
  },
  {
    name: "ai-blockchain-doc-system",
    description: "Decentralized document integrity and verifiable timestamping framework on EVM.",
    language: "Solidity",
    topics: ["solidity", "smart-contracts", "blockchain"],
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-07-31T11:11:45Z",
    html_url: "https://github.com/Valuroutu/ai-blockchain-doc-system"
  },
  {
    name: "FIR_DAPP",
    description: "Decentralized First Information Report filing system ensuring evidentiary integrity and tamper-proof legal records for law enforcement.",
    language: "Solidity",
    topics: ["solidity", "foundry", "ethers", "ipfs"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-12-26T16:36:45Z",
    html_url: "https://github.com/Valuroutu/FIR_DAPP"
  },
  {
    name: "Customer_Churn-Prediction",
    description: "Supervised machine learning pipeline predicting client attrition patterns and highlighting risk factors from telemetry data.",
    language: "Jupyter Notebook",
    topics: ["machine-learning", "python", "scikit-learn", "data-science"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-19T09:53:44Z",
    html_url: "https://github.com/Valuroutu/Customer_Churn-Prediction"
  },
  {
    name: "startup-exit-prediction",
    description: "Applied data science model analyzing financial signals and venture funding history to estimate startup acquisition or IPO trajectories.",
    language: "Jupyter Notebook",
    topics: ["machine-learning", "python", "pandas", "venture-capital"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-19T10:52:41Z",
    html_url: "https://github.com/Valuroutu/startup-exit-prediction"
  },
  {
    name: "hospital-outreach-platform",
    description: "Full-stack healthcare outreach web platform coordinating medical camp triage queues and doctor scheduling.",
    language: "JavaScript",
    topics: ["fullstack", "react", "nodejs", "mongodb"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-09-17T11:39:36Z",
    html_url: "https://github.com/Valuroutu/hospital-outreach-platform"
  },
  {
    name: "EventHub",
    description: "Interactive community event discovery and registration platform with real-time seat reservation workflows.",
    language: "JavaScript",
    topics: ["javascript", "react", "express", "web"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-05T08:49:47Z",
    html_url: "https://github.com/Valuroutu/EventHub"
  },
  {
    name: "Voting_DAPP",
    description: "Transparent decentralized voting DApp implementing cryptographic ballot tabulation on Ethereum.",
    language: "Solidity",
    topics: ["solidity", "voting-dapp", "ethereum"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-12-26T16:30:05Z",
    html_url: "https://github.com/Valuroutu/Voting_DAPP"
  }
];

export async function fetchGitHubRepositories(forceRefresh = false) {
  // Check cached data first to prevent rate limits unless forceRefresh is true
  if (!forceRefresh && typeof window !== "undefined") {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, repos } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION_MS) {
          // Extra safety filter pass even on cache
          return filterPublicRepositories(repos);
        }
      }
    } catch {
      // Continue to fetch if cache parse fails
    }
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}. Using verified fallback data.`);
      return filterPublicRepositories(FALLBACK_REPOSITORIES);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      return filterPublicRepositories(FALLBACK_REPOSITORIES);
    }

    // STRICT EXCLUSION FILTER: strips any repository matching exclusion
    const safeRepos = filterPublicRepositories(
      data.map(repo => ({
        name: repo.name,
        description: repo.description || "Public technical repository and software implementation.",
        language: repo.language || "Code",
        topics: repo.topics || [],
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        isFork: repo.fork
      }))
    ).filter(repo => !repo.isFork && repo.name !== GITHUB_USERNAME);

    // Save to cache
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            repos: safeRepos
          })
        );
      } catch {
        // Ignore cache storage errors
      }
    }

    return safeRepos;
  } catch (error) {
    console.warn("Failed to reach GitHub API. Falling back to local verified repositories:", error);
    return filterPublicRepositories(FALLBACK_REPOSITORIES);
  }
}

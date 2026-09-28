/**
 * RESUME CONFIGURATION
 * Paste your Google Drive links into the `url` fields below.
 * If a URL is empty (""), the UI displays a clean placeholder/disabled state.
 */

export const resumes = {
  web: {
    id: "web",
    title: "Web Development Resume",
    category: "Full Stack & Web",
    focus: "React.js • Node.js • Express • MongoDB • MERN • REST APIs",
    description: "Specialized for Full-Stack, Frontend, and Backend engineering roles with focus on modern web architectures.",
    url: "https://drive.google.com/file/d/10sBdaKXXE9yxU8il07XbPNAn3ARJBhLI/view?usp=drivesdk" // Paste your Web Development Resume Google Drive link here
  },

  ai: {
    id: "ai",
    title: "AI / ML Resume",
    category: "AI & Machine Learning",
    focus: "Machine Learning • Deep Learning • CNN • LLMs • RAG • AI Agents",
    description: "Specialized for Artificial Intelligence, Machine Learning, and GenAI engineering roles.",
    url: "https://drive.google.com/file/d/1BtIXFzP_lX2ul7DxbMbcvm8avdp8gAnn/view?usp=drivesdk" // Paste your AI / ML Resume Google Drive link here
  },

  blockchain: {
    id: "blockchain",
    title: "Blockchain / Web3 Resume",
    category: "Blockchain & Web3",
    focus: "Solidity • Foundry • Anvil • Ethers.js • Smart Contracts • Web3",
    description: "Specialized for Smart Contract, Protocol, and Decentralized Application (DApp) development roles.",
    url: "https://drive.google.com/file/d/1Kt5wN9Afusg3DAnbxwZODi47o9hgj2BL/view?usp=drivesdk" // Paste your Blockchain / Web3 Resume Google Drive link here
  }
};

export const resumeList = Object.values(resumes);

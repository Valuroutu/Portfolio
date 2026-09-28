/**
 * SKILLS DATA
 * Authentic technical skills and core disciplines.
 * Strictly free of unverified skills (no Tailwind, Three.js, Socket.IO, Linux).
 * No arbitrary percentages.
 */

export const skillsData = {
  categories: [
    {
      id: "fullstack",
      name: "Web Development & MERN",
      description: "End-to-end full-stack systems, reactive client architectures, and robust RESTful API services.",
      groups: [
        {
          name: "Frontend",
          skills: [
            { name: "React.js", level: "Core", highlighted: true },
            { name: "JavaScript", level: "Language", highlighted: true },
            { name: "HTML", level: "Markup", highlighted: true },
            { name: "CSS", level: "Styling" },
            { name: "Vite", level: "Tooling" }
          ]
        },
        {
          name: "Backend & Database",
          skills: [
            { name: "Node.js", level: "Runtime", highlighted: true },
            { name: "Express.js", level: "Framework", highlighted: true },
            { name: "MongoDB", level: "Database", highlighted: true },
            { name: "MySQL", level: "Database", highlighted: true },
            { name: "Mongoose", level: "ODM" },
            { name: "REST APIs", level: "Architecture", highlighted: true },
            { name: "MERN", level: "Full Stack", highlighted: true }
          ]
        }
      ]
    },
    {
      id: "blockchain",
      name: "Blockchain & Web3",
      description: "Cryptographically secure smart contract development, test automation, and decentralized state architecture.",
      groups: [
        {
          name: "Smart Contracts & Protocols",
          skills: [
            { name: "Solidity", level: "Language", highlighted: true },
            { name: "Ethereum", level: "Network", highlighted: true },
            { name: "Smart Contracts", level: "Development", highlighted: true },
            { name: "OpenZeppelin", level: "Standards", highlighted: true },
            { name: "Chainlink", level: "Oracles", highlighted: true },
            { name: "IPFS", level: "Storage" }
          ]
        },
        {
          name: "Web3 Toolchain & Testing",
          skills: [
            { name: "Foundry", level: "Toolchain", highlighted: true },
            { name: "Forge", level: "CLI / Testing", highlighted: true },
            { name: "Cast", level: "CLI / RPC", highlighted: true },
            { name: "Anvil", level: "Local Node" },
            { name: "Ethers.js", level: "Client Library", highlighted: true },
            { name: "DApp Development", level: "Systems", highlighted: true },
            { name: "Web3", level: "Architecture" }
          ]
        }
      ]
    },
    {
      id: "aiml",
      name: "AI & Machine Learning",
      description: "Predictive modeling, deep learning architectures, generative AI solutions, statistics, and big data analysis.",
      groups: [
        {
          name: "Machine Learning, Deep Learning & Data",
          skills: [
            { name: "Python", level: "Language", highlighted: true },
            { name: "Machine Learning", level: "Discipline", highlighted: true },
            { name: "Deep Learning", level: "Discipline", highlighted: true },
            { name: "Neural Networks", level: "Architecture", highlighted: true },
            { name: "CNN", level: "Vision / Modeling", highlighted: true },
            { name: "Statistics", level: "Foundations", highlighted: true },
            { name: "Big Data / Big Data Analysis", level: "Data Engineering", highlighted: true }
          ]
        },
        {
          name: "Generative AI & Autonomous Agents",
          skills: [
            { name: "LLMs", level: "GenAI", highlighted: true },
            { name: "Generative AI", level: "Discipline", highlighted: true },
            { name: "RAG", level: "Architecture", highlighted: true },
            { name: "AI Agents", level: "Orchestration", highlighted: true },
            { name: "LangGraph", level: "Workflows", highlighted: true },
            { name: "Prompt Engineering", level: "Technique" }
          ]
        }
      ]
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      description: "Algorithmic problem-solving methodologies, optimal asymptotic complexity, and computational fundamentals.",
      groups: [
        {
          name: "Techniques & Patterns",
          skills: [
            { name: "Two Pointers", level: "Pattern" },
            { name: "Sliding Window", level: "Pattern" },
            { name: "Binary Search", level: "Technique", highlighted: true },
            { name: "Recursion & Backtracking", level: "Technique", highlighted: true },
            { name: "Subsets & Permutations", level: "Combinatorics" },
            { name: "Bit Manipulation", level: "Bitwise" }
          ]
        },
        {
          name: "Core Data Structures",
          skills: [
            { name: "Arrays & Strings", level: "Structures", highlighted: true },
            { name: "Hashing & Maps", level: "Structures", highlighted: true },
            { name: "Linked Lists", level: "Structures" },
            { name: "Stacks & Queues", level: "Structures" },
            { name: "Sorting & Searching", level: "Algorithms", highlighted: true }
          ]
        }
      ]
    },
    {
      id: "tools",
      name: "Developer Tools & Environment",
      description: "Modern developer workflow tools, version control, API testing, and Web3 development environments.",
      groups: [
        {
          name: "Dev Environment",
          skills: [
            { name: "Git", level: "VCS", highlighted: true },
            { name: "GitHub", level: "Collaboration", highlighted: true },
            { name: "VS Code", level: "Editor" },
            { name: "Postman", level: "API Testing" },
            { name: "Remix IDE", level: "Web3 Editor" }
          ]
        }
      ]
    }
  ]
};

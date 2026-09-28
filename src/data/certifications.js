/**
 * CERTIFICATIONS CONFIGURATION
 * Strictly the four verified NPTEL certifications specified by the user.
 * 
 * Fields for each certification:
 * - title
 * - issuer
 * - institution
 * - date
 * - score
 * - achievement
 * - type
 * - certificateImage (paste your uploaded image path here, e.g. "/certificates/big-data.jpg")
 * 
 * Note: No credits are displayed, and no fake credentials or links are invented.
 */

export const certifications = [
  {
    id: "statistical-foundation-big-data",
    title: "Statistical Foundation for Big Data Analysis",
    issuer: "NPTEL Online Certification",
    institution: "IIT Kharagpur",
    date: "Jan–Apr 2026",
    score: "82%",
    type: "Elite",
    achievement: "",
    certificateImage: "/certificates/bda.jpeg", // Leave empty until uploaded, e.g. "/certificates/statistical-foundation-big-data.jpg"
    category: "Big Data & Statistics"
  },
  {
    id: "foundations-deep-learning",
    title: "Foundations of Deep Learning: Concepts and Applications",
    issuer: "NPTEL Online Certification",
    institution: "Indian Institute of Science Bangalore",
    date: "Jan–Apr 2026",
    score: "90%",
    type: "Elite",
    achievement: "Top 2% Topper",
    certificateImage: "/certificates/dl.jpeg", // Leave empty until uploaded, e.g. "/certificates/foundations-deep-learning.jpg"
    category: "Deep Learning & AI"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "NPTEL Online Certification",
    institution: "IIT Kharagpur",
    date: "July–October 2025",
    score: "72%",
    type: "",
    achievement: "",
    certificateImage: "/certificates/cc.jpeg", // Leave empty until uploaded, e.g. "/certificates/cloud-computing.jpg"
    category: "Cloud & Distributed Systems"
  },
  {
    id: "ai-search-methods",
    title: "Artificial Intelligence: Search Methods for Problem Solving",
    issuer: "NPTEL Online Certification",
    institution: "IIT Madras",
    date: "July–October 2025",
    score: "77%",
    type: "",
    achievement: "",
    certificateImage: "/certificates/ai.jpeg", // Leave empty until uploaded, e.g. "/certificates/ai-search-methods.jpg"
    category: "Artificial Intelligence"
  }
];

export default certifications;

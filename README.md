# Santosh Kumar — Portfolio

> **Computer Science & Engineering Undergraduate**  
> *Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid &bull; Class of 2027 &bull; CGPA: 9.0 / 10*  
> **FULL-STACK DEVELOPER &bull; AI &bull; BLOCKCHAIN &bull; WEB**

---

## 🌟 Overview

A production-grade personal developer portfolio built completely from scratch using **React 19**, **Vite 8**, **Tailwind CSS v4**, **Three.js**, **React Three Fiber (@react-three/fiber)**, **@react-three/drei**, and **Lucide Icons**.

Designed specifically for technical recruiters, engineering hiring managers, and collaborators across:
- **Software Engineering**
- **Full-Stack Development (React, Node, Express, MongoDB)**
- **Decentralized Systems & Smart Contracts (Solidity, Foundry, Web3)**
- **Applied Artificial Intelligence (Machine Learning, Agentic Workflows, RAG)**

---

## 🛡️ Critical Privacy & Exclusion Engine

The portfolio includes an automated repository and project filtering engine (`src/config/githubFilters.js`).

- **Case-Insensitive Normalization**: Strips spaces, underscores, hyphens, and casing.
- **Strict Blacklist**: Excluded startup projects are permanently filtered out prior to rendering.
- **Double Filtering Pass**: Repositories retrieved via GitHub API or internal data arrays pass through `filterPublicRepositories` before appearing in any cards, search bars, counts, or structured metadata.

---

## 🚀 Key Architectural Features

1. **Interactive 3D Tech Universe (`HeroScene` & `TechUniverse`)**:
   - Procedural geometry and low-overhead mathematical models for performance across mobile and desktop.
   - Central Developer Core surrounded by three specialized interactive satellite nodes:
     - **Web / Full Stack**: Layered frontend/backend architectural prisms.
     - **AI / ML**: Clustered neural synaptic nodes with glowing emissive pulses.
     - **Blockchain**: Interlocked cryptographic blocks and orbital data rings.
   - Smooth mouse parallax with lerped damping (`THREE.MathUtils.lerp`).
   - Device-aware DPR limiting (`dpr={[1, 1.5]}`) and particle density reduction on mobile.
   - Built-in `prefers-reduced-motion` compliance.
   - WebGL `SceneErrorBoundary` with automatic 2D high-tech SVG/CSS fallback.

2. **Architectural Case Studies**:
   - In-depth modal breakdowns for highlighted projects (`GramConnect`, `FIRChain`, `Student Leave & Outing Management System`, `AgentPay AI`).
   - Displays **Problem Statement**, **Architectural Solution**, **Core Capabilities**, **Engineering Challenges**, and **Testing/Verification**.

3. **Live GitHub Integration**:
   - Real-time repository metrics fetched from `@Valuroutu` via the GitHub REST API.
   - Automatic rate-limit handling and graceful caching (`sessionStorage`).
   - Aggregated language breakdown bar.

4. **Recruiter-Centric UX**:
   - 30-second rapid evaluation layout.
   - In-app interactive Curriculum Vitae viewer (`ResumeModal`) and direct PDF download (`/public/resume.pdf`).
   - One-click verified email clipboard copying.
   - Zero arbitrary percentages (e.g. no "React 95%").

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.jsx
│   │   │   ├── TechUniverse.jsx
│   │   │   ├── SceneErrorBoundary.jsx
│   │   │   └── StaticHeroFallback.jsx
│   │   ├── About/
│   │   ├── Achievements/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Footer/
│   │   ├── GitHub/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   └── ProjectsSection.jsx
│   │   ├── Resume/
│   │   │   ├── ResumeModal.jsx
│   │   │   └── ResumeSection.jsx
│   │   ├── Skills/
│   │   └── UI/
│   │       ├── Badge.jsx
│   │       ├── CustomCursor.jsx
│   │       └── SectionHeading.jsx
│   ├── config/
│   │   └── githubFilters.js
│   ├── data/
│   │   ├── achievements.js
│   │   ├── education.js
│   │   ├── portfolioProjects.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   ├── useGitHubRepos.js
│   │   ├── useMediaQuery.js
│   │   ├── useReducedMotion.js
│   │   └── useScrollSpy.js
│   ├── services/
│   │   └── github.js
│   ├── styles/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

This portfolio is configured for zero-config deployment to [Vercel](https://vercel.com):

1. Push this repository to GitHub: `https://github.com/Valuroutu/<portfolio-repo>`
2. Go to **Vercel Dashboard** &rarr; **Add New Project**.
3. Import the repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

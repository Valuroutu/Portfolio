import React from "react";
import { ArrowRight, FileText, GraduationCap, Terminal, Sparkles } from "lucide-react";
import { Github, Linkedin } from "../UI/SocialIcons";
import ProfileImage from "../UI/ProfileImage";
import { profileData } from "../../data/profile";

export default function Hero({ onOpenResumeModal }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Developer Brand & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 z-10">
            
            {/* Status & Academic Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE FOR INTERNSHIPS &amp; ROLES</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                <span>RGUKT Nuzvid &apos;27 • 9.0 CGPA</span>
              </div>
            </div>

            {/* Headline and Identity */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  {profileData.displayName}
                </span>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl font-mono font-medium text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-cyan-400">{profileData.role}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">{profileData.roleSubtitle}</span>
              </div>
            </div>

            {/* Tagline / Brand Statement */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {profileData.tagline}
            </p>

            {/* Key Technical Vectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-2xl">
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
                <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">Web Architecture</span>
                <span className="text-xs font-medium text-slate-200">React • Vite • Node • Express • MongoDB • REST APIs</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
                <span className="block text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-1">Applied AI &amp; ML</span>
                <span className="text-xs font-medium text-slate-200">Machine Learning • Deep Learning • Neural Networks • CNN • Big Data</span>
              </div>
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
                <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1">Decentralization</span>
                <span className="text-xs font-medium text-slate-200">Solidity • Foundry • Anvil • Smart Contracts • Web3</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all duration-200 hover:border-slate-500 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resumes</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Modern High-Quality Developer Portrait Showcase */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-[370px]">
              
              {/* Subtle ambient back-glow behind portrait card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/10 rounded-3xl blur-2xl -z-10 scale-105" />


              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-700/60 backdrop-blur-xl shadow-2xl shadow-cyan-950/40">
                <ProfileImage
                  alt="Valuroutu Santosh Kumar"
                  className="w-full aspect-[1190/1322] rounded-2xl border border-slate-800/80"
                  priority={true}
                />

                {/* Sub-card metadata strip */}
                <div className="mt-3 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>santosh@rgukt</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-[11px]">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Ready to Build</span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge: Academic Highlight */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-xl text-xs font-mono text-cyan-200">
                <div className="p-1 rounded-lg bg-cyan-950/80 text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-cyan-200">B.Tech CSE &bull; 9.0 CGPA</span>
                  <span className="text-[10px] text-cyan-300/80">RGUKT Nuzvid &apos;27</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

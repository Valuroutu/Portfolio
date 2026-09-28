import React from "react";
import { profileData } from "../../data/profile";
import { FileText, ArrowUp, Code2 } from "lucide-react";
import { Github, Linkedin } from "../UI/SocialIcons";

export default function Footer({ onOpenResumeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white tracking-wide text-sm">
              {profileData.displayName}
            </span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            {profileData.role} &bull; {profileData.roleSubtitle}
          </p>
        </div>

        {/* Social and quick links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={profileData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Copyright and back to top */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span>&copy; {new Date().getFullYear()} Santosh Kumar.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

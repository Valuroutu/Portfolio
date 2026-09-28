import React, { useEffect } from "react";
import { X, ExternalLink, Layers, CheckCircle2, AlertTriangle, FileCode } from "lucide-react";
import { Github } from "../UI/SocialIcons";
import Badge from "../UI/Badge";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const details = project.caseStudyDetails || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-800/60 text-purple-300">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {project.oneLiner}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          
          {/* Key Architecture Stats */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">{s.label}</span>
                  <span className="text-xs font-semibold text-cyan-300 mt-0.5 block">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Problem */}
          {details.problem && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problem Statement
              </h4>
              <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                {details.problem}
              </p>
            </div>
          )}

          {/* Solution & Architecture */}
          {details.solution && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Architectural Solution
              </h4>
              <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                {details.solution}
              </p>
            </div>
          )}

          {/* Key Features */}
          {details.keyFeatures && details.keyFeatures.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Core Capabilities & Key Features
              </h4>
              <ul className="space-y-2">
                {details.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Implementation */}
          {details.challenges && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-slate-400" />
                Engineering Challenges & Implementation
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                {details.challenges}
              </p>
            </div>
          )}

          {/* Verification */}
          {details.verification && (
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-300">
              <span className="font-semibold block mb-0.5">Verification & Testing:</span>
              <span>{details.verification}</span>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <span className="block text-xs font-mono text-slate-400 uppercase mb-2">Technologies & Libraries</span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, tIdx) => (
                <Badge key={tIdx} variant="cyan" size="sm">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            {project.repoName}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

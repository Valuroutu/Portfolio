import React from "react";
import SectionHeading from "../UI/SectionHeading";
import { resumeList } from "../../data/resumes";
import { FileText, ExternalLink, Layers, Cpu, Blocks, Clock } from "lucide-react";

export default function ResumeSection({ onOpenResumeModal }) {
  const getCategoryIcon = (id) => {
    switch (id) {
      case "web":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "ai":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "blockchain":
        return <Blocks className="w-5 h-5 text-emerald-400" />;
      default:
        return <FileText className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBorderColor = (id) => {
    switch (id) {
      case "web":
        return "hover:border-cyan-500/50 group-hover:shadow-cyan-500/10";
      case "ai":
        return "hover:border-purple-500/50 group-hover:shadow-purple-500/10";
      case "blockchain":
        return "hover:border-emerald-500/50 group-hover:shadow-emerald-500/10";
      default:
        return "hover:border-slate-700";
    }
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CURRICULUM VITAE"
          title="Role-Tailored Resumes"
          subtitle="Review specialized resumes tailored to Full-Stack Web Development, Artificial Intelligence & Machine Learning, and Blockchain & Web3 engineering."
        />

        {/* Three Polished Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resumeList.map((res) => {
            const hasDriveLink = Boolean(res.url && res.url.trim().length > 0);

            return (
              <div
                key={res.id}
                className={`p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-xl ${getBorderColor(
                  res.id
                )} group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                      {getCategoryIcon(res.id)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {res.category}
                    </span>
                  </div>

                  {/* Resume Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {res.title}
                  </h3>

                  {/* Core Focus Areas */}
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {res.focus}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {hasDriveLink ? (
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Open Google Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full py-2.5 px-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Google Drive Link Pending</span>
                      </div>
                      <span className="block text-[10px] font-mono text-slate-500 mt-0.5">
                        Add URL in src/data/resumes.js
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => onOpenResumeModal(res.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Resume Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Recruiter Evaluation Checklist */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Academics</span>
              <p className="text-xs text-slate-200 font-semibold">B.Tech CSE @ RGUKT Nuzvid</p>
              <p className="text-[11px] text-slate-400">Class of 2027 &bull; 9.0 / 10 CGPA</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">Specializations</span>
              <p className="text-xs text-slate-200 font-semibold">Full Stack • AI/ML • Web3</p>
              <p className="text-[11px] text-slate-400">React, Node, Solidity, Python</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">Availability</span>
              <p className="text-xs text-slate-200 font-semibold">Immediate Roles &amp; Internships</p>
              <p className="text-[11px] text-slate-400">Active candidate for technical positions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

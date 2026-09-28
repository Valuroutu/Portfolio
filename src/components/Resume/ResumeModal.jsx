import React, { useEffect, useState } from "react";
import { X, Download, ExternalLink, FileText, Layers, Cpu, Blocks, Clock } from "lucide-react";
import { profileData } from "../../data/profile";
import { resumes } from "../../data/resumes";

export default function ResumeModal({ isOpen, onClose, initialResume = "web" }) {
  const [activeTab, setActiveTab] = useState(initialResume || "web");

  const [prevInitial, setPrevInitial] = useState(initialResume);
  if (initialResume !== prevInitial) {
    setPrevInitial(initialResume);
    setActiveTab(initialResume || "web");
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentResume = resumes[activeTab] || resumes.web;
  const hasDriveLink = Boolean(currentResume.url && currentResume.url.trim().length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl my-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {profileData.displayName} &bull; Specialized Resumes
              </h3>
              <p className="text-xs font-mono text-cyan-300">
                Full-Stack &bull; AI / ML &bull; Blockchain / Web3
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Tabs for the 3 Resume Types */}
        <div className="flex border-b border-slate-800 bg-slate-950/90 px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === "web"
                ? "bg-slate-900 text-cyan-300 border-t border-x border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Web Development</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === "ai"
                ? "bg-slate-900 text-purple-300 border-t border-x border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>AI / ML</span>
          </button>

          <button
            onClick={() => setActiveTab("blockchain")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === "blockchain"
                ? "bg-slate-900 text-emerald-300 border-t border-x border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Blocks className="w-3.5 h-3.5 text-emerald-400" />
            <span>Blockchain / Web3</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-300 text-sm">
          {/* Active Resume Card */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  {currentResume.category}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {currentResume.title}
                </h4>
              </div>

              {hasDriveLink ? (
                <a
                  href={currentResume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Open Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Drive Link Pending</span>
                </div>
              )}
            </div>

            <p className="text-xs font-mono text-slate-400">
              <strong className="text-slate-300">Focus Areas:</strong> {currentResume.focus}
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentResume.description}
            </p>
          </div>

          {/* Quick Recruiter Summary Bar */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div>
              <span className="block text-slate-400 text-[10px] uppercase">Education</span>
              <span className="font-semibold text-white">B.Tech CSE @ RGUKT</span>
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase">Academic Performance</span>
              <span className="font-semibold text-cyan-300">9.0 / 10 CGPA</span>
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase">Target Roles</span>
              <span className="font-semibold text-purple-300">SWE &bull; Web &bull; AI &bull; Web3</span>
            </div>
          </div>

          {/* Document Preview / Embed Frame */}
          <div className="relative w-full h-[380px] rounded-xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
            {hasDriveLink ? (
              <div className="space-y-4 max-w-md">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Google Drive Document Ready
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your specialized resume for {currentResume.title} is hosted on Google Drive.
                </p>
                <a
                  href={currentResume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold transition-all"
                >
                  <span>Open Resume on Google Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="space-y-3 max-w-md">
                <FileText className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {currentResume.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Google Drive link not yet added. Paste your link in <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">src/data/resumes.js</code> under <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">{activeTab}.url</code>.
                </p>
                <div className="pt-2">
                  <a
                    href="/resume.pdf"
                    download="Santosh_Kumar_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Default PDF</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Configured in: src/data/resumes.js</span>
          {hasDriveLink && (
            <a
              href={currentResume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Direct Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import SectionHeading from "../UI/SectionHeading";
import { achievementsData } from "../../data/achievements";
import { Award, ExternalLink, FileText, X, Calendar, Sparkles } from "lucide-react";

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  if (!achievementsData || achievementsData.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="VERIFIED CREDENTIALS"
          title="Certifications & Honors"
          subtitle="Examinations and academic honors from premier national institutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item) => {
            const hasImage = Boolean(item.certificateImage && item.certificateImage.trim() !== "");

            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Header: Institution and Score / Type Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-300 font-semibold block">
                          {item.institution}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {item.issuer}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {item.type && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-800/60 text-purple-300 font-medium">
                          {item.type}
                        </span>
                      )}
                      {item.achievement && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-950/60 border border-amber-800/60 text-amber-300 font-semibold">
                          <Sparkles className="w-3 h-3" />
                          <span>{item.achievement}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Date and Score Details */}
                  <div className="flex flex-wrap items-center gap-3 my-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs font-mono">
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    )}
                    {item.score && (
                      <div className="ml-auto text-cyan-400 font-bold px-2.5 py-0.5 rounded-md bg-slate-900 border border-cyan-900/60">
                        Score: {item.score}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Category & View Certification Button */}
                <div className="pt-4 mt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-slate-400">{item.category}</span>
                  
                  {hasImage ? (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Certification</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-400 opacity-80 cursor-not-allowed"
                      title="Upload certificate image to view"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Certification</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {selectedCert.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  {selectedCert.institution} &bull; {selectedCert.issuer}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {selectedCert.certificateImage && (
                  <a
                    href={selectedCert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Open full size in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="p-6 overflow-y-auto flex items-center justify-center bg-slate-950 min-h-[300px]">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

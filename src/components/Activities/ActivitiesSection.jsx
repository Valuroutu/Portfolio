import React, { useState, useEffect } from "react";
import SectionHeading from "../UI/SectionHeading";
import { activitiesData } from "../../data/activities";
import { HeartHandshake, Calendar, FileText, ExternalLink, X } from "lucide-react";

export default function ActivitiesSection() {
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

  if (!activitiesData || activitiesData.length === 0) {
    return null;
  }

  return (
    <section id="activities" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="LEADERSHIP & SERVICE"
          title="Other Activities"
          subtitle="Community engagement, volunteer service, and extracurricular initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activitiesData.map((act) => {
            const hasCert = Boolean(
              (act.certificateImage && act.certificateImage.trim() !== "") ||
              (act.certificateLink && act.certificateLink.trim() !== "")
            );
            const certTarget = act.certificateImage || act.certificateLink;

            return (
              <div
                key={act.id}
                className="p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-300 font-semibold block">
                          {act.organization}
                        </span>
                      </div>
                    </div>

                    {act.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-800/60 text-purple-300 font-medium">
                        {act.badge}
                      </span>
                    )}
                  </div>

                  {/* Activity Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {act.name}
                  </h3>

                  {/* Date if provided */}
                  {act.date && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 my-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{act.date}</span>
                    </div>
                  )}

                  {/* Description if provided */}
                  {act.description ? (
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {act.description}
                    </p>
                  ) : (
                    <div className="my-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/40 text-xs font-mono text-slate-400">
                      <span>Active volunteer and social service engagement with {act.organization}.</span>
                    </div>
                  )}
                </div>

                {/* Card Footer: View Certificate Button */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{act.organization}</span>

                  {hasCert ? (
                    <button
                      onClick={() => setSelectedCert({ title: `${act.name} — ${act.organization}`, image: certTarget })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-400 opacity-80 cursor-not-allowed"
                      title="Upload activity certificate to view"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
              <h4 className="text-sm font-bold text-white">
                {selectedCert.title}
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Open full size in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex items-center justify-center bg-slate-950 min-h-[300px]">
              <img
                src={selectedCert.image}
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

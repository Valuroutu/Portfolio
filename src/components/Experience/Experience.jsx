import React, { useState, useEffect } from "react";
import SectionHeading from "../UI/SectionHeading";
import Badge from "../UI/Badge";
import { experienceData } from "../../data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, FileText, X } from "lucide-react";

export default function Experience() {
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

  if (!experienceData || experienceData.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WORK & INTERNSHIPS"
          title="Professional Experience"
          subtitle="Applied software engineering experience, full-stack development initiatives, and technical collaboration."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp) => {
            const hasCert = Boolean(
              (exp.certificateImage && exp.certificateImage.trim() !== "") ||
              (exp.certificateUrl && exp.certificateUrl.trim() !== "")
            );
            const certTarget = exp.certificateImage || exp.certificateUrl;

            return (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
              >
                {/* Left accent strip */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      {exp.organizationUrl ? (
                        <a
                          href={exp.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 font-bold uppercase tracking-wider hover:underline transition-colors"
                        >
                          <span>{exp.organization}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                          {exp.organization}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    {exp.location && (
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    {exp.duration ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.duration}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400">
                        <span>Internship</span>
                      </span>
                    )}

                    {/* View Certificate Button */}
                    {hasCert ? (
                      <button
                        onClick={() => setSelectedCert({ title: `${exp.role} — ${exp.organization}`, image: certTarget })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-medium transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs font-mono opacity-80 cursor-not-allowed"
                        title="Upload internship certificate to view"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>View Certificate</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="pt-4 border-t border-slate-800/60 space-y-2 mb-6">
                  {exp.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Internship Certificate Modal Viewer */}
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

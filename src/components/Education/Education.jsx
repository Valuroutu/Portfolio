import React from "react";
import SectionHeading from "../UI/SectionHeading";
import { educationData } from "../../data/education";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education & Credentials"
          subtitle="Formal computer science and engineering coursework with sustained academic performance."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent border */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {item.field}
                    </p>
                  )}
                  
                  {item.institution && (
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.institution}{item.campus ? ` • ${item.campus}` : ""}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  {item.score && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono font-bold">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.score}</span>
                    </div>
                  )}

                  {item.period && (
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-800/60 space-y-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SectionHeading from "../UI/SectionHeading";
import ProfileImage from "../UI/ProfileImage";
import { profileData } from "../../data/profile";
import { Compass, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Engineering Across Web, AI & Blockchain"
          subtitle="A disciplined focus on architectural integrity, algorithmic efficiency, and cryptographically verifiable systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-2 border-b border-slate-800/60">
                <ProfileImage
                  alt="Valuroutu Santosh Kumar"
                  className="w-20 sm:w-24 aspect-[1190/1322] shrink-0 mx-auto sm:mx-0 border border-slate-700/60 shadow-md"
                />
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                    <Compass className="w-5 h-5 text-cyan-400" />
                    <span>Technical Trajectory &amp; Background</span>
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {profileData.fullName}
                  </p>
                  <p className="text-xs text-slate-400">
                    {profileData.academic.degree} &bull; {profileData.academic.institution}
                  </p>
                </div>
              </div>
              
              {profileData.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Clean System Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1">Modular codebases, explicit schemas, strict state boundaries, and maintainable services.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">Cryptographic Verification</h4>
                  <p className="text-xs text-slate-400 mt-1">Foundry-tested smart contracts, non-repudiation, and trust-minimized logic over blind trust.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Timeline / Story Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 px-1">
              DEVELOPER EVOLUTION
            </h3>

            <div className="relative border-l border-slate-800 ml-4 space-y-6 py-2">
              {profileData.narrativeMilestones.map((item, idx) => (
                <div key={idx} className="relative pl-6 group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-cyan-400 group-hover:border-cyan-300 transition-colors" />
                  
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-0.5">
                    {item.stage}
                  </span>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider mb-4 shadow-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

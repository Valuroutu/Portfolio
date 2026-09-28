import React from "react";

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = ""
}) {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:border-slate-500",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50",
    purple: "bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400/50",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50",
    blue: "bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400/50"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3.5 py-1.5"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono border transition-all duration-200 select-none ${
        variantStyles[variant] || variantStyles.default
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
}

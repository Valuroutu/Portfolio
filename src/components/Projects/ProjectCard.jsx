import React from "react";
import { ExternalLink, BookOpen, ArrowUpRight } from "lucide-react";
import { Github } from "../UI/SocialIcons";
import Badge from "../UI/Badge";

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/50">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-[10px] font-mono text-purple-300 px-2 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/40">
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        {/* One-Liner */}
        <p className="text-xs font-medium text-slate-300 mb-3 line-clamp-2">
          {project.oneLiner}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <Badge key={idx} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-500 self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <div>
          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Case Study</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label={`View ${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900 text-cyan-300 transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

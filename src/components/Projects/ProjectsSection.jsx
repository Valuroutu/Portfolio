import React, { useState, useMemo } from "react";
import SectionHeading from "../UI/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { buildDynamicProjects, portfolioProjects, featuredProjects } from "../../data/projects.js";
import { filterPublicRepositories } from "../../config/githubFilters.js";
import { useGitHubRepos } from "../../hooks/useGitHubRepos.js";
import { Search, Sparkles, BookOpen, ArrowRight, RefreshCw } from "lucide-react";
import { Github } from "../UI/SocialIcons";
import Badge from "../UI/Badge";

const CATEGORIES = ["All", "Full Stack", "Blockchain / Web3", "AI / ML"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const { repos: liveRepos, loading: reposLoading, refresh: refreshRepos } = useGitHubRepos();

  // Dynamic project resolution: GitHub API is the source of truth for repository existence
  const { allProjects, dynamicFeatured } = useMemo(() => {
    if (liveRepos && liveRepos.length > 0) {
      const dynamic = buildDynamicProjects(liveRepos);
      return {
        allProjects: dynamic.allProjects,
        dynamicFeatured: dynamic.featuredProjects
      };
    }
    return {
      allProjects: filterPublicRepositories(portfolioProjects),
      dynamicFeatured: filterPublicRepositories(featuredProjects)
    };
  }, [liveRepos]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.oneLiner.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FEATURED WORK"
          title="Engineered Projects & Systems"
          subtitle="Production-grade full-stack platforms, cryptographically secure smart contracts, and applied AI systems."
        />

        {/* FEATURED SPOTLIGHT: Live Verified Highlights */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>High-Impact Engineering Highlights</span>
            </div>
            <button
              onClick={() => refreshRepos()}
              title="Revalidate with current GitHub repositories"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${reposLoading ? "animate-spin text-cyan-400" : ""}`} />
              <span>{reposLoading ? "Syncing..." : "Sync GitHub"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dynamicFeatured.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/90 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                {/* Decorative top-right accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-700/60 text-cyan-300">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/40">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-3">
                    {project.oneLiner}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 mb-6">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="text-center font-mono">
                          <span className="block text-[9px] text-slate-500 uppercase">{s.label}</span>
                          <span className="text-xs font-bold text-cyan-300 truncate block">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, idx) => (
                      <Badge key={idx} variant="default" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Architecture Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
                    aria-label="View source repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search approved projects..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900/70 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
            <p className="text-sm font-mono text-slate-400">
              No approved projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setActiveModalProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

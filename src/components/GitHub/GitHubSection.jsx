import React, { useState, useMemo } from "react";
import SectionHeading from "../UI/SectionHeading";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import { filterPublicRepositories } from "../../config/githubFilters";
import { profileData } from "../../data/profile";
import { Star, GitFork, ExternalLink, Code2, Search } from "lucide-react";
import { Github } from "../UI/SocialIcons";

export default function GitHubSection() {
  const { repos, loading } = useGitHubRepos();
  const [repoSearch, setRepoSearch] = useState("");

  // STRICT GUARANTEE: Filter every repo through the exclusion engine
  const safeRepos = useMemo(() => {
    return filterPublicRepositories(repos);
  }, [repos]);

  // Aggregate language distribution across safe public repos
  const languageStats = useMemo(() => {
    const counts = {};
    safeRepos.forEach((repo) => {
      const lang = repo.language || "Other";
      counts[lang] = (counts[lang] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [safeRepos]);

  const filteredRepos = useMemo(() => {
    const q = repoSearch.toLowerCase().trim();
    if (!q) return safeRepos;
    return safeRepos.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.description && r.description.toLowerCase().includes(q)) ||
        (r.language && r.language.toLowerCase().includes(q))
    );
  }, [safeRepos, repoSearch]);

  const totalSafeRepos = safeRepos.length;

  return (
    <section id="github" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OPEN SOURCE & CODE"
          title="Verified GitHub Repositories"
          subtitle="Real-time public code repositories fetched directly from GitHub with strict privacy and security filtering."
        />

        {/* GitHub Header Summary Banner */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">@Valuroutu</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-400 border border-emerald-800/50">
                  LIVE API
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Valuroutu Santosh Kumar &bull; Computer Science &amp; Engineering
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="text-center px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <span className="block text-slate-500 text-[10px]">PUBLIC REPOS</span>
                <span className="text-cyan-300 font-bold">{loading ? "..." : totalSafeRepos}</span>
              </div>
            </div>

            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Language Breakdown */}
        {languageStats.length > 0 && (
          <div className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/30 mb-8">
            <span className="block text-[11px] font-mono text-slate-400 uppercase mb-3">
              PRIMARY CODEBASE LANGUAGES
            </span>
            <div className="flex flex-wrap gap-2">
              {languageStats.map(([lang, count]) => (
                <div
                  key={lang}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono"
                >
                  <Code2 className="w-3 h-3 text-cyan-400" />
                  <span className="text-slate-200 font-medium">{lang}</span>
                  <span className="text-slate-500 text-[10px]">({count})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search within approved public repositories */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={repoSearch}
              onChange={(e) => setRepoSearch(e.target.value)}
              placeholder="Search repositories by name or topic..."
              className="w-full pl-9 pr-3 py-2 bg-slate-900/70 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:block">
            Filtered against exclusion boundaries
          </span>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 animate-pulse h-40 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                  <div className="h-3 bg-slate-800/60 rounded w-3/4" />
                </div>
                <div className="h-4 bg-slate-800/40 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      {repo.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description || "Public open-source software implementation."}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{repo.language || "Code"}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <Star className="w-3 h-3 text-amber-400" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <GitFork className="w-3 h-3 text-slate-400" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

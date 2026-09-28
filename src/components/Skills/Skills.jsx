import React, { useState } from "react";
import SectionHeading from "../UI/SectionHeading";
import Badge from "../UI/Badge";
import { skillsData } from "../../data/skills";
import { Layers, Blocks, Cpu, Binary, Wrench } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryIcons = {
    fullstack: <Layers className="w-4 h-4" />,
    blockchain: <Blocks className="w-4 h-4" />,
    aiml: <Cpu className="w-4 h-4" />,
    dsa: <Binary className="w-4 h-4" />,
    tools: <Wrench className="w-4 h-4" />
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Skills & Technologies"
          subtitle="A categorized overview of active frameworks, programming languages, protocols, and algorithmic paradigms."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                : "bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <span>All Disciplines</span>
          </button>

          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md transition-all duration-200 hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400">
                      {categoryIcons[category.id]}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Subgroups */}
                <div className="space-y-5">
                  {category.groups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        {group.name}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, sIdx) => (
                          <Badge
                            key={sIdx}
                            variant={skill.highlighted ? "cyan" : "default"}
                            size="md"
                          >
                            <span>{skill.name}</span>
                            {skill.highlighted && (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in active projects</span>
                <span className="text-cyan-400/80">No arbitrary percentages</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

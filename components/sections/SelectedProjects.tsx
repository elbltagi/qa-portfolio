"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, CheckCircle2, Bug, Layers, Terminal, ExternalLink } from "lucide-react";
import { projects, ProjectItem } from "@/data/portfolioData";
import CaseStudyModal from "@/components/ui/CaseStudyModal";

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<"ALL" | "QA" | "DEV">("ALL");

  const filteredProjects = projects.filter((p) => {
    if (filter === "QA") return p.discipline === "TESTED BY ME";
    if (filter === "DEV") return p.discipline === "BUILT BY ME" || p.discipline === "BUILT & TESTED";
    return true;
  });

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#F4F1EA] text-[#181818] border-b-2 border-[#181818] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#181818] pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF5A36]">
              <span>[ SECTION 03 ]</span>
              <span>—</span>
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="font-display font-black text-section-title uppercase tracking-tight text-[#181818]">
              REAL CASE STUDIES & DELIVERABLES
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#5A5752] max-w-xl">
              Authentic software quality audits and frontend implementations. Every project reflects real test scenarios, verified bug reports, and structured engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E8E5DD] border border-[#D5D0C8] font-mono text-xs self-start md:self-auto">
            <button
              onClick={() => setFilter("ALL")}
              className={`px-3.5 py-1.5 font-bold transition-colors ${
                filter === "ALL"
                  ? "bg-[#181818] text-[#F4F1EA]"
                  : "text-[#181818] hover:text-[#FF5A36]"
              }`}
            >
              ALL [04]
            </button>
            <button
              onClick={() => setFilter("QA")}
              className={`px-3.5 py-1.5 font-bold transition-colors ${
                filter === "QA"
                  ? "bg-[#FF5A36] text-[#F4F1EA]"
                  : "text-[#181818] hover:text-[#FF5A36]"
              }`}
            >
              TESTED BY ME [03]
            </button>
            <button
              onClick={() => setFilter("DEV")}
              className={`px-3.5 py-1.5 font-bold transition-colors ${
                filter === "DEV"
                  ? "bg-[#181818] text-[#C6F36B]"
                  : "text-[#181818] hover:text-[#FF5A36]"
              }`}
            >
              BUILT & TESTED [01]
            </button>
          </div>
        </div>

        {/* Asymmetrical Project List */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-[#181818] shadow-[8px_8px_0px_0px_#181818] hover:shadow-[12px_12px_0px_0px_#FF5A36] transition-all duration-300 overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="bg-[#181818] text-[#F4F1EA] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#181818]">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="font-bold text-[#FF5A36]">0{idx + 1}.</span>
                    <span
                      className={`px-2.5 py-0.5 font-bold uppercase text-[10px] ${
                        project.discipline === "TESTED BY ME"
                          ? "bg-[#FF5A36] text-[#F4F1EA]"
                          : "bg-[#C6F36B] text-[#181818]"
                      }`}
                    >
                      {project.discipline}
                    </span>
                    <span className="text-white/40">/</span>
                    <span className="text-[#D5D0C8] uppercase tracking-wider">{project.category}</span>
                  </div>

                  <span className="font-mono text-xs text-white/50">{project.year}</span>
                </div>

                {/* Project Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#181818]">
                  
                  {/* Left Column: Editorial Summary */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#181818] tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      <p className="font-mono text-sm text-[#FF5A36] font-semibold">
                        {project.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-[#5A5752] leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-2 pt-2">
                        <span className="font-mono text-xs uppercase font-bold text-[#181818] block tracking-wider">
                          Key Work & Focus:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.responsibilities.slice(0, 4).map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#5A5752]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A36] shrink-0 mt-0.5" />
                              <span className="text-[#181818]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div className="pt-6 border-t border-[#D5D0C8] space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-[#E8E5DD] border border-[#D5D0C8] font-mono text-[11px] text-[#181818]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-3 bg-[#FF5A36] text-[#F4F1EA] hover:bg-[#181818] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 group"
                        >
                          <span>Inspect Full Case Study</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-white border border-[#181818] hover:bg-[#E8E5DD] font-mono text-xs font-bold text-[#181818] transition-colors flex items-center gap-1.5"
                          >
                            <span>Repo Details</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#5A5752]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Metrics & Graphical Architectural Blueprint */}
                  <div className="lg:col-span-5 bg-[#F4F1EA] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-2 font-mono text-xs font-bold text-[#181818] uppercase tracking-wider">
                        <span>Verified Deliverables</span>
                        <span className="text-[#FF5A36]">Impact Metrics</span>
                      </div>

                      {/* Metrics 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="bg-white p-3.5 border border-[#D5D0C8] shadow-sm text-center sm:text-left"
                          >
                            <span className="font-mono text-[10px] uppercase text-[#5A5752] tracking-wider block">
                              {m.label}
                            </span>
                            <span className="font-display font-black text-2xl text-[#181818] mt-0.5 block">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Deliverables Box */}
                      <div className="bg-white p-4 border border-[#D5D0C8] space-y-2">
                        <span className="font-mono text-xs font-bold text-[#181818] uppercase tracking-wider block">
                          Output Artifacts:
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs text-[#5A5752]">
                          {project.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-[#FF5A36] font-bold">›</span>
                              <span className="text-[#181818]">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* QA Technique Pill */}
                    {project.sampleTestCases && (
                      <div className="p-3 bg-[#E8E5DD] border border-[#D5D0C8] font-mono text-xs flex items-center justify-between">
                        <span className="text-[#5A5752]">Test Matrix Size:</span>
                        <span className="font-bold text-[#181818]">
                          {project.sampleTestCases.length} Executed Scenarios Attached
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

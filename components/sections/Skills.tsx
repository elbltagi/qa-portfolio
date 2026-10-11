"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle2, ChevronRight, Cpu, Code2, ShieldAlert, Wrench, Binary } from "lucide-react";
import { skillsCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState("frontend");
  const [expandedSkill, setExpandedSkill] = useState<string | null>("React.js");

  const currentCategory =
    skillsCategories.find((c) => c.id === activeCategoryId) || skillsCategories[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    qa: <ShieldAlert className="w-4 h-4" />,
    tools: <Wrench className="w-4 h-4" />,
    core: <Binary className="w-4 h-4" />,
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#F4F1EA] text-[#181818] border-b-2 border-[#181818] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#181818] pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43616]">
              <span>[ SECTION 05 ]</span>
              <span>—</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display font-black text-section-title uppercase tracking-tight text-[#181818]">
              AUTHENTIC COMPETENCY MATRIX
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#5A5752] max-w-md">
            Interactive breakdown of practical tools, engineering methodologies, and QA techniques tested under production scenarios.
          </p>
        </div>

        {/* Dynamic Category Switcher Tabs */}
        <div role="tablist" aria-label="Skill categories" className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {skillsCategories.map((category) => {
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                role="tab"
                id={`tab-skill-${category.id}`}
                aria-controls={`panel-skill-${category.id}`}
                aria-selected={isActive}
                type="button"
                onClick={() => {
                  setActiveCategoryId(category.id);
                  setExpandedSkill(category.skills[0]?.name || null);
                }}
                className={`p-4 sm:p-5 text-left border-2 transition-all font-mono text-xs flex flex-col justify-between h-28 cursor-pointer ${
                  isActive
                    ? "bg-[#181818] text-[#F4F1EA] border-[#181818] shadow-[4px_4px_0px_0px_#FF5A36]"
                    : "bg-white text-[#181818] border-[#181818] hover:bg-[#E8E5DD]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 flex items-center justify-center border ${isActive ? "border-white/30 text-[#C6F36B]" : "border-[#181818] text-[#C43616]"}`}>
                    {categoryIcons[category.id]}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                    {category.skills.length} SKILLS
                  </span>
                </div>

                <div>
                  <span className={`text-[10px] uppercase tracking-widest block font-bold ${isActive ? "text-[#C6F36B]" : "text-[#C43616]"}`}>
                    {category.tag}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5 block">
                    {category.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Arena */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            role="tabpanel"
            id={`panel-skill-${currentCategory.id}`}
            aria-labelledby={`tab-skill-${currentCategory.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-2 border-[#181818] shadow-[8px_8px_0px_0px_#181818] p-6 sm:p-10 space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5D0C8] pb-6">
              <div>
                <span className="font-mono text-xs uppercase text-[#C43616] font-bold tracking-wider">
                  Category Focus: {currentCategory.tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#181818] mt-1">
                  {currentCategory.title}
                </h3>
              </div>
              <p className="font-mono text-xs text-[#5A5752] max-w-md">
                {currentCategory.description}
              </p>
            </div>

            {/* Interactive Skills Grid with Expandable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.skills.map((skill) => {
                const isSelected = expandedSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isSelected}
                    onClick={() => setExpandedSkill(isSelected ? null : skill.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedSkill(isSelected ? null : skill.name);
                      }
                    }}
                    className={`p-5 border-2 transition-all cursor-pointer font-mono focus-visible:outline-2 focus-visible:outline-[#181818] ${
                      isSelected
                        ? "bg-[#181818] text-[#F4F1EA] border-[#181818] shadow-[4px_4px_0px_0px_#FF5A36]"
                        : "bg-[#F4F1EA] text-[#181818] border-[#D5D0C8] hover:border-[#181818]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            isSelected ? "text-[#C6F36B]" : "text-[#C43616]"
                          }`}
                        />
                        <span className="font-display font-bold text-base sm:text-lg">
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] uppercase px-2 py-0.5 font-bold ${
                          isSelected
                            ? "bg-[#C6F36B] text-[#181818]"
                            : "bg-[#E8E5DD] text-[#181818]"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Expandable Practical Application Details */}
                    <div className="mt-3 pt-3 border-t border-current/15 text-xs font-sans leading-relaxed">
                      <span className={`font-mono text-[11px] uppercase tracking-wider block font-bold mb-1 ${isSelected ? "text-[#C6F36B]" : "text-[#C43616]"}`}>
                        Applied Scope:
                      </span>
                      <p className={isSelected ? "text-[#D5D0C8]" : "text-[#5A5752]"}>
                        {skill.experience}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Proof Metric */}
            <div className="pt-4 border-t border-[#D5D0C8] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#5A5752]">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#C43616]" />
                All technical skills verified through hands-on projects & DEPI training.
              </span>
              <span className="font-bold text-[#181818]">
                CLICK ANY CARD TO INSPECT EXPERIENCE
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

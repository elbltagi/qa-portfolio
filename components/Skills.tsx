"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Code2, 
  Wrench, 
  CheckCircle2, 
  Terminal,
  Layers,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    category: "TESTING & QA",
    subtitle: "Core Quality Assurance Capabilities",
    icon: ShieldCheck,
    accentColor: "text-[#00D4FF]",
    borderColor: "border-[#00D4FF]/30",
    skills: [
      { name: "Manual Testing", level: "Advanced" },
      { name: "Functional Testing", level: "Advanced" },
      { name: "Exploratory Testing", level: "Proficient" },
      { name: "Regression Testing", level: "Advanced" },
      { name: "Test Case Design", level: "EP & BVA" },
      { name: "Equivalence Partitioning", level: "Technique" },
      { name: "Boundary Value Analysis", level: "Technique" },
      { name: "Bug Reporting", level: "Detailed Logs" },
    ],
  },
  {
    category: "PROGRAMMING",
    subtitle: "Technical Developer Credibility",
    icon: Code2,
    accentColor: "text-[#7C3AED]",
    borderColor: "border-[#7C3AED]/30",
    skills: [
      { name: "Java", level: "Core Logic" },
      { name: "C++", level: "OOP Concepts" },
      { name: "JavaScript", level: "ES6+" },
      { name: "React", level: "Frontend" },
      { name: "Next.js", level: "Full-Stack" },
      { name: "Express.js", level: "REST APIs" },
    ],
  },
  {
    category: "TOOLS & WORKFLOW",
    subtitle: "QA & Development Tooling",
    icon: Wrench,
    accentColor: "text-[#00D4FF]",
    borderColor: "border-white/10",
    skills: [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "Postman", level: "API Testing" },
      { name: "Jira", level: "Workflow / Learning" },
      { name: "Test Documentation", level: "Matrices & Sheets" },
      { name: "Chrome DevTools", level: "DOM & Network" },
      { name: "Markdown & Docs", level: "Reports" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            My testing expertise is powered by a strong programming foundation, allowing me to understand technical implementations and communicate effectively with developers.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#111820] p-6 rounded-2xl border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                  <div className={`w-10 h-10 rounded-xl bg-[#0B0F14] border ${cat.borderColor} flex items-center justify-center`}>
                    <cat.icon className={`w-5 h-5 ${cat.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide font-mono">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-[#94A3B8] font-sans">{cat.subtitle}</span>
                  </div>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group bg-[#0B0F14] hover:bg-[#16202C] px-3 py-2 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-all flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <span className="text-xs font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#94A3B8] bg-white/5 px-1.5 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-[#94A3B8] flex items-center justify-between">
                <span>Verification Level</span>
                <span className="text-emerald-400">Verified Knowledge</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

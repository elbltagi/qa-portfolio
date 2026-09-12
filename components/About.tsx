"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  GraduationCap, 
  Code, 
  Layers, 
  Bug, 
  CheckCircle2, 
  Terminal,
  ShieldCheck,
  Compass
} from "lucide-react";

const journeySteps = [
  {
    year: "Phase 1",
    title: "Software Engineering Foundations",
    description: "Built strong problem-solving skills and computer science fundamentals using Java and C++.",
    icon: Code,
  },
  {
    year: "Phase 2",
    title: "Full-Stack Web Development",
    description: "Hands-on experience constructing web applications with React, Next.js, and Express.js, understanding frontend and backend logic.",
    icon: Layers,
  },
  {
    year: "Phase 3",
    title: "QA & Software Testing Trainee @ DEPI",
    description: "Specializing in structured manual testing, Equivalence Partitioning, Boundary Value Analysis, and comprehensive bug reporting.",
    icon: ShieldCheck,
  },
];

const techStack = ["Java", "C++", "React", "Next.js", "Express.js", "JavaScript", "HTML/CSS"];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-[#7C3AED]">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Technical Perspective */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-[#111820] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/5 rounded-bl-full pointer-events-none"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#00D4FF]" />
                QA Engineer with a Developer's Perspective
              </h3>

              <div className="space-y-4 text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="text-white">Youssef Salah Elbltagi</strong>, a Software Testing trainee at <span className="text-[#00D4FF] font-semibold">DEPI</span> with a strong interest in Quality Assurance and software reliability.
                </p>
                <p>
                  My background in <strong className="text-white">Java, C++, React, Next.js, and Express.js</strong> allows me to understand applications from both the tester's and developer's perspective.
                </p>
                <p>
                  I focus on identifying defects early in the development lifecycle, designing effective test scenarios, and helping teams deliver reliable, defect-free, and user-friendly software.
                </p>
              </div>

              {/* Highlight Card inside Bio */}
              <div className="pt-4 border-t border-white/10">
                <div className="bg-[#0B0F14] p-4 rounded-xl border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#94A3B8]">Professional Status</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Active Trainee
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Software Testing Trainee</h4>
                      <p className="text-xs font-mono text-[#00D4FF]">Digital Egypt Pioneers Initiative (DEPI)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Stack Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-[#94A3B8] block">Technical Background & Languages:</span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-[#F8FAFC] bg-[#0B0F14] border border-white/10 rounded-lg hover:border-[#00D4FF]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Journey & Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#111820] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#00D4FF]" />
                  Professional Journey
                </h3>
                <span className="text-xs font-mono text-[#7C3AED]">Testing Focus</span>
              </div>

              {/* Timeline Steps */}
              <div className="relative pl-6 space-y-8 border-l border-white/10">
                {journeySteps.map((step, idx) => (
                  <div key={step.title} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0B0F14] border-2 border-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:shadow-[0_0_10px_rgba(0,212,255,0.6)] transition-all"></div>
                    
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#00D4FF] uppercase tracking-wider">
                        {step.year}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dual Perspective Advantage Box */}
              <div className="p-4 bg-[#0B0F14] rounded-xl border border-[#00D4FF]/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D4FF]">
                  <CheckCircle2 className="w-4 h-4" />
                  Why Developer Experience Matters in QA
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Understanding code structure allows me to pinpoint root causes, speak developer language, and write high-quality, actionable defect tickets.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

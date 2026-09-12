"use client";

import { motion } from "framer-motion";
import { 
  FileSearch, 
  Map, 
  FileEdit, 
  PlayCircle, 
  RefreshCw, 
  GitCommit,
  CheckCircle
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Analyze business requirements, user stories, and application architecture to define clear testing goals.",
    icon: FileSearch,
    details: "Identify missing requirement specifications & edge-case scenarios early.",
  },
  {
    step: "02",
    title: "Plan Test Scenarios",
    description: "Identify testing scope, risk areas, critical user journeys, and target environments.",
    icon: Map,
    details: "Prioritize scenarios based on business impact and risk assessment.",
  },
  {
    step: "03",
    title: "Design Test Cases",
    description: "Create detailed test cases applying Equivalence Partitioning and Boundary Value Analysis.",
    icon: FileEdit,
    details: "Include clear pre-conditions, steps, input data, and expected outcomes.",
  },
  {
    step: "04",
    title: "Execute & Report",
    description: "Run manual tests, uncover defects, and document comprehensive bug reports with reproduction steps.",
    icon: PlayCircle,
    details: "Provide screenshots, logs, severity, and priority for developer clarity.",
  },
  {
    step: "05",
    title: "Verify & Improve",
    description: "Perform regression testing on fixed defects and ensure new updates introduced no regressions.",
    icon: RefreshCw,
    details: "Sign off on release build after re-testing and regression suite validation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#0B0F14] relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-[#7C3AED]">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-cyan">Testing Process</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            A systematic, 5-step quality assurance workflow to ensure no critical defect makes it to production.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* Process Steps Timeline - Responsive Horizontal Desktop / Vertical Mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF]/20 via-[#7C3AED]/40 to-[#00D4FF]/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#111820] p-6 rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#0B0F14] border border-[#00D4FF]/30 flex items-center justify-center font-mono text-sm font-bold text-[#00D4FF] group-hover:border-[#00D4FF] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all">
                    {item.step}
                  </span>
                  <item.icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#7C3AED] transition-colors" />
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Detail Pill */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <p className="text-[11px] font-mono text-[#00D4FF]/90 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.details}</span>
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

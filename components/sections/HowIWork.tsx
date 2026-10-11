"use client";

import { motion } from "framer-motion";
import { Search, Code2, CheckSquare, Sparkles, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/portfolioData";

export default function HowIWork() {
  const stepIcons = [
    <Search key="1" className="w-5 h-5" />,
    <Code2 key="2" className="w-5 h-5" />,
    <CheckSquare key="3" className="w-5 h-5" />,
    <Sparkles key="4" className="w-5 h-5" />,
  ];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#111215] text-[#F4F1EA] border-b-2 border-[#181818] relative overflow-hidden bg-dark-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF5A36]">
              <span>[ SECTION 06 ]</span>
              <span>—</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-section-title uppercase tracking-tight text-white">
              HOW I WORK: THE 4-PHASE CYCLE
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#9E9B95] max-w-md">
            A disciplined, iterative cycle combining exploratory QA with clean frontend architecture to eliminate regressions before production release.
          </p>
        </div>

        {/* 4-Phase Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-[#18191E] border border-white/10 hover:border-[#FF5A36] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative"
            >
              <div className="space-y-6">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#FF5A36]">
                    {step.phase}
                  </span>
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#C6F36B] group-hover:bg-[#FF5A36] group-hover:text-[#181818] transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Name & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight group-hover:text-[#FF5A36] transition-colors">
                    {step.name}
                  </h3>
                  <p className="font-mono text-xs text-[#C6F36B]">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9E9B95] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Output Deliverable */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-1">
                <span className="font-mono text-[10px] uppercase text-white/70 tracking-wider block">
                  Phase Deliverable:
                </span>
                <span className="font-mono text-xs text-white font-bold block">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Process Slogan */}
        <div className="mt-12 p-6 bg-[#18191E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9E9B95]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6F36B] animate-pulse"></span>
            <span className="text-white font-bold">QA INTEGRATION PHILOSOPHY:</span>
            <span>Testing begins during requirements analysis, not after code completion.</span>
          </div>
          <a
            href="#contact"
            className="text-[#FF5A36] hover:text-[#C6F36B] font-bold uppercase flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Discuss Workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

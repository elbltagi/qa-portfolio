"use client";

import { motion } from "framer-motion";
import { 
  CheckSquare, 
  FileSpreadsheet, 
  Bug, 
  RotateCcw, 
  ArrowRight, 
  Wrench,
  SlidersHorizontal
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Manual Testing",
    description:
      "Thoroughly test websites and applications to identify functional, usability, UI responsiveness, and critical business workflow issues.",
    icon: CheckSquare,
    badge: "Functional & UI",
    highlights: ["Usability Testing", "Cross-Browser Checks", "End-to-End Workflows"],
  },
  {
    id: "02",
    title: "Test Case Design",
    description:
      "Create structured and comprehensive test cases using Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) for maximum test coverage.",
    icon: FileSpreadsheet,
    badge: "EP & BVA Techniques",
    highlights: ["Boundary Verification", "Equivalence Classes", "Test Matrix Creation"],
  },
  {
    id: "03",
    title: "Bug Reporting",
    description:
      "Provide clear and actionable defect reports with step-by-step reproduction steps, severity, priority, logs, and expected vs actual results.",
    icon: Bug,
    badge: "Actionable Defect Logs",
    highlights: ["Severity & Priority Rating", "Reproduction Steps", "Expected vs Actual Analysis"],
  },
  {
    id: "04",
    title: "Regression & Exploratory Testing",
    description:
      "Ensure new updates and bug fixes don't break existing functionality through exploratory testing sessions and regression test execution.",
    icon: RotateCcw,
    badge: "Quality Protection",
    highlights: ["Fix Verification", "Unscripted Exploratory Scenarios", "Release Validation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B0F14] relative">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF]/5 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF]">
            <Wrench className="w-3.5 h-3.5" />
            <span>QA Services offered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Can Help <span className="text-gradient-cyan">Your Business</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Structured quality assurance services designed to uncover hidden defects, improve software reliability, and protect your user experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#111820] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background Number Accent */}
              <span className="absolute top-4 right-6 text-4xl font-mono font-extrabold text-white/[0.03] group-hover:text-[#00D4FF]/10 transition-colors select-none">
                {service.id}
              </span>

              <div className="space-y-4">
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#00D4FF]/30 flex items-center justify-center group-hover:border-[#00D4FF] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all">
                    <service.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-2.5 py-1 rounded-full border border-[#7C3AED]/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>

                {/* Service Highlights List */}
                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  {service.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold font-mono text-[#00D4FF]">
                <span>Request Service</span>
                <div className="w-8 h-8 rounded-full bg-[#0B0F14] border border-white/10 flex items-center justify-center group-hover:bg-[#00D4FF] group-hover:text-[#0B0F14] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

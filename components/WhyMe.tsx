"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  SearchCheck, 
  TrendingUp, 
  CheckCircle,
  Sparkles,
  Zap
} from "lucide-react";

const valuePropositions = [
  {
    title: "Technical Perspective",
    quote: "My programming background helps me understand application behavior and communicate effectively with developers.",
    icon: Code2,
    accent: "from-[#00D4FF]/20 to-[#00D4FF]/5",
    border: "border-[#00D4FF]/30",
    bullets: [
      "Translates user bugs into technical root causes",
      "Speaks the language of frontend & backend devs",
      "Inspects network payloads & DOM structure",
    ],
  },
  {
    title: "Detail-Oriented Testing",
    quote: "I focus on edge cases, validation, and realistic user scenarios that automated scripts often miss.",
    icon: SearchCheck,
    accent: "from-[#7C3AED]/20 to-[#7C3AED]/5",
    border: "border-[#7C3AED]/30",
    bullets: [
      "Meticulous Boundary Value & Equivalence checks",
      "Identifies workflow friction & UI inconsistencies",
      "Rigorous verification of negative input fields",
    ],
  },
  {
    title: "Continuous Learning",
    quote: "I continuously improve my testing knowledge and technical skills to deliver better quality results.",
    icon: TrendingUp,
    accent: "from-[#00D4FF]/20 to-[#7C3AED]/10",
    border: "border-white/10",
    bullets: [
      "DEPI Quality Assurance Specialization",
      "Expanding API & Mobile testing toolsets",
      "Adopting modern QA best practices",
    ],
  },
];

export default function WhyMe() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs font-mono text-[#7C3AED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why <span className="text-gradient-cyan">Choose Me?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Combining software development knowledge with disciplined QA testing techniques to protect your product quality.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`bg-gradient-to-b ${item.accent} p-8 rounded-2xl border ${item.border} hover:border-[#00D4FF] transition-all duration-300 shadow-xl flex flex-col justify-between group`}
            >
              <div className="space-y-6">
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h3>

                {/* Quote */}
                <p className="text-sm text-[#94A3B8] leading-relaxed italic border-l-2 border-[#00D4FF] pl-3.5 py-1">
                  "{item.quote}"
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-white">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00D4FF]">
                <span>Client Benefit</span>
                <Zap className="w-4 h-4 text-[#00D4FF]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

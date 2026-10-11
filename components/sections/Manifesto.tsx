"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, CheckCircle2, ShieldCheck, Code2 } from "lucide-react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="py-24 sm:py-32 bg-[#111215] text-[#F4F1EA] border-b-2 border-[#181818] relative overflow-hidden bg-dark-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Index */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF5A36]">
            <span>[ SECTION 02 ]</span>
            <span>—</span>
            <span>CREATIVE MANIFESTO</span>
          </div>

          <div className="font-mono text-xs text-[#9E9B95] uppercase tracking-wider hidden sm:block">
            PHILOSOPHY // DUAL PERSPECTIVE
          </div>
        </div>

        {/* Oversized Statement */}
        <div className="space-y-8 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold text-editorial-title leading-[0.96] tracking-tight text-white"
          >
            "Beautiful interfaces mean nothing{" "}
            <span className="text-[#FF5A36] underline decoration-4 underline-offset-8">
              if they don't work.
            </span>"
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            <div className="md:col-span-4 font-mono text-xs uppercase tracking-wider text-[#C6F36B] space-y-2">
              <p className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#C6F36B]" /> THE DUAL MINDSET
              </p>
              <div className="w-12 h-1 bg-[#C6F36B]"></div>
            </div>

            <div className="md:col-span-8 space-y-6 text-[#9E9B95] font-body text-base sm:text-lg leading-relaxed">
              <p>
                In today's software landscape, developers often build without considering real-world edge cases, while traditional testers report bugs without understanding the underlying code architecture.
              </p>

              <p className="text-white font-medium">
                I bridge that gap. As a Frontend Developer trained in modern frameworks like React and Next.js, and a dedicated Software QA Trainee at DEPI, I treat quality assurance not as an afterthought, but as an active engineering discipline.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs text-white">
                <div className="p-4 bg-[#18191E] border border-white/10 flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-[#C6F36B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase text-[#C6F36B]">When I Build:</span>
                    <span className="text-[#9E9B95] text-[11px] leading-normal block mt-1">
                      I write modular, accessible code with input validation and edge cases baked into the UI architecture.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#18191E] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5A36] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase text-[#FF5A36]">When I Test:</span>
                    <span className="text-[#9E9B95] text-[11px] leading-normal block mt-1">
                      I systematically stress test boundaries, simulate edge cases, and report actionable tickets that engineers appreciate.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

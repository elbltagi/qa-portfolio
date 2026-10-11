"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Bug, CheckCircle2, ShieldAlert, Sparkles, Terminal, Cpu } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const [activeMode, setActiveMode] = useState<"build" | "break">("build");

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 bg-[#F4F1EA] bg-studio-grid border-b-2 border-[#181818] overflow-hidden"
    >
      {/* Top Meta Status Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D5D0C8] pb-3"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-[#181818]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6F36B] border border-[#181818] animate-pulse"></span>
            <span className="font-bold uppercase tracking-wider">Status:</span>
            <span className="text-[#5A5752]">DEPI QA Trainee • Open for Opportunities</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-[#5A5752]">
            <span>LOCATION: EGYPT [REMOTE WORLDWIDE]</span>
            <span>•</span>
            <span>SPECIALIZATION: DEV & QA</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] text-[#F4F1EA] font-mono text-xs uppercase tracking-widest"
            >
              <Cpu className="w-3.5 h-3.5 text-[#C6F36B]" />
              <span>Frontend Developer & Software QA Engineer</span>
            </motion.div>

            {/* Expressive Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-1 font-display font-black text-hero-giant text-[#181818] tracking-tighter"
            >
              <div className="overflow-hidden">
                <span className="block hover:text-[#C43616] transition-colors duration-200 cursor-default">
                  I BUILD IT.
                </span>
              </div>
              <div className="overflow-hidden flex items-center gap-3">
                <span className="block text-[#D43D1A] hover:text-[#181818] transition-colors duration-200 cursor-default">
                  I BREAK IT.
                </span>
                <span className="hidden sm:inline-block w-8 sm:w-16 h-2 bg-[#181818]"></span>
              </div>
              <div className="overflow-hidden">
                <span className="block hover:text-[#C43616] transition-colors duration-200 cursor-default">
                  I MAKE IT BETTER.
                </span>
              </div>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-base sm:text-lg lg:text-xl text-[#5A5752] max-w-xl leading-relaxed"
            >
              I create responsive digital experiences, challenge their limits, and refine every detail to deliver interfaces that look exceptional and work reliably.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton href="#work" variant="primary" size="lg" showArrow>
                Explore My Work
              </MagneticButton>

              <MagneticButton href="#contact" variant="outline" size="lg">
                Let's Talk
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Hero Column: Interactive Dual-Discipline Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Shadow Accent */}
            <div className="w-full bg-[#181818] text-[#F4F1EA] border-2 border-[#181818] shadow-[12px_12px_0px_0px_#FF5A36] overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-[#24252B] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5A36]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#C6F36B]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#D5D0C8]"></span>
                  <span className="font-mono text-[11px] text-[#9E9B95] ml-2">
                    console://dual-lens.v1
                  </span>
                </div>

                {/* Mode Switcher */}
                <div role="group" aria-label="Interactive preview mode" className="flex items-center bg-[#181818] p-1 border border-white/10 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveMode("build")}
                    aria-pressed={activeMode === "build"}
                    className={`px-3 py-1 font-bold transition-all cursor-pointer ${
                      activeMode === "build"
                        ? "bg-[#C6F36B] text-[#181818]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    BUILD MODE
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMode("break")}
                    aria-pressed={activeMode === "break"}
                    className={`px-3 py-1 font-bold transition-all cursor-pointer ${
                      activeMode === "break"
                        ? "bg-[#FF5A36] text-[#181818]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    BREAK MODE
                  </button>
                </div>
              </div>

              {/* Dynamic Console Body */}
              <div className="p-5 sm:p-6 font-mono text-xs space-y-4 min-h-[310px] flex flex-col justify-between">
                {activeMode === "build" ? (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[#C6F36B] flex items-center gap-1.5 font-bold uppercase">
                        <Code2 className="w-4 h-4" /> Frontend Engineering Stack
                      </span>
                      <span className="text-white/50 text-[10px]">React 19 / Next.js</span>
                    </div>

                    <div className="space-y-2 text-[#9E9B95] leading-relaxed">
                      <p className="text-white font-sans text-sm font-semibold">
                        "Crafting resilient interfaces with structural clarity."
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Components</span>
                          <span className="text-[10px] text-[#C6F36B]">Accessible & Modular</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Responsiveness</span>
                          <span className="text-[10px] text-[#C6F36B]">Fluid Clamp() Grid</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">TypeScript</span>
                          <span className="text-[10px] text-[#C6F36B]">Strict Type Safety</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Performance</span>
                          <span className="text-[10px] text-[#C6F36B]">Zero Layout Shifts</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#C6F36B]/10 border border-[#C6F36B]/30 text-[#C6F36B] text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Ready to translate complex UI designs into bulletproof code.</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[#FF5A36] flex items-center gap-1.5 font-bold uppercase">
                        <ShieldAlert className="w-4 h-4" /> QA & Vulnerability Lens
                      </span>
                      <span className="text-white/50 text-[10px]">DEPI Trainee Suite</span>
                    </div>

                    <div className="space-y-2 text-[#9E9B95] leading-relaxed">
                      <p className="text-white font-sans text-sm font-semibold">
                        "Uncovering edge cases before real users feel the pain."
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Technique 01</span>
                          <span className="text-[10px] text-[#FF5A36]">Boundary Value Analysis</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Technique 02</span>
                          <span className="text-[10px] text-[#FF5A36]">Equivalence Partitioning</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Coverage</span>
                          <span className="text-[10px] text-[#FF5A36]">Negative & Race Tests</span>
                        </div>
                        <div className="bg-[#24252B] p-2 border border-white/5">
                          <span className="text-white block font-bold">Triage</span>
                          <span className="text-[10px] text-[#FF5A36]">Actionable Repro Logs</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#FF5A36]/10 border border-[#FF5A36]/30 text-[#FF5A36] text-[11px] flex items-center gap-2">
                      <Bug className="w-4 h-4 shrink-0" />
                      <span>Testing with developer insight to diagnose root causes faster.</span>
                    </div>
                  </div>
                )}

                {/* Console Footer Status */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                  <span>TAP TOGGLE TO SWITCH PERSPECTIVE</span>
                  <span className="text-[#C6F36B]">100% VERIFIED SKILLS</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Discovery Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <a
          href="#manifesto"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#5A5752] hover:text-[#FF5A36] transition-colors group"
        >
          <span className="w-6 h-6 rounded-full border border-[#D5D0C8] flex items-center justify-center group-hover:border-[#FF5A36]">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </span>
          <span className="uppercase tracking-widest text-[11px]">Scroll to Discover Manifesto</span>
        </a>
      </div>
    </section>
  );
}

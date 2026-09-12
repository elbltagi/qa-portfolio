"use client";

import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  FileCheck2, 
  Bug, 
  Code2, 
  ArrowRight, 
  Award,
  CheckCircle,
  Terminal
} from "lucide-react";
import QADashboardWidget from "./QADashboardWidget";

const stats = [
  { label: "Manual Testing", value: "Functional & UI", icon: FileCheck2 },
  { label: "Test Case Design", value: "EP & BVA", icon: ShieldAlert },
  { label: "Bug Reporting", value: "Detailed Reproduction", icon: Bug },
  { label: "Technical Dev", value: "Java/C++/React", icon: Code2 },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-gradient blur-3xl pointer-events-none -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Trainee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111820] border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF] backdrop-blur-md">
              <Award className="w-4 h-4 text-[#00D4FF]" />
              <span>Software Testing Trainee @ DEPI</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h2 className="text-sm font-mono uppercase tracking-widest text-[#94A3B8] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#7C3AED]" /> Youssef Salah Elbltagi
              </h2>
              
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Software Tester Who <br className="hidden sm:block" />
                <span className="text-gradient-cyan">Finds Bugs Before</span> <br />
                <span className="text-[#00D4FF]">Your Users Do.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed font-sans">
              I help businesses improve software quality through structured manual testing, test case design, exploratory testing, and detailed bug reporting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm text-[#0B0F14] bg-[#00D4FF] hover:bg-[#38E0FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#111820] border border-white/10 hover:border-[#00D4FF]/50 hover:bg-[#16202C] transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>

            {/* Trust Badges / Quick Stats Grid */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="bg-[#111820]/80 p-3 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-colors"
                >
                  <stat.icon className="w-4 h-4 text-[#00D4FF] mb-1.5" />
                  <div className="text-xs font-bold text-white font-sans">{stat.label}</div>
                  <div className="text-[11px] text-[#94A3B8] font-mono mt-0.5">{stat.value}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Hero Column: Interactive QA Console */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF]/30 to-[#7C3AED]/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <QADashboardWidget />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

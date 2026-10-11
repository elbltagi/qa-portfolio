"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181818] text-[#F4F1EA] border-t-2 border-[#181818] pt-16 pb-12 font-sans relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        YS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 font-mono text-[11px] text-[#C6F36B] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C6F36B] animate-pulse"></span>
              {personalInfo.status}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              {personalInfo.name}
            </h3>

            <p className="font-mono text-sm text-[#9E9B95] max-w-sm leading-relaxed">
              "I build digital experiences, test their limits, and make them better."
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-xs sm:text-sm text-[#FF5A36] hover:text-[#C6F36B] transition-colors underline underline-offset-4"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white/50 pb-1">
              Architecture Index
            </div>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs text-[#9E9B95]">
              <li><a href="#home" className="hover:text-[#FF5A36] transition-colors">01. Hero Console</a></li>
              <li><a href="#manifesto" className="hover:text-[#FF5A36] transition-colors">02. Manifesto</a></li>
              <li><a href="#work" className="hover:text-[#FF5A36] transition-colors">03. Selected Work</a></li>
              <li><a href="#services" className="hover:text-[#FF5A36] transition-colors">04. Services</a></li>
              <li><a href="#skills" className="hover:text-[#FF5A36] transition-colors">05. Technical Skills</a></li>
              <li><a href="#process" className="hover:text-[#FF5A36] transition-colors">06. QA Process</a></li>
              <li><a href="#playground" className="hover:text-[#FF5A36] transition-colors">07. QA Playground</a></li>
              <li><a href="#contact" className="hover:text-[#FF5A36] transition-colors">08. Contact Studio</a></li>
            </ul>
          </div>

          {/* Socials & Return to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-white/50 pb-1">
                Verified Channels
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-2.5 bg-white/5 hover:bg-[#FF5A36] hover:text-[#181818] border border-white/10 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-2.5 bg-white/5 hover:bg-[#C6F36B] hover:text-[#181818] border border-white/10 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F4F1EA] transition-colors group"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#FF5A36] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Legal & Meta Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <p>© 2026 Youssef Salah Elbltagi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#C6F36B]">Standard: DEPI QA Trainee</span>
            <span>•</span>
            <span>No AI Placeholders</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

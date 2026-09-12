"use client";

import { ShieldCheck, Mail, ChevronUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080B0F] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#111820] border border-[#00D4FF]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Youssef Salah Elbltagi
              </span>
            </div>

            <p className="text-xs font-mono text-[#00D4FF]">
              Software Tester | QA Engineer (DEPI Trainee)
            </p>

            <p className="text-sm text-[#94A3B8] max-w-sm italic">
              "Building better software through quality testing."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              <li><a href="#home" className="hover:text-[#00D4FF] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#00D4FF] transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-[#00D4FF] transition-colors">QA Services</a></li>
              <li><a href="#projects" className="hover:text-[#00D4FF] transition-colors">Selected Projects</a></li>
              <li><a href="#process" className="hover:text-[#00D4FF] transition-colors">Testing Process</a></li>
              <li><a href="#skills" className="hover:text-[#00D4FF] transition-colors">Technical Skills</a></li>
              <li><a href="#contact" className="hover:text-[#00D4FF] transition-colors">Hire Me</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00D4FF] hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00D4FF] hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00D4FF] hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00D4FF] transition-colors group"
            >
              <span>Back to Top</span>
              <div className="w-6 h-6 rounded-md bg-[#111820] border border-white/10 flex items-center justify-center group-hover:border-[#00D4FF]">
                <ChevronUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <p>© 2026 Youssef Salah Elbltagi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>QA Standard:</span>
            <span className="text-[#00D4FF]">DEPI Certified Trainee</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

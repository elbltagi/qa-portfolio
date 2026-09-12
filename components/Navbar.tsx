"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, Terminal, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-black/50" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#111820] border border-[#00D4FF]/30 flex items-center justify-center group-hover:border-[#00D4FF] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300">
              <ShieldCheck className="w-5.5 h-5.5 text-[#00D4FF]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                YS <span className="text-[#00D4FF] font-mono">//</span> QA
              </span>
              <span className="text-[10px] text-[#94A3B8] tracking-wider uppercase font-mono -mt-1">
                Software Tester
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#111820]/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#94A3B8] hover:text-[#00D4FF] hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Freelance
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-[#0B0F14] bg-[#00D4FF] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#38E0FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] active:scale-95"
            >
              <span>Hire Me</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-[#0B0F14] bg-[#00D4FF] rounded-md"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-white focus:outline-none bg-[#111820] rounded-lg border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#111820] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#00D4FF]" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between px-4">
                <span className="text-xs text-[#94A3B8] font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" /> Youssef Salah @ DEPI
                </span>
                <span className="text-xs text-emerald-400 font-mono">Status: Ready</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work", path: "/work" },
  { name: "Manifesto", href: "#manifesto", path: "/#manifesto" },
  { name: "Services", href: "#services", path: "/services" },
  { name: "Skills", href: "#skills", path: "/#skills" },
  { name: "Process", href: "#process", path: "/#process" },
  { name: "Playground", href: "#playground", path: "/#playground" },
  { name: "About", href: "#about", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F1EA]/90 backdrop-blur-md py-3 border-b border-[#D5D0C8] shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <span className="w-8 h-8 rounded-none bg-[#181818] text-[#F4F1EA] group-hover:bg-[#FF5A36] flex items-center justify-center font-display font-black text-sm transition-colors duration-200">
              YS
            </span>
            <span className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#181818] uppercase">
                Youssef Salah
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#5A5752] -mt-1">
                Frontend • QA Engineer
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 border border-[#D5D0C8] bg-[#E8E5DD]/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-mono font-medium text-[#181818] hover:text-[#FF5A36] rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Block */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-[#181818] bg-[#E8E5DD] px-3 py-1.5 rounded-full border border-[#D5D0C8]">
              <span className="w-2 h-2 rounded-full bg-[#C6F36B] border border-[#181818] animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FF5A36] text-[#F4F1EA] hover:bg-[#181818] transition-colors rounded-full font-mono text-xs font-bold uppercase tracking-wider"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 bg-[#FF5A36] text-[#F4F1EA] text-xs font-mono font-bold uppercase rounded-full"
            >
              Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#181818] bg-[#181818] text-[#F4F1EA] hover:bg-[#FF5A36] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#181818] text-[#F4F1EA] border-b-2 border-[#FF5A36] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 border-b border-white/10 font-display text-xl uppercase font-bold tracking-tight hover:text-[#FF5A36] transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-[#C6F36B]">0{i + 1}</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between font-mono text-xs text-white/60">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6F36B] animate-pulse"></span>
                  DEPI QA Trainee
                </span>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FF5A36] font-bold uppercase underline"
                >
                  Contact Youssef →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

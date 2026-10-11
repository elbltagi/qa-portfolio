"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/portfolioData";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#111215] text-[#F4F1EA] border-b-2 border-[#181818] relative overflow-hidden bg-dark-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C6F36B]">
              <span>[ SECTION 04 ]</span>
              <span>—</span>
              <span>STUDIO SERVICES</span>
            </div>
            <h2 className="font-display font-black text-section-title uppercase tracking-tight text-white">
              THREE DISCIPLINED OFFERINGS
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#9E9B95] max-w-md">
            Engineered for founders, technical recruiters, engineering leads, and agencies who require reliable execution across frontend code and software quality.
          </p>
        </div>

        {/* 3 Expressive Editorial Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#18191E] border border-white/10 hover:border-[#FF5A36] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Massive Editorial Number Watermark */}
              <div aria-hidden="true" className="absolute top-4 right-6 font-display font-black text-6xl text-white/[0.04] group-hover:text-[#FF5A36]/10 transition-colors select-none pointer-events-none">
                {service.number}
              </div>

              <div className="space-y-6 relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                    PHASE {service.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C6F36B] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#FF5A36] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs text-[#C6F36B]">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9E9B95] font-body leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="font-mono text-xs uppercase font-bold text-white tracking-wider block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-mono text-[#9E9B95]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A36] shrink-0 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {service.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#FF5A36] group-hover:bg-[#FF5A36] group-hover:text-[#181818] flex items-center justify-center text-white transition-all duration-200"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

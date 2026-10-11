"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface WorkArchiveClientProps {
  initialProjects: ProjectItem[];
}

export default function WorkArchiveClient({ initialProjects }: WorkArchiveClientProps) {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "QA" | "DEV">("ALL");

  const filtered = initialProjects.filter((p) => {
    if (activeFilter === "QA") return p.discipline === "TESTED BY ME";
    if (activeFilter === "DEV") return p.discipline === "BUILT BY ME" || p.discipline === "BUILT & TESTED";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#5A5752] hover:text-[#FF5A36] uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b-2 border-[#181818] pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C43616] font-bold">
            [ ARCHIVE // 04 PROJECTS ]
          </span>
          <h1 className="font-display font-black text-editorial-title uppercase tracking-tight text-[#181818]">
            ALL CASE STUDIES & CODE
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#5A5752] max-w-xl">
            Comprehensive archive of manual testing suites, test matrices, defect reproduction tickets, and frontend engineering implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div role="group" aria-label="Filter case studies by discipline" className="flex items-center gap-2 p-1 bg-[#E8E5DD] border border-[#D5D0C8] font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter("ALL")}
            aria-pressed={activeFilter === "ALL"}
            className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
              activeFilter === "ALL"
                ? "bg-[#181818] text-[#F4F1EA]"
                : "text-[#181818] hover:text-[#C43616]"
            }`}
          >
            ALL ({initialProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("QA")}
            aria-pressed={activeFilter === "QA"}
            className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
              activeFilter === "QA"
                ? "bg-[#FF5A36] text-[#181818]"
                : "text-[#181818] hover:text-[#C43616]"
            }`}
          >
            TESTED ({initialProjects.filter((p) => p.discipline === "TESTED BY ME").length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("DEV")}
            aria-pressed={activeFilter === "DEV"}
            className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
              activeFilter === "DEV"
                ? "bg-[#181818] text-[#C6F36B]"
                : "text-[#181818] hover:text-[#C43616]"
            }`}
          >
            BUILT & TESTED ({initialProjects.filter((p) => p.discipline !== "TESTED BY ME").length})
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-white border-2 border-[#181818] shadow-[8px_8px_0px_0px_#181818] hover:shadow-[12px_12px_0px_0px_#FF5A36] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Top ribbon */}
              <div className="bg-[#181818] text-[#F4F1EA] px-6 py-3 flex items-center justify-between font-mono text-xs border-b border-[#181818]">
                <span className="text-[#FF5A36] font-bold">0{idx + 1}.</span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                    proj.discipline === "TESTED BY ME"
                      ? "bg-[#FF5A36] text-[#181818]"
                      : "bg-[#C6F36B] text-[#181818]"
                  }`}
                >
                  {proj.discipline}
                </span>
                <span className="text-white/50">{proj.year}</span>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <span className="font-mono text-xs text-[#5A5752] uppercase tracking-wider block">
                  {proj.category}
                </span>

                <h2 className="font-display font-black text-2xl text-[#181818] tracking-tight">
                  {proj.title}
                </h2>

                <p className="font-mono text-xs text-[#FF5A36] font-bold">
                  {proj.subtitle}
                </p>

                <p className="text-sm text-[#5A5752] leading-relaxed">
                  {proj.summary}
                </p>

                {/* Metrics 2-column */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#D5D0C8]">
                  {proj.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="bg-[#F4F1EA] p-2.5 border border-[#D5D0C8]">
                      <span className="font-mono text-[10px] uppercase text-[#5A5752] block">
                        {m.label}
                      </span>
                      <span className="font-display font-black text-lg text-[#181818]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer link */}
            <div className="p-6 bg-[#E8E5DD] border-t-2 border-[#181818] flex items-center justify-between font-mono text-xs">
              <div className="flex flex-wrap gap-1 max-w-[70%]">
                {proj.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="px-1.5 py-0.5 bg-white border border-[#D5D0C8] text-[10px]">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/work/${proj.slug}`}
                className="px-4 py-2 bg-[#181818] text-white hover:bg-[#FF5A36] font-bold uppercase transition-colors flex items-center gap-1.5"
              >
                <span>Read Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Bug, Terminal, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#181818]/75 backdrop-blur-sm cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Sheet */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 25 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#F4F1EA] text-[#181818] border-2 border-[#181818] shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Editorial Top Bar */}
          <div className="bg-[#181818] text-[#F4F1EA] px-6 py-4 flex items-center justify-between border-b border-[#181818] shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6F36B] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#C6F36B]">
                {project.discipline}
              </span>
              <span className="text-white/30">/</span>
              <span className="font-mono text-xs text-white/70">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study dialog"
              className="p-1.5 rounded-full bg-white/10 hover:bg-[#FF5A36] text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#C6F36B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
            {/* Title & Subtitle */}
            <div className="space-y-2 border-b border-[#D5D0C8] pb-6">
              <h2 id="modal-title" className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#181818]">
                {project.title}
              </h2>
              <p className="font-mono text-sm sm:text-base text-[#5A5752]">
                {project.subtitle}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#E8E5DD] p-4 border border-[#D5D0C8]">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center sm:text-left">
                  <div className="font-mono text-[11px] uppercase text-[#5A5752] tracking-wider">
                    {metric.label}
                  </div>
                  <div className="font-display text-2xl font-black text-[#181818] mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview & Challenge / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 bg-white p-5 border border-[#D5D0C8]">
                <h3 className="font-mono text-xs uppercase font-bold text-[#FF5A36] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> The Challenge
                </h3>
                <p className="text-sm text-[#181818] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 border border-[#D5D0C8]">
                <h3 className="font-mono text-xs uppercase font-bold text-[#181818] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6F36B]" /> The Solution & Strategy
                </h3>
                <p className="text-sm text-[#181818] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Responsibilities & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#5A5752] leading-relaxed">
                      <span className="font-mono text-[#FF5A36] font-bold">0{i + 1}.</span>
                      <span className="text-[#181818]">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider">
                  Verified Deliverables
                </h4>
                <div className="space-y-2">
                  {project.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#E8E5DD] px-3 py-2 text-xs font-mono text-[#181818] border border-[#D5D0C8]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF5A36] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Executed Test Cases */}
            {project.sampleTestCases && project.sampleTestCases.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF5A36]" /> Sample Executed Test Cases
                </h4>
                <div className="overflow-x-auto border border-[#181818]">
                  <table className="w-full text-left font-mono text-xs bg-white">
                    <thead className="bg-[#181818] text-[#F4F1EA] text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Test ID</th>
                        <th className="py-2.5 px-3">Scenario / Test Description</th>
                        <th className="py-2.5 px-3">Technique</th>
                        <th className="py-2.5 px-3 text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D5D0C8]">
                      {project.sampleTestCases.map((tc) => (
                        <tr key={tc.id} className="hover:bg-[#F4F1EA]">
                          <td className="py-2.5 px-3 font-bold text-[#FF5A36]">{tc.id}</td>
                          <td className="py-2.5 px-3 text-[#181818] font-sans">{tc.scenario}</td>
                          <td className="py-2.5 px-3 text-[#5A5752]">{tc.technique}</td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-[#C6F36B] text-[#181818]">
                              {tc.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sample Bug Report */}
            {project.sampleBugReport && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider flex items-center gap-2">
                  <Bug className="w-4 h-4 text-[#FF5A36]" /> Defect Ticket Reproduction
                </h4>
                <div className="bg-[#181818] text-[#F4F1EA] p-5 border border-[#181818] space-y-4 font-mono text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span className="font-bold text-[#C6F36B]">
                      {project.sampleBugReport.id}: {project.sampleBugReport.title}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-[#FF5A36] text-[#F4F1EA]">
                      Severity: {project.sampleBugReport.severity}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] text-[#9E9B95]">
                    <div>
                      <span className="text-white">Priority:</span> {project.sampleBugReport.priority}
                    </div>
                    <div>
                      <span className="text-white">Environment:</span> {project.sampleBugReport.environment}
                    </div>
                  </div>

                  <div className="bg-[#24252B] p-3 border border-white/10 space-y-1.5">
                    <span className="text-[#FF5A36] font-bold text-[11px] block">Steps to Reproduce:</span>
                    <ol className="list-decimal list-inside text-white/80 space-y-1">
                      {project.sampleBugReport.steps.map((st, idx) => (
                        <li key={idx}>{st}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[11px]">
                    <div className="bg-emerald-950/40 border border-emerald-500/40 p-2.5">
                      <span className="text-[#C6F36B] font-bold block">Expected:</span>
                      <span className="text-white/80">{project.sampleBugReport.expected}</span>
                    </div>
                    <div className="bg-rose-950/40 border border-rose-500/40 p-2.5">
                      <span className="text-[#FF5A36] font-bold block">Actual:</span>
                      <span className="text-white/80">{project.sampleBugReport.actual}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-[#E8E5DD] px-6 py-4 border-t border-[#D5D0C8] flex items-center justify-between shrink-0">
            <span className="font-mono text-xs text-[#5A5752]">
              DEPI Quality Assurance Methodology
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 font-mono text-xs font-bold uppercase bg-[#181818] text-[#F4F1EA] hover:bg-[#FF5A36] transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

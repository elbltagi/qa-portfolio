"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle2, 
  Bug, 
  FileText, 
  Layers, 
  Download, 
  ExternalLink,
  ShieldCheck,
  Terminal,
  Activity
} from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  testingActivities: string[];
  deliverables: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  sampleTestCases: {
    id: string;
    scenario: string;
    technique: string;
    expected: string;
    result: "PASS" | "FAIL";
  }[];
  sampleBugReport?: {
    id: string;
    title: string;
    severity: string;
    priority: string;
    environment: string;
    steps: string[];
    expected: string;
    actual: string;
  };
}

interface ModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0F14]/80 backdrop-blur-md"
        ></motion.div>

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#111820] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#0B0F14] px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#111820] border border-[#00D4FF]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00D4FF] uppercase">{project.category}</span>
                <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#94A3B8] hover:text-white bg-[#111820] hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
            
            {/* Overview & Key Metrics */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00D4FF]" /> Project Overview
              </h4>
              <p className="text-base text-white leading-relaxed">
                {project.overview}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-[#0B0F14] p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-xs font-mono text-[#94A3B8] block">{metric.label}</span>
                    <span className="text-base font-bold font-mono text-[#00D4FF]">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid: Testing Activities & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Testing Activities */}
              <div className="bg-[#0B0F14] p-5 rounded-xl border border-white/5 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00D4FF]" /> Testing Activities Performed
                </h4>
                <ul className="space-y-2">
                  {project.testingActivities.map((activity) => (
                    <li key={activity} className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Tools */}
              <div className="bg-[#0B0F14] p-5 rounded-xl border border-white/5 space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-[#7C3AED]" /> Deliverables Provided
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliv) => (
                      <span key={deliv} className="px-2.5 py-1 text-xs font-mono text-white bg-[#111820] border border-white/10 rounded-md">
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h5 className="text-xs font-mono text-[#94A3B8] mb-1.5">Tools Used:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span key={tool} className="px-2 py-0.5 text-[11px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 rounded border border-[#00D4FF]/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Sample Test Scenarios Table */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00D4FF]" /> Sample Executed Test Matrix
              </h4>
              
              <div className="bg-[#0B0F14] rounded-xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-[#141C26] text-[#94A3B8] uppercase text-[10px]">
                      <tr>
                        <th className="py-2.5 px-4">Test ID</th>
                        <th className="py-2.5 px-4">Scenario / Test Description</th>
                        <th className="py-2.5 px-4">Technique</th>
                        <th className="py-2.5 px-4 text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[#94A3B8]">
                      {project.sampleTestCases.map((tc) => (
                        <tr key={tc.id} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 px-4 text-[#00D4FF] font-bold">{tc.id}</td>
                          <td className="py-2.5 px-4 text-white font-sans">{tc.scenario}</td>
                          <td className="py-2.5 px-4 text-[#7C3AED]">{tc.technique}</td>
                          <td className="py-2.5 px-4 text-right">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              tc.result === "PASS"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}>
                              {tc.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sample Bug Report Widget inside Case Study */}
            {project.sampleBugReport && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Bug className="w-4 h-4 text-red-400" /> Sample Actionable Defect Report
                </h4>

                <div className="bg-[#0B0F14] p-4 rounded-xl border border-red-500/30 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-bold text-white">{project.sampleBugReport.id}: {project.sampleBugReport.title}</span>
                    <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-2 py-0.5 rounded font-bold">
                      {project.sampleBugReport.severity}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#94A3B8]">
                    <div>Priority: <span className="text-white">{project.sampleBugReport.priority}</span></div>
                    <div>Environment: <span className="text-white">{project.sampleBugReport.environment}</span></div>
                  </div>

                  <div className="bg-[#111820] p-3 rounded border border-white/5 space-y-1">
                    <span className="text-[#00D4FF] font-bold block text-[11px]">Reproduction Steps:</span>
                    <ol className="list-decimal list-inside text-[#94A3B8] text-[11px] space-y-0.5">
                      {project.sampleBugReport.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-emerald-500/5 border border-emerald-500/20 p-2 rounded">
                      <span className="text-emerald-400 font-bold block">Expected Result:</span>
                      <span className="text-[#94A3B8]">{project.sampleBugReport.expected}</span>
                    </div>
                    <div className="bg-red-500/5 border border-red-500/20 p-2 rounded">
                      <span className="text-red-400 font-bold block">Actual Result:</span>
                      <span className="text-[#94A3B8]">{project.sampleBugReport.actual}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="bg-[#0B0F14] px-6 py-4 border-t border-white/10 flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-[#94A3B8]">QA Documentation Standard</span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-[#0B0F14] bg-[#00D4FF] hover:bg-[#38E0FF] rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

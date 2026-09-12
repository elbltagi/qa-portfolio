"use client";

import { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Bug, 
  FileText, 
  Cpu, 
  CheckSquare, 
  Activity,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestItem {
  id: string;
  name: string;
  technique: string;
  status: "PASSED" | "FAILED" | "RUNNING" | "PENDING";
  duration: string;
  error?: string;
}

const initialTests: TestItem[] = [
  { id: "TC-01", name: "User Registration - Boundary Password Length (8-64 chars)", technique: "Boundary Value Analysis", status: "PASSED", duration: "124ms" },
  { id: "TC-02", name: "Checkout Cart - Equivalence Partition Invalid Promo Code", technique: "Equivalence Partitioning", status: "PASSED", duration: "88ms" },
  { id: "TC-03", name: "REST API POST /api/v1/orders - Null Payload Handling", technique: "Negative Testing", status: "FAILED", duration: "210ms", error: "500 Server Error instead of 400 Bad Request" },
  { id: "TC-04", name: "EduScan QR Scanner - Offline Offline Cache Sync", technique: "Exploratory & Offline", status: "PASSED", duration: "340ms" },
  { id: "TC-05", name: "Payment Gateway - Duplicate Form Submission Locking", technique: "Concurrency Testing", status: "PASSED", duration: "160ms" },
];

export default function QADashboardWidget() {
  const [activeTab, setActiveTab] = useState<"runner" | "ticket" | "matrix">("runner");
  const [tests, setTests] = useState<TestItem[]>(initialTests);
  const [isRunning, setIsRunning] = useState(false);
  const [filterSeverity, setFilterSeverity] = useState<"ALL" | "CRITICAL" | "HIGH">("ALL");

  // Live test suite simulation
  const handleRunTests = () => {
    setIsRunning(true);
    // Reset statuses to pending then resolve one by one
    setTests((prev) =>
      prev.map((t) => ({ ...t, status: "RUNNING" as const }))
    );

    setTimeout(() => {
      setTests((prev) =>
        prev.map((t, idx) => {
          if (idx === 2) {
            return { ...t, status: "FAILED" as const };
          }
          return { ...t, status: "PASSED" as const };
        })
      );
      setIsRunning(false);
    }, 1800);
  };

  return (
    <div className="w-full bg-[#111820] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl relative">
      {/* Top Cyber Window Bar */}
      <div className="bg-[#0B0F14] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#00D4FF]" /> qa-suite-v2.4.console
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1 bg-[#111820] p-1 rounded-lg border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab("runner")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "runner"
                ? "bg-[#00D4FF] text-[#0B0F14] font-semibold"
                : "text-[#94A3B8] hover:text-white"
            }`}
          >
            Live Suite
          </button>
          <button
            onClick={() => setActiveTab("ticket")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "ticket"
                ? "bg-[#00D4FF] text-[#0B0F14] font-semibold"
                : "text-[#94A3B8] hover:text-white"
            }`}
          >
            Bug Ticket
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === "matrix"
                ? "bg-[#00D4FF] text-[#0B0F14] font-semibold"
                : "text-[#94A3B8] hover:text-white"
            }`}
          >
            Coverage
          </button>
        </div>
      </div>

      {/* Metrics Header Summary */}
      <div className="grid grid-cols-3 divide-x divide-white/5 bg-[#141C26] border-b border-white/5 py-2.5 px-4 text-center">
        <div>
          <span className="text-[10px] uppercase font-mono text-[#94A3B8] block">Pass Rate</span>
          <span className="text-sm font-bold font-mono text-emerald-400">98.4%</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-mono text-[#94A3B8] block">Defects Logged</span>
          <span className="text-sm font-bold font-mono text-[#00D4FF]">14 Identified</span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-mono text-[#94A3B8] block">Testing Method</span>
          <span className="text-sm font-bold font-mono text-[#7C3AED]">EP & BVA</span>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5 min-h-[300px]">
        {/* TAB 1: LIVE SUITE RUNNER */}
        {activeTab === "runner" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#00D4FF] animate-pulse" />
                <span className="text-xs font-mono text-white font-medium">
                  Automated & Manual Verification Log
                </span>
              </div>
              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#0B0F14] bg-[#00D4FF] hover:bg-[#38E0FF] rounded-md transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Suite Test</span>
                  </>
                )}
              </button>
            </div>

            {/* Test Case Items List */}
            <div className="space-y-2.5">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="bg-[#0B0F14]/70 p-3 rounded-lg border border-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-2.5">
                    {test.status === "PASSED" && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {test.status === "FAILED" && (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    )}
                    {test.status === "RUNNING" && (
                      <RotateCcw className="w-4 h-4 text-[#00D4FF] animate-spin shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#00D4FF]">{test.id}</span>
                        <span className="text-xs text-white font-medium line-clamp-1">{test.name}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-1.5 py-0.5 rounded border border-[#7C3AED]/20">
                          {test.technique}
                        </span>
                        {test.error && (
                          <span className="text-[10px] font-mono text-red-400 line-clamp-1">
                            {test.error}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 text-right">
                    <span className="text-[11px] font-mono text-[#94A3B8]">{test.duration}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                        test.status === "PASSED"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : test.status === "FAILED"
                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                          : "bg-cyan-500/10 text-[#00D4FF] border border-cyan-500/20 animate-pulse"
                      }`}
                    >
                      {test.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: BUG TICKET VIEW */}
        {activeTab === "ticket" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="bg-[#0B0F14] p-3.5 rounded-lg border border-red-500/30 space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-red-400" />
                  <span className="font-bold text-white">BUG-204: API Status Code Mismatch</span>
                </div>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                  Severity: High
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#94A3B8]">
                <div><span className="text-white">Module:</span> REST API / Checkout</div>
                <div><span className="text-white">Environment:</span> Staging v1.4.2</div>
                <div><span className="text-white">Priority:</span> P1 - High</div>
                <div><span className="text-white">Reporter:</span> Youssef Salah</div>
              </div>

              <div className="bg-[#141C26] p-2.5 rounded border border-white/5 space-y-1">
                <p className="text-[#00D4FF] font-semibold text-[11px]">Steps to Reproduce:</p>
                <ol className="list-decimal list-inside text-[#94A3B8] text-[11px] space-y-0.5">
                  <li>Send POST request to <code>/api/v1/orders</code> with null payload.</li>
                  <li>Observe response code and JSON body returned.</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-2 rounded">
                  <span className="text-emerald-400 font-semibold block">Expected Result:</span>
                  <span className="text-[#94A3B8]">400 Bad Request with validation message</span>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 p-2 rounded">
                  <span className="text-red-400 font-semibold block">Actual Result:</span>
                  <span className="text-[#94A3B8]">500 Internal Server Error & crash stack trace</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COVERAGE MATRIX */}
        {activeTab === "matrix" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="bg-[#0B0F14] p-4 rounded-lg border border-white/5 space-y-3">
              <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#7C3AED]" /> Equivalence Partitioning & BVA Map
              </h4>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] text-[#94A3B8] mb-1">
                    <span>Boundary Value Analysis (Password & Quantities)</span>
                    <span className="text-emerald-400">100% Covered</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A2330] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00D4FF] w-full rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#94A3B8] mb-1">
                    <span>Equivalence Partitioning (Valid / Invalid Input Sets)</span>
                    <span className="text-emerald-400">100% Covered</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A2330] rounded-full overflow-hidden">
                    <div className="h-full bg-[#7C3AED] w-[92%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#94A3B8] mb-1">
                    <span>Exploratory & Edge Cases</span>
                    <span className="text-[#00D4FF]">94% Covered</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A2330] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[94%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-2 bg-[#141C26] rounded border border-white/5 text-[11px] text-[#94A3B8] flex items-center justify-between">
                <span>Structured Test Cases Built:</span>
                <span className="text-white font-bold font-mono">150+ Cases</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cyber Footer Bar */}
      <div className="bg-[#0B0F14] px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ready for Testing Projects
        </span>
        <span className="text-[#00D4FF]">DEPI QA Trainee Standard</span>
      </div>
    </div>
  );
}

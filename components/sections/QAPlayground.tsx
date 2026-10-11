"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bug, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Terminal, 
  Search, 
  Eye, 
  EyeOff, 
  FileText,
  ShieldCheck,
  Check
} from "lucide-react";

export default function QAPlayground() {
  // Sandbox State
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [revealBugs, setRevealBugs] = useState(false);
  const [activeTab, setActiveTab] = useState<"sandbox" | "ticket" | "matrix">("sandbox");

  const itemPrice = 100;
  
  // Bug simulation logic:
  // When quantity changes, if promo is applied, the discount formula intentionally only discounts 1 item ($20) instead of quantity * $20
  const discountAmount = appliedPromo ? (revealBugs ? quantity * 20 : 20) : 0;
  const subtotal = quantity * itemPrice;
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE20") {
      setAppliedPromo(true);
    }
  };

  const handleFastOrderClick = () => {
    setDoubleClickCount((prev) => prev + 1);
    setOrderSubmitted(true);
  };

  const handleResetSandbox = () => {
    setQuantity(1);
    setPromoCode("");
    setAppliedPromo(false);
    setDoubleClickCount(0);
    setOrderSubmitted(false);
  };

  return (
    <section
      id="playground"
      className="py-24 sm:py-32 bg-[#F4F1EA] text-[#181818] border-b-2 border-[#181818] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#181818] pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43616]">
              <span>[ SECTION 07 ]</span>
              <span>—</span>
              <span>SIGNATURE QA FEATURE</span>
            </div>
            <h2 className="font-display font-black text-section-title uppercase tracking-tight text-[#181818]">
              THE QA INTERACTIVE PLAYGROUND
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#5A5752] max-w-xl">
              An isolated testing sandbox containing intentional real-world defects. Test boundary quantities, enter promo codes, trigger edge cases, and inspect professional bug reports.
            </p>
          </div>

          {/* Reveal Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setRevealBugs(!revealBugs)}
              aria-pressed={revealBugs}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase border-2 flex items-center gap-2 transition-all ${
                revealBugs
                  ? "bg-[#FF5A36] text-[#181818] border-[#181818] shadow-[4px_4px_0px_0px_#181818]"
                  : "bg-white text-[#181818] border-[#181818] hover:bg-[#E8E5DD]"
              }`}
            >
              {revealBugs ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{revealBugs ? "Hide Defect Overlays" : "Reveal Identified Bugs"}</span>
            </button>

            <button
              onClick={handleResetSandbox}
              className="p-2 bg-white border-2 border-[#181818] hover:bg-[#E8E5DD] text-[#181818] transition-colors"
              title="Reset Sandbox"
              aria-label="Reset test sandbox"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sandbox Simulator Frame */}
        <div className="bg-white border-2 border-[#181818] shadow-[12px_12px_0px_0px_#181818] overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="bg-[#181818] text-[#F4F1EA] px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#181818]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5A36]"></span>
              <span className="w-3 h-3 rounded-full bg-[#C6F36B]"></span>
              <span className="w-3 h-3 rounded-full bg-[#D5D0C8]"></span>
              <span className="font-mono text-xs font-bold text-[#C6F36B] ml-2">
                TEST_SUITE://cart-checkout-validation.sandbox
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div role="tablist" aria-label="Sandbox view modes" className="flex items-center bg-[#24252B] p-1 border border-white/10 font-mono text-xs">
              <button
                role="tab"
                id="tab-sandbox"
                aria-controls="panel-sandbox"
                aria-selected={activeTab === "sandbox"}
                onClick={() => setActiveTab("sandbox")}
                className={`px-3 py-1 font-bold transition-colors ${
                  activeTab === "sandbox"
                    ? "bg-[#FF5A36] text-[#181818]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Interactive UI
              </button>
              <button
                role="tab"
                id="tab-ticket"
                aria-controls="panel-ticket"
                aria-selected={activeTab === "ticket"}
                onClick={() => setActiveTab("ticket")}
                className={`px-3 py-1 font-bold transition-colors ${
                  activeTab === "ticket"
                    ? "bg-[#FF5A36] text-[#181818]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Defect Report
              </button>
              <button
                role="tab"
                id="tab-matrix"
                aria-controls="panel-matrix"
                aria-selected={activeTab === "matrix"}
                onClick={() => setActiveTab("matrix")}
                className={`px-3 py-1 font-bold transition-colors ${
                  activeTab === "matrix"
                    ? "bg-[#FF5A36] text-[#181818]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                EP & BVA Matrix
              </button>
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-6 sm:p-10 font-sans">
            {activeTab === "sandbox" && (
              <div
                role="tabpanel"
                id="panel-sandbox"
                aria-labelledby="tab-sandbox"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                
                {/* Left Form: Simulated Cart UI */}
                <div className="lg:col-span-7 space-y-6 bg-[#F4F1EA] p-6 border-2 border-[#181818]">
                  <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-3">
                    <h3 className="font-display font-black text-xl text-[#181818]">
                      Sample Checkout Module
                    </h3>
                    <span className="font-mono text-xs text-[#5A5752] bg-white px-2 py-0.5 border border-[#D5D0C8]">
                      Scope: Manual Functional
                    </span>
                  </div>

                  {/* Item Description */}
                  <div className="flex items-center justify-between p-3.5 bg-white border border-[#D5D0C8]">
                    <div>
                      <div className="font-bold text-sm text-[#181818]">
                        Enterprise Security Suite v2
                      </div>
                      <div className="font-mono text-xs text-[#5A5752]">$100.00 / unit</div>
                    </div>

                    {/* Stepper Input with Intentional Boundary Bug */}
                    <div className="relative">
                      <div className="flex items-center border border-[#181818]">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="px-3 py-1 bg-[#E8E5DD] hover:bg-[#181818] hover:text-white font-mono text-sm font-bold transition-colors"
                        >
                          -
                        </button>
                        <input
                          id="qa-cart-quantity"
                          name="cartQuantity"
                          aria-label="Cart item quantity"
                          type="number"
                          min="1"
                          max="99"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-14 text-center font-mono text-sm font-bold py-1 bg-white focus:outline-none"
                        />
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="px-3 py-1 bg-[#E8E5DD] hover:bg-[#181818] hover:text-white font-mono text-sm font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {revealBugs && quantity > 99 && (
                        <div className="absolute top-full left-0 right-0 mt-1 p-1 bg-red-50 border border-red-500 font-mono text-[10px] text-red-700 font-bold z-10">
                          BUG: Boundary cap failed (Max 99 allowed)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Promo Input */}
                  <div className="space-y-1.5 relative">
                    <label htmlFor="qa-promo-code" className="font-mono text-xs font-bold text-[#181818] uppercase">
                      Promo Code (Try: SAVE20)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="qa-promo-code"
                        name="promoCode"
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. SAVE20"
                        className="flex-1 px-3 py-2 bg-white border border-[#181818] font-mono text-xs uppercase focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-[#181818] text-[#F4F1EA] hover:bg-[#FF5A36] hover:text-[#181818] font-mono text-xs font-bold uppercase transition-colors"
                      >
                        Apply Code
                      </button>
                    </div>

                    {appliedPromo && (
                      <div className="font-mono text-xs text-emerald-800 flex items-center gap-1.5 pt-1 font-semibold">
                        <Check className="w-3.5 h-3.5" />
                        <span>Code 'SAVE20' applied (20% Off)</span>
                      </div>
                    )}
                  </div>

                  {/* Total Calculations */}
                  <div className="p-4 bg-white border border-[#181818] space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-[#5A5752]">
                      <span>Subtotal ({quantity} items):</span>
                      <span className="font-bold text-[#181818]">${subtotal}.00</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-[#C43616]">
                        <span>Promo Discount:</span>
                        <span className="font-bold">-${discountAmount}.00</span>
                      </div>
                    )}

                    <div className="flex justify-between text-base font-bold text-[#181818] pt-2 border-t border-[#D5D0C8]">
                      <span>Calculated Total:</span>
                      <span>${total}.00</span>
                    </div>

                    {revealBugs && appliedPromo && quantity > 1 && !revealBugs && (
                      <div className="p-2 bg-red-50 border border-red-400 font-mono text-[11px] text-red-700 mt-2">
                        DEFECT: Discount remains flat $20.00 instead of 20% of ${subtotal} (${subtotal * 0.20}).
                      </div>
                    )}
                  </div>

                  {/* Order Submission Button */}
                  <div className="space-y-2 relative">
                    <button
                      type="button"
                      onClick={handleFastOrderClick}
                      className="w-full py-3.5 bg-[#FF5A36] text-[#181818] hover:bg-[#181818] hover:text-[#F4F1EA] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Click to Place Order
                    </button>

                    {orderSubmitted && (
                      <div className="p-3 bg-white border-2 border-[#181818] font-mono text-xs space-y-1">
                        <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Order Submission Triggered ({doubleClickCount} click registered)</span>
                        </div>
                        {doubleClickCount > 1 && (
                          <div className="text-red-600 font-bold text-[11px] pt-1">
                            CONCURRENCY DEFECT: {doubleClickCount} duplicate orders generated due to missing button lock!
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Panel: Live QA Diagnostic Inspector */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 bg-[#181818] text-[#F4F1EA] border-2 border-[#181818] space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-[#C6F36B] font-bold flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" /> LIVE QA AUDIT LOG
                      </span>
                      <span className="text-white/50 text-[10px]">Real-Time Inspection</span>
                    </div>

                    <div className="space-y-3">
                      {/* Check 1 */}
                      <div className="p-3 bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">01. Quantity Boundary (BVA)</span>
                          <span className={`px-1.5 py-0.5 text-[10px] font-bold ${quantity > 99 ? "bg-red-500 text-white" : "bg-[#C6F36B] text-[#181818]"}`}>
                            {quantity > 99 ? "FAIL" : "PASS"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9E9B95]">
                          Expected: Max limit 99 with boundary error. Current quantity: {quantity}.
                        </p>
                      </div>

                      {/* Check 2 */}
                      <div className="p-3 bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">02. Recalculation on Stepper</span>
                          <span className={`px-1.5 py-0.5 text-[10px] font-bold ${appliedPromo && quantity > 1 ? "bg-red-500 text-white" : "bg-[#C6F36B] text-[#181818]"}`}>
                            {appliedPromo && quantity > 1 ? "FAIL" : "STANDBY"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9E9B95]">
                          Expected discount for {quantity} items: ${subtotal * 0.20}. Applied: ${discountAmount}.
                        </p>
                      </div>

                      {/* Check 3 */}
                      <div className="p-3 bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">03. Idempotent Order Submit</span>
                          <span className={`px-1.5 py-0.5 text-[10px] font-bold ${doubleClickCount > 1 ? "bg-red-500 text-white" : "bg-[#C6F36B] text-[#181818]"}`}>
                            {doubleClickCount > 1 ? "FAIL" : "PASS"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9E9B95]">
                          Submissions logged: {doubleClickCount}. Fast repeat clicks must be debounced.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#9E9B95]">
                      <span>Toggle 'Reveal' above for inline flags</span>
                      <button
                        onClick={() => setActiveTab("ticket")}
                        className="text-[#FF5A36] font-bold underline"
                      >
                        View Ticket →
                      </button>
                    </div>
                  </div>

                  {/* Informational Box */}
                  <div className="p-4 bg-white border border-[#D5D0C8] font-mono text-xs text-[#5A5752] space-y-2">
                    <span className="font-bold text-[#181818] block uppercase">
                      Why Build a QA Playground?
                    </span>
                    <p className="leading-relaxed">
                      Anyone can claim they test software. This sandbox proves my methodology in action: spotting edge cases, calculating boundary values, and documenting reproducible defects.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Defect Ticket View */}
            {activeTab === "ticket" && (
              <div
                role="tabpanel"
                id="panel-ticket"
                aria-labelledby="tab-ticket"
                className="space-y-4 max-w-4xl mx-auto font-mono text-xs"
              >
                <div className="bg-[#181818] text-[#F4F1EA] p-6 border-2 border-[#181818] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="font-bold text-base text-[#C6F36B] block">
                        JIRA-842: Cart discount does not recalculate when quantity changes
                      </span>
                      <span className="text-[#9E9B95] text-[11px]">Reported by: Youssef Salah Elbltagi</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold uppercase bg-[#FF5A36] text-[#181818]">
                      Severity: High / Priority: P1
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#24252B] p-3 text-[11px]">
                    <div><span className="text-white/50 block">Module:</span> Checkout Cart</div>
                    <div><span className="text-white/50 block">Environment:</span> Staging v2.4</div>
                    <div><span className="text-white/50 block">Testing Type:</span> BVA & Functional</div>
                    <div><span className="text-white/50 block">Fix Status:</span> Open for Dev</div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-bold text-[#FF5A36] uppercase text-[11px] block">
                      Reproduction Steps:
                    </span>
                    <ol className="list-decimal list-inside text-white/80 space-y-1 bg-[#24252B] p-3 border border-white/5">
                      <li>Add unit item ($100) to checkout cart.</li>
                      <li>Apply promo voucher code 'SAVE20'. Total calculates $80.00.</li>
                      <li>Use stepper to increment quantity from 1 to 2 items.</li>
                      <li>Inspect updated subtotal ($200.00) vs final billed total.</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-emerald-950/40 border border-emerald-500/40 p-3">
                      <span className="text-[#C6F36B] font-bold block mb-1">Expected Behavior:</span>
                      <span className="text-white/80">
                        20% discount applies across new subtotal: 20% of $200 = $40 discount ($160 total).
                      </span>
                    </div>

                    <div className="bg-rose-950/40 border border-rose-500/40 p-3">
                      <span className="text-[#FF5A36] font-bold block mb-1">Actual Behavior:</span>
                      <span className="text-white/80">
                        Discount is cached on initial unit price ($20 flat discount), billing user $180 instead of $160.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Coverage Matrix */}
            {activeTab === "matrix" && (
              <div
                role="tabpanel"
                id="panel-matrix"
                aria-labelledby="tab-matrix"
                className="space-y-4 max-w-4xl mx-auto font-mono text-xs"
              >
                <div className="bg-white border-2 border-[#181818] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-3">
                    <h4 className="font-display font-bold text-lg text-[#181818]">
                      Equivalence Partitioning & Boundary Value Analysis Matrix
                    </h4>
                    <span className="text-[#C43616] font-bold">100% Coverage</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#181818] text-[#F4F1EA] text-[10px] uppercase">
                        <tr>
                          <th className="py-2.5 px-3">Test Case ID</th>
                          <th className="py-2.5 px-3">Input Partition</th>
                          <th className="py-2.5 px-3">Technique</th>
                          <th className="py-2.5 px-3">Expected Outcome</th>
                          <th className="py-2.5 px-3 text-right">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#D5D0C8]">
                        <tr className="hover:bg-[#F4F1EA]">
                          <td className="py-2.5 px-3 font-bold text-[#C43616]">TC-BVA-01</td>
                          <td className="py-2.5 px-3">Quantity = 1 (Min boundary)</td>
                          <td className="py-2.5 px-3">Boundary Value</td>
                          <td className="py-2.5 px-3">Valid order, subtotal $100</td>
                          <td className="py-2.5 px-3 text-right font-bold text-emerald-700">PASS</td>
                        </tr>
                        <tr className="hover:bg-[#F4F1EA]">
                          <td className="py-2.5 px-3 font-bold text-[#C43616]">TC-BVA-02</td>
                          <td className="py-2.5 px-3">Quantity = 99 (Max boundary)</td>
                          <td className="py-2.5 px-3">Boundary Value</td>
                          <td className="py-2.5 px-3">Valid order, subtotal $9,900</td>
                          <td className="py-2.5 px-3 text-right font-bold text-emerald-700">PASS</td>
                        </tr>
                        <tr className="hover:bg-[#F4F1EA]">
                          <td className="py-2.5 px-3 font-bold text-[#C43616]">TC-BVA-03</td>
                          <td className="py-2.5 px-3">Quantity = 100 (Out of bounds)</td>
                          <td className="py-2.5 px-3">Boundary Value</td>
                          <td className="py-2.5 px-3">Blocked with user inline warning</td>
                          <td className="py-2.5 px-3 text-right font-bold text-red-700">FAIL</td>
                        </tr>
                        <tr className="hover:bg-[#F4F1EA]">
                          <td className="py-2.5 px-3 font-bold text-[#C43616]">TC-EP-01</td>
                          <td className="py-2.5 px-3">Promo = 'SAVE20' (Valid class)</td>
                          <td className="py-2.5 px-3">Equivalence Class</td>
                          <td className="py-2.5 px-3">Apply 20% discount on entire subtotal</td>
                          <td className="py-2.5 px-3 text-right font-bold text-red-700">FAIL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sandbox Footer Bar */}
          <div className="bg-[#E8E5DD] px-6 py-3 border-t-2 border-[#181818] flex items-center justify-between font-mono text-xs text-[#5A5752]">
            <span>DEPI Practical Testing Simulation Engine</span>
            <span className="text-[#181818] font-bold">100% Client-Side Interactive</span>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Briefcase,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleType, setRoleType] = useState<"freelance" | "recruiter">("freelance");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Frontend & QA Project",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "Frontend & QA Project",
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#FF5A36] text-[#F4F1EA] border-b-2 border-[#181818] relative overflow-hidden"
    >
      {/* Background Architectural Accent Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-display font-black text-black/[0.04] select-none pointer-events-none leading-none">
        TALK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#181818] pb-10 mb-16 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#181818] font-bold">
            <span>[ SECTION 08 ]</span>
            <span>—</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-editorial-title uppercase tracking-tighter text-[#181818] leading-[0.94]">
            GOT A PROJECT? <br />
            LET'S MAKE IT GREAT.
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#181818] max-w-2xl font-medium">
            Whether you're looking for a dedicated Frontend Developer, an eagle-eyed QA Engineer for an upcoming release, or a full-time team member, my inbox is open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Channel Badges */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Email Direct Copy Box */}
            <div className="bg-[#181818] text-[#F4F1EA] p-6 sm:p-8 border-2 border-[#181818] shadow-[8px_8px_0px_0px_#181818] space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C6F36B] block font-bold">
                Direct Email Inquiries:
              </span>

              <div className="flex items-center justify-between gap-3 bg-[#24252B] p-3 border border-white/10">
                <span className="font-mono text-xs sm:text-sm text-white select-all truncate">
                  {personalInfo.email}
                </span>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-[#C6F36B] text-[#181818] hover:bg-white font-mono text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#9E9B95] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C6F36B]" />
                <span>Response expected: {personalInfo.responseTime}</span>
              </div>
            </div>

            {/* Profile Channels */}
            <div className="space-y-3 font-mono text-xs">
              <span className="font-bold text-[#181818] uppercase tracking-wider block">
                Professional Networks:
              </span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white text-[#181818] border-2 border-[#181818] hover:bg-[#181818] hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-[#0077B5] group-hover:text-white" />
                  <span className="font-bold">Connect on LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white text-[#181818] border-2 border-[#181818] hover:bg-[#181818] hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-[#181818] group-hover:text-white" />
                  <span className="font-bold">Explore Code on GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Status Card */}
            <div className="p-4 bg-white/20 border-2 border-[#181818] font-mono text-xs text-[#181818] space-y-1">
              <div className="font-bold uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6F36B] border border-[#181818]"></span>
                Verified Availability
              </div>
              <p className="text-[11px] leading-relaxed">
                Available for freelance manual testing, frontend development contracts, and junior/associate engineering or QA roles.
              </p>
            </div>

          </div>

          {/* Right Column: Branching Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#181818] p-6 sm:p-10 border-2 border-[#181818] shadow-[12px_12px_0px_0px_#181818]">
              
              {/* Inquiry Branching Selector */}
              <div role="group" aria-label="Select your inquiry type" className="flex items-center gap-2 border-b-2 border-[#181818] pb-6 mb-6 font-mono text-xs">
                <span className="text-[#5A5752] font-bold uppercase mr-2 hidden sm:inline">
                  I am a:
                </span>
                <button
                  type="button"
                  onClick={() => setRoleType("freelance")}
                  aria-pressed={roleType === "freelance"}
                  className={`px-4 py-2 font-bold uppercase transition-all border-2 border-[#181818] ${
                    roleType === "freelance"
                      ? "bg-[#181818] text-[#F4F1EA]"
                      : "bg-[#F4F1EA] text-[#181818] hover:bg-[#E8E5DD]"
                  }`}
                >
                  Client / Agency
                </button>
                <button
                  type="button"
                  onClick={() => setRoleType("recruiter")}
                  aria-pressed={roleType === "recruiter"}
                  className={`px-4 py-2 font-bold uppercase transition-all border-2 border-[#181818] ${
                    roleType === "recruiter"
                      ? "bg-[#181818] text-[#F4F1EA]"
                      : "bg-[#F4F1EA] text-[#181818] hover:bg-[#E8E5DD]"
                  }`}
                >
                  Recruiter / Hiring Team
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-[#C6F36B] border-2 border-[#181818] flex items-center justify-center mx-auto text-[#181818]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#181818]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-[#5A5752] max-w-sm mx-auto leading-relaxed">
                    Thank you. Youssef will review your message and reply within 4 to 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-bold text-[#181818] uppercase block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-3 bg-[#F4F1EA] border-2 border-[#181818] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-bold text-[#181818] uppercase block">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-3 bg-[#F4F1EA] border-2 border-[#181818] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-bold text-[#181818] uppercase block">
                      Scope / Focus
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      aria-label="Scope or focus of your project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#F4F1EA] border-2 border-[#181818] focus:bg-white focus:outline-none transition-colors font-mono"
                    >
                      <option value="Frontend Development">Frontend Development (React / Next.js)</option>
                      <option value="Manual QA & Testing">Manual QA & Functional Testing Audit</option>
                      <option value="Combined Dev & QA">Full Build & Test (Frontend + QA)</option>
                      <option value="Hiring / Full-Time Role">Full-Time / Part-Time Employment Offer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-bold text-[#181818] uppercase block">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        roleType === "recruiter"
                          ? "Share job specifications, team details, and interview availability..."
                          : "Briefly outline your website, testing needs, deliverables, or target timeline..."
                      }
                      className="w-full px-3.5 py-3 bg-[#F4F1EA] border-2 border-[#181818] focus:bg-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#181818] text-[#F4F1EA] hover:bg-[#FF5A36] hover:text-[#181818] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message to Youssef</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

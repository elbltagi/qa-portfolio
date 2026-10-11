"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  MessageSquare,
  ShieldAlert,
  Clock,
  Check
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Manual Web Testing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "Manual Web Testing",
        message: "",
      });
    }, 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("youssefsalah469@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0F14] relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient blur-3xl pointer-events-none -z-10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Improve <span className="text-gradient-cyan">Your Software Quality</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Have a website or application that needs testing? Let's make sure your users have a reliable experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#111820] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#00D4FF]" />
                Direct QA Contact
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Ready to review your test scope or discuss custom freelance testing packages? Reach out directly or send a brief message.
              </p>

              {/* Direct Email Copy Box */}
              <div className="bg-[#0B0F14] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#94A3B8] block">Primary Email:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-white select-all truncate">
                    youssefsalah469@gmail.com
                  </span>
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 text-xs font-mono text-[#00D4FF] bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 rounded-md border border-[#00D4FF]/30 transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Social Cards */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#94A3B8] block">Professional Profiles:</span>
                
                <a
                  href="https://www.linkedin.com/in/youssef-elbltagi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#0B0F14] hover:bg-[#16202C] rounded-xl border border-white/5 hover:border-[#00D4FF]/40 transition-all text-xs font-semibold text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#00D4FF] transition-colors font-mono">
                    Connect →
                  </span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#0B0F14] hover:bg-[#16202C] rounded-xl border border-white/5 hover:border-[#00D4FF]/40 transition-all text-xs font-semibold text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#00D4FF] transition-colors font-mono">
                    Explore →
                  </span>
                </a>
              </div>

              {/* Availability Indicator */}
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-mono text-emerald-400 flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Response Time: Usually within 4-12 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#111820] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Thank you for reaching out. Youssef will review your project requirements and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#94A3B8]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-[#94A3B8]/50 focus:border-[#00D4FF] focus:outline-none transition-colors text-sm font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#94A3B8]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-[#94A3B8]/50 focus:border-[#00D4FF] focus:outline-none transition-colors text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">Service Needed</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white focus:border-[#00D4FF] focus:outline-none transition-colors text-sm font-sans"
                    >
                      <option value="Manual Web Testing">Manual Web Application Testing</option>
                      <option value="Test Case Design">Test Case Design (EP & BVA)</option>
                      <option value="REST API Testing">REST API Testing (Postman)</option>
                      <option value="Mobile App QA">Mobile Application QA</option>
                      <option value="Regression & Bug Audit">Full QA Bug Audit & Regression</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">Project Details / Scope *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your website or app, timeline, and what testing you need..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F14] border border-white/10 text-white placeholder-[#94A3B8]/50 focus:border-[#00D4FF] focus:outline-none transition-colors text-sm font-sans resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-[#0B0F14] bg-[#00D4FF] hover:bg-[#38E0FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GraduationCap, ShieldCheck, Code2, CheckCircle2, Terminal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { personalInfo } from "@/data/portfolioData";
import { constructMetadata, getProfilePageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About & Engineering Background",
  description:
    "Learn about Youssef Salah Elbltagi's dual background in modern React/Next.js frontend engineering and disciplined Software QA testing at DEPI.",
  path: "/about",
  keywords: [
    "About Youssef Salah Elbltagi",
    "DEPI Software Testing Trainee",
    "Frontend Developer Background",
    "Software QA Career",
    "React Engineer",
  ],
  ogType: "profile",
});

export default function AboutPage() {
  const profileJsonLd = getProfilePageSchema();
  const milestones = [
    {
      period: "FOUNDATIONAL PHASE",
      title: "Computer Science & Object-Oriented Architecture",
      skills: ["Java", "C++", "Data Structures", "Algorithm Logic"],
      description:
        "Developed structured problem-solving discipline and low-level understanding of memory, OOP patterns, and computational limits using Java and C++.",
    },
    {
      period: "FRONTEND PHASE",
      title: "Modern React & Next.js Interface Engineering",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Express.js"],
      description:
        "Hands-on construction of responsive, accessible web applications. Mastered component lifecycles, state architecture, and REST API integration.",
    },
    {
      period: "QUALITY ASSURANCE PHASE",
      title: "Software Testing Trainee @ DEPI (Digital Egypt Pioneers Initiative)",
      skills: ["Manual Testing", "Equivalence Partitioning", "Boundary Value Analysis", "Postman", "Defect Logging"],
      description:
        "Undergoing rigorous quality assurance training specializing in structured manual testing, test case design, exploratory testing sessions, and clear defect reproduction.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181818]">
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd),
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Breadcrumb */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#5A5752] hover:text-[#FF5A36] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Header */}
          <div className="border-b-2 border-[#181818] pb-10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A36] font-bold">
              [ PROFILE // BIOGRAPHY ]
            </span>
            <h1 className="font-display font-black text-editorial-title uppercase tracking-tight text-[#181818]">
              YOUSSEF SALAH ELBLTAGI
            </h1>
            <p className="font-mono text-base sm:text-lg text-[#FF5A36] font-bold">
              Frontend Developer & Software QA Engineer
            </p>
          </div>

          {/* Core Story Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Bio Column */}
            <div className="lg:col-span-8 space-y-6 text-[#5A5752] text-base sm:text-lg leading-relaxed">
              <p className="text-[#181818] font-medium text-lg sm:text-xl">
                I am a Software Testing trainee at <strong className="text-[#FF5A36]">DEPI (Digital Egypt Pioneers Initiative)</strong> with a technical foundation in Frontend Development.
              </p>

              <p>
                Most QA testers approach applications purely from the external user interface, guessing at why a defect occurred. Conversely, many developers write features without considering edge cases, boundary failures, or negative user scenarios.
              </p>

              <p>
                My background spans both sides of the coin. Having built applications with <strong className="text-[#181818]">Java, C++, React, and Next.js</strong>, I understand component trees, state mutations, and API structures. When I test, I know exactly what developer assumptions were made and where the cracks are likely to appear.
              </p>

              <p>
                My mission is simple: <span className="text-[#181818] font-bold">build digital experiences, test their limits, and make them better.</span>
              </p>

              {/* Status Box */}
              <div className="p-6 bg-white border-2 border-[#181818] shadow-[6px_6px_0px_0px_#181818] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-3">
                  <span className="text-[#181818] font-bold uppercase flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#FF5A36]" /> Formal Credential
                  </span>
                  <span className="bg-[#C6F36B] text-[#181818] px-2 py-0.5 font-bold uppercase text-[10px]">
                    Active Trainee
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm text-[#181818] block">
                    Software Testing Trainee
                  </span>
                  <span className="text-[#5A5752] block">
                    Digital Egypt Pioneers Initiative (DEPI)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#181818] text-[#F4F1EA] p-6 border-2 border-[#181818] space-y-4 font-mono text-xs">
                <span className="font-bold text-xs uppercase tracking-wider text-[#C6F36B] block">
                  Profile Snapshot
                </span>

                <div className="space-y-3 text-[11px] divide-y divide-white/10">
                  <div className="pt-2">
                    <span className="text-white/50 block">Discipline Balance:</span>
                    <span className="text-white font-bold">50% Frontend / 50% QA</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/50 block">Testing Focus:</span>
                    <span className="text-white font-bold">EP & BVA / Manual Functional</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/50 block">Core Languages:</span>
                    <span className="text-white font-bold">JavaScript, TypeScript, Java, C++</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/50 block">Location:</span>
                    <span className="text-white font-bold">Egypt (Available Remote)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <a
                    href="/contact"
                    className="w-full py-2.5 bg-[#FF5A36] text-[#F4F1EA] hover:bg-white hover:text-[#181818] font-bold uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Hire Youssef</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Educational Timeline */}
          <div className="space-y-6 border-t-2 border-[#181818] pt-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#181818]">
              ENGINEERING EVOLUTION
            </h2>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.period}
                  className="bg-white p-6 sm:p-8 border-2 border-[#181818] shadow-[6px_6px_0px_0px_#181818] space-y-4 font-mono text-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5D0C8] pb-3">
                    <span className="text-[#FF5A36] font-bold uppercase tracking-wider text-[11px]">
                      {m.period}
                    </span>
                    <span className="text-[#5A5752]">Milestone 0{idx + 1}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#181818]">
                    {m.title}
                  </h3>

                  <p className="text-sm font-sans text-[#5A5752] leading-relaxed">
                    {m.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-[#E8E5DD] border border-[#D5D0C8] text-[10px] text-[#181818]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

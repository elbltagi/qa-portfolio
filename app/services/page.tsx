import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Code2, Sparkles, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { servicesData } from "@/data/portfolioData";
import { constructMetadata, getServicesSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Frontend Engineering & QA Services",
  description:
    "Freelance React/Next.js frontend engineering, manual functional testing, exploratory test case design (EP & BVA), and UI quality audits by Youssef Salah Elbltagi.",
  path: "/services",
  keywords: [
    "Frontend Development Services",
    "Website QA Testing Services",
    "Manual Software Testing",
    "Regression Testing Services",
    "React Next.js Freelance",
  ],
});

export default function ServicesPage() {
  const servicesJsonLd = getServicesSchema();
  const faqs = [
    {
      q: "What makes your QA services different from ordinary testers?",
      a: "I have a developer background in Java, React, and Next.js. I don't just say 'it broke' — I inspect console stacks, network payloads, identify whether a problem is front-end state or API schema related, and write tickets engineers can immediately act on.",
    },
    {
      q: "Can you both build our frontend and test it?",
      a: "Yes. I frequently handle end-to-end interface delivery: building accessible, responsive React/Next.js components and applying Boundary Value Analysis and Equivalence Partitioning directly into the delivery process.",
    },
    {
      q: "What documentation do you provide upon finishing a QA audit?",
      a: "You receive an exportable Test Scenarios Matrix with pass/fail ratios, detailed Defect Reproduction Logs with screenshots/steps, and a Final Release Sign-Off Summary.",
    },
    {
      q: "What tools do you use for API and Mobile testing?",
      a: "For APIs, I author Postman collections covering all CRUD endpoints and status codes. For mobile, I use real Android hardware and Android Studio emulators to stress-test permissions, low-light cameras, and offline SQLite caching.",
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
            __html: JSON.stringify(servicesJsonLd),
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
              [ SERVICES & PACKAGES ]
            </span>
            <h1 className="font-display font-black text-editorial-title uppercase tracking-tight text-[#181818]">
              DISCIPLINED DIGITAL OFFERINGS
            </h1>
            <p className="font-mono text-sm sm:text-base text-[#5A5752] max-w-2xl">
              Professional freelance services combining technical frontend engineering with structured software quality assurance.
            </p>
          </div>

          {/* Detailed Service Panels */}
          <div className="space-y-12">
            {servicesData.map((svc) => (
              <div
                key={svc.number}
                className="bg-white border-2 border-[#181818] shadow-[8px_8px_0px_0px_#181818] p-6 sm:p-10 space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D5D0C8] pb-4">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#FF5A36]">
                    {svc.number}
                  </span>
                  <span className="font-mono text-xs text-[#5A5752] uppercase tracking-wider">
                    {svc.tagline}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#181818]">
                    {svc.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#5A5752] leading-relaxed max-w-3xl">
                    {svc.description}
                  </p>
                </div>

                {/* Deliverables Grid */}
                <div className="space-y-3 pt-4 border-t border-[#D5D0C8]">
                  <span className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider block">
                    Deliverables & Outcomes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#181818] font-mono">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5A36] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & CTA */}
                <div className="pt-6 border-t border-[#D5D0C8] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#E8E5DD] border border-[#D5D0C8] text-[#181818]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="px-5 py-2.5 bg-[#181818] text-white hover:bg-[#FF5A36] font-bold uppercase transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-6 border-t-2 border-[#181818] pt-12">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A36] font-bold">
                [ FREQUENTLY ASKED QUESTIONS ]
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#181818]">
                CLEAR ANSWERS ON PROCESS & DELIVERY
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 border-2 border-[#181818] space-y-2">
                  <h3 className="font-display font-bold text-base text-[#181818] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#FF5A36] shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5A5752] leading-relaxed pl-6">
                    {faq.a}
                  </p>
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

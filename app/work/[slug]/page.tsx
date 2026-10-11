import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck, Bug, Terminal, FileText, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { projects } from "@/data/portfolioData";
import { SITE_URL, constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: `${project.summary} Practical deliverables, test cases, and defect logs.`,
    path: `/work/${project.slug}`,
    keywords: [
      project.title,
      project.category,
      project.discipline,
      ...project.technologies,
    ],
    ogType: "article",
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Work", url: `${SITE_URL}/work` },
    { name: project.title, url: `${SITE_URL}/work/${project.slug}` },
  ]);

  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181818]">
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#5A5752] hover:text-[#FF5A36] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Case Studies</span>
            </Link>

            <span className="font-mono text-xs text-[#5A5752]">
              Case Study #{currentIndex + 1} of {projects.length}
            </span>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span
                className={`px-2.5 py-0.5 font-bold uppercase ${
                  project.discipline === "TESTED BY ME"
                    ? "bg-[#FF5A36] text-[#181818]"
                    : "bg-[#C6F36B] text-[#181818]"
                }`}
              >
                {project.discipline}
              </span>
              <span className="text-[#5A5752]">•</span>
              <span className="text-[#5A5752] uppercase font-bold">{project.category}</span>
              <span className="text-[#5A5752]">•</span>
              <span className="text-[#5A5752]">{project.year}</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#181818] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="font-mono text-base sm:text-lg text-[#C43616] font-bold">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-[#5A5752] leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 border-2 border-[#181818] shadow-[6px_6px_0px_0px_#181818]">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <span className="font-mono text-[11px] uppercase text-[#5A5752] tracking-wider block">
                  {m.label}
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-[#181818] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* The Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 border-2 border-[#181818] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-[#C43616]">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm sm:text-base text-[#181818] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#181818] text-[#F4F1EA] p-6 sm:p-8 border-2 border-[#181818] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-[#C6F36B]">
                <ShieldCheck className="w-4 h-4" />
                <span>The QA & Dev Solution</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Responsibilities & Deliverables */}
          <div className="bg-white p-6 sm:p-10 border-2 border-[#181818] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider border-b border-[#D5D0C8] pb-2">
                  My Actual Responsibilities
                </h3>
                <ul className="space-y-2.5">
                  {project.responsibilities.map((res, i) => (
                     <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A5752] leading-relaxed">
                      <span className="font-mono text-[#C43616] font-bold">0{i + 1}.</span>
                      <span className="text-[#181818]">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase font-bold text-[#181818] tracking-wider border-b border-[#D5D0C8] pb-2">
                  Deliverables Produced
                </h3>
                <div className="space-y-2.5">
                  {project.deliverables.map((del, i) => (
                    <div key={i} className="p-3 bg-[#F4F1EA] border border-[#D5D0C8] font-mono text-xs text-[#181818] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C43616] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="pt-6 border-t border-[#D5D0C8] space-y-3">
              <span className="font-mono text-xs uppercase font-bold text-[#5A5752] block tracking-wider">
                Technologies & Testing Utilities:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#E8E5DD] border border-[#D5D0C8] font-mono text-xs text-[#181818]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sample Executed Test Cases Matrix */}
          {project.sampleTestCases && project.sampleTestCases.length > 0 && (
            <div className="space-y-4 bg-white p-6 sm:p-8 border-2 border-[#181818]">
              <div className="flex items-center justify-between border-b border-[#D5D0C8] pb-3">
                <h3 className="font-mono text-xs uppercase font-bold text-[#181818] flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C43616]" />
                  Executed Test Scenarios Matrix
                </h3>
                <span className="font-mono text-xs text-emerald-700 font-bold">
                  All Scenarios Verified
                </span>
              </div>

              <div className="overflow-x-auto border border-[#181818]">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#181818] text-[#F4F1EA] text-[10px] uppercase">
                    <tr>
                      <th className="py-3 px-3">Test ID</th>
                      <th className="py-3 px-3">Scenario / Condition</th>
                      <th className="py-3 px-3">Technique</th>
                      <th className="py-3 px-3">Expected Result</th>
                      <th className="py-3 px-3 text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D5D0C8]">
                    {project.sampleTestCases.map((tc) => (
                      <tr key={tc.id} className="hover:bg-[#F4F1EA]">
                        <td className="py-3 px-3 font-bold text-[#C43616]">{tc.id}</td>
                        <td className="py-3 px-3 text-[#181818] font-sans font-medium">{tc.scenario}</td>
                        <td className="py-3 px-3 text-[#5A5752]">{tc.technique}</td>
                        <td className="py-3 px-3 text-[#5A5752]">{tc.expected}</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#C6F36B] text-[#181818]">
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

          {/* Sample Defect Reproduction Ticket */}
          {project.sampleBugReport && (
            <div className="bg-[#181818] text-[#F4F1EA] p-6 sm:p-8 border-2 border-[#181818] space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="font-bold text-base text-[#C6F36B] block">
                    {project.sampleBugReport.id}: {project.sampleBugReport.title}
                  </span>
                  <span className="text-[#9E9B95] text-[11px]">
                    Reporter: Youssef Salah Elbltagi • Software Testing Trainee @ DEPI
                  </span>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase bg-[#FF5A36] text-[#181818]">
                  Severity: {project.sampleBugReport.severity}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#24252B] p-3 text-[11px]">
                <div><span className="text-white/50 block">Priority:</span> {project.sampleBugReport.priority}</div>
                <div><span className="text-white/50 block">Environment:</span> {project.sampleBugReport.environment}</div>
                <div><span className="text-white/50 block">Status:</span> Confirmed Defect</div>
                <div><span className="text-white/50 block">Regression:</span> Verified</div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[#FF5A36] font-bold text-[11px] uppercase block">
                  Steps to Reproduce:
                </span>
                <ol className="list-decimal list-inside text-white/80 space-y-1 bg-[#24252B] p-4 border border-white/5">
                  {project.sampleBugReport.steps.map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-950/40 border border-emerald-500/40 p-4">
                  <span className="text-[#C6F36B] font-bold block mb-1">Expected Result:</span>
                  <span className="text-white/80">{project.sampleBugReport.expected}</span>
                </div>
                <div className="bg-rose-950/40 border border-rose-500/40 p-4">
                  <span className="text-[#FF5A36] font-bold block mb-1">Actual Result:</span>
                  <span className="text-white/80">{project.sampleBugReport.actual}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation to Next Case Study */}
          <div className="p-8 bg-[#E8E5DD] border-2 border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="text-[#5A5752] uppercase block">Next Case Study:</span>
              <span className="font-display font-bold text-lg text-[#181818] mt-0.5 block">
                {nextProject.title}
              </span>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="px-6 py-3 bg-[#181818] text-white hover:bg-[#FF5A36] hover:text-[#181818] font-bold uppercase transition-colors flex items-center gap-2"
            >
              <span>Explore Next Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

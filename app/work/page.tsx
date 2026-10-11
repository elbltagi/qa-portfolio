import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import WorkArchiveClient from "@/components/work/WorkArchiveClient";
import { projects } from "@/data/portfolioData";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "QA Case Studies & Frontend Work",
  description:
    "Explore real-world software testing matrices, Boundary Value Analysis test suites, defect reproduction reports, and responsive Next.js frontend projects by Youssef Salah Elbltagi.",
  path: "/work",
  keywords: [
    "Software QA Case Studies",
    "Frontend Development Portfolio",
    "Manual Testing Deliverables",
    "Test Case Design Matrix",
    "Boundary Value Analysis Examples",
    "Equivalence Partitioning Cases",
    "React Projects",
  ],
});

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181818]">
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <WorkArchiveClient initialProjects={projects} />
      </main>

      <Footer />
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Contact from "@/components/sections/Contact";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Collaboration",
  description:
    "Get in touch with Youssef Salah Elbltagi for freelance frontend development, web application manual testing audits, and full-time engineering or QA roles.",
  path: "/contact",
  keywords: [
    "Hire Frontend Developer",
    "Hire Software QA Tester",
    "Freelance QA Engineer",
    "Contact Youssef Salah Elbltagi",
  ],
});

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181818]">
      <CustomCursor />
      <Navbar />

      <main className="pt-28 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#5A5752] hover:text-[#FF5A36] uppercase tracking-wider transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Embedded Contact Studio Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

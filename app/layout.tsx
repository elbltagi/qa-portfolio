import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Salah Elbltagi | Software Tester & QA Engineer",
  description:
    "Freelance Software Tester specializing in manual testing, test case design, bug reporting, and quality assurance. Software Testing Trainee at DEPI.",
  keywords: [
    "Software Tester",
    "QA Engineer",
    "Quality Assurance",
    "Manual Testing",
    "Test Case Design",
    "Equivalence Partitioning",
    "Boundary Value Analysis",
    "Bug Reporting",
    "DEPI",
    "Youssef Salah Elbltagi",
    "Freelance QA",
    "REST API Testing",
    "Mobile Testing",
  ],
  authors: [{ name: "Youssef Salah Elbltagi" }],
  openGraph: {
    title: "Youssef Salah Elbltagi | Software Tester & QA Engineer",
    description:
      "Software Tester who finds bugs before your users do. Manual Testing, Test Case Design & Bug Reporting Specialist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Salah Elbltagi | Software Tester & QA Engineer",
    description: "Freelance QA Engineer and Software Tester.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] antialiased selection:bg-[#00D4FF] selection:text-[#0B0F14]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, getPersonSchema, getWebSiteSchema } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Youssef Elbltagi | Frontend Developer & QA Engineer",
    template: "%s | Youssef Elbltagi",
  },
  description:
    "Explore the portfolio of Youssef Salah Elbltagi, a Frontend Developer and Software QA Tester specializing in React, Next.js, responsive web development, manual testing, and software quality.",
  keywords: [
    "Frontend Developer",
    "Software QA Tester",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Exploratory Testing",
    "Test Case Design",
    "Boundary Value Analysis",
    "Equivalence Partitioning",
    "Bug Reporting",
    "Postman API Testing",
    "DEPI Software Testing Trainee",
    "Youssef Salah Elbltagi",
    "Website QA Testing Services",
  ],
  authors: [{ name: "Youssef Salah Elbltagi", url: `${SITE_URL}/` }],
  creator: "Youssef Salah Elbltagi",
  publisher: "Youssef Salah Elbltagi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Youssef Elbltagi | Frontend Developer & QA Engineer",
    description:
      "I build digital experiences, test their limits, and make them better. React, Next.js, and structured manual quality assurance case studies.",
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "Youssef Salah Elbltagi Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Elbltagi | Frontend Developer & QA Engineer",
    description:
      "I build digital experiences, test their limits, and make them better. React, Next.js, and manual QA case studies.",
    creator: "@elbltagi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = getPersonSchema();
  const websiteJsonLd = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F4F1EA] text-[#181818] font-sans antialiased selection:bg-[#FF5A36] selection:text-[#F4F1EA]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

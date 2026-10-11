import { Metadata } from "next";
import { personalInfo, projects } from "@/data/portfolioData";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.youssefelbltagi.dev";

export interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogType = "website",
}: PageMetadataProps): Metadata {
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  const url = cleanPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;

  const defaultKeywords = [
    "Frontend Developer",
    "Software QA Tester",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Manual Testing",
    "Functional Testing",
    "Test Case Design",
    "Equivalence Partitioning",
    "Boundary Value Analysis",
    "Bug Reporting",
    "Regression Testing",
    "Exploratory Testing",
    "Postman API Testing",
    "DEPI Software Testing Trainee",
    "Youssef Salah Elbltagi",
    "Website QA Testing Services",
  ];

  return {
    title,
    description,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${personalInfo.name} — Frontend Developer & QA Engineer`,
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@elbltagi",
    },
  };
}

// JSON-LD Structured Data Generators

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: personalInfo.name,
    jobTitle: [
      "Frontend Developer",
      "Software QA Engineer",
      "Software QA Tester",
    ],
    description: personalInfo.bio,
    url: `${SITE_URL}/`,
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsAbout: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Test Case Design",
      "Boundary Value Analysis",
      "Equivalence Partitioning",
      "Bug Reporting",
      "Postman",
      "Java",
      "C++",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Digital Egypt Pioneers Initiative (DEPI)",
    },
    email: `mailto:${personalInfo.email}`,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: `${personalInfo.name} — Frontend Developer & QA Engineer`,
    description: personalInfo.tagline,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about/#webpage`,
    url: `${SITE_URL}/about`,
    name: `About ${personalInfo.name} — Frontend Developer & QA Engineer`,
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Frontend Engineering & Next.js Development",
        description:
          "Engineering responsive, accessible user interfaces using React, Next.js, TypeScript, and modern CSS architecture.",
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Software Quality Assurance & Manual Testing",
        description:
          "End-to-end functional testing, exploratory testing, Equivalence Partitioning, Boundary Value Analysis test case design, and bug reporting.",
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "UI Quality & Responsiveness Auditing",
        description:
          "Cross-browser compatibility testing, mobile usability audits, accessibility checks, and performance optimization.",
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  discipline: "BUILT BY ME" | "TESTED BY ME" | "BUILT & TESTED";
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  responsibilities: string[];
  technologies: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  sampleTestCases?: {
    id: string;
    scenario: string;
    technique: string;
    expected: string;
    result: "PASS" | "FAIL";
  }[];
  sampleBugReport?: {
    id: string;
    title: string;
    severity: "Critical" | "High" | "Medium" | "Low";
    priority: "P0 - Blocker" | "P1 - High" | "P2 - Medium" | "P3 - Low";
    environment: string;
    steps: string[];
    expected: string;
    actual: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "ecommerce-qa-testing",
    title: "E-Commerce Platform Quality Audit",
    subtitle: "High-Traffic Retail Flow & Cart Verification",
    discipline: "TESTED BY ME",
    category: "Web Application QA",
    year: "2026",
    summary:
      "End-to-end manual functional testing for an online shopping platform to validate user authentication, product catalog filters, cart calculations, and checkout gateways.",
    challenge:
      "The client experienced checkout abandonment and cart discount discrepancies when multiple discount vouchers were applied with edge-case item quantities.",
    solution:
      "Engineered an 85-scenario test suite applying Equivalence Partitioning and Boundary Value Analysis to cart limits, promo inputs, and payment states. Uncovered 18 defects including 3 critical checkout blockers.",
    responsibilities: [
      "Designed test scenarios using Equivalence Partitioning and Boundary Value Analysis",
      "Executed full manual functional testing across cart drawers and multi-step checkouts",
      "Identified and documented 18 defect reports with step-by-step reproduction flows",
      "Conducted regression testing after engineering sprint hotfixes",
    ],
    technologies: ["Manual Testing", "TestRail / Excel", "Chrome DevTools", "Jira", "Boundary Value Analysis", "Equivalence Partitioning"],
    deliverables: [
      "Comprehensive Test Scenarios Matrix (85 cases)",
      "Structured Bug Log with Severity & Priority Matrix",
      "Final Test Execution Summary & Release Sign-Off",
    ],
    metrics: [
      { label: "Scenarios Executed", value: "85" },
      { label: "Defects Uncovered", value: "18" },
      { label: "Critical Blockers", value: "3" },
      { label: "Post-Fix Pass Rate", value: "96.4%" },
    ],
    accentColor: "#FF5A36",
    githubUrl: "https://github.com/elbltagi/qa-portfolio",
    sampleTestCases: [
      {
        id: "TC-EC-01",
        scenario: "Cart Item Quantity - Boundary Max Limit (99 items)",
        technique: "Boundary Value Analysis",
        expected: "Quantity capped at 99 with clear user inline error message",
        result: "PASS",
      },
      {
        id: "TC-EC-02",
        scenario: "Promo Code - Equivalence Class Invalid Special Characters (@#$%)",
        technique: "Equivalence Partitioning",
        expected: "Invalid code inline error, button disabled, no unhandled exceptions",
        result: "PASS",
      },
      {
        id: "TC-EC-03",
        scenario: "Guest Checkout - Missing Required Billing Fields",
        technique: "Negative Testing",
        expected: "Highlight missing fields in red and prevent checkout progression",
        result: "PASS",
      },
      {
        id: "TC-EC-04",
        scenario: "Payment Step - Double Click Fast Submission on Order Button",
        technique: "Concurrency / UI Lock",
        expected: "Button locks instantly on first click, single order record created",
        result: "PASS",
      },
    ],
    sampleBugReport: {
      id: "BUG-EC-09",
      title: "Cart Total Calculation Error when applying percentage discount with modified quantities",
      severity: "High",
      priority: "P1 - High",
      environment: "Staging / Chrome 124 / macOS & Windows 11",
      steps: [
        "Add item priced $100 to cart.",
        "Apply 15% discount promo code 'SAVE15'.",
        "Change item quantity from 1 to 2 in cart drawer.",
        "Observe subtotal vs discounted total calculation.",
      ],
      expected: "Discount recalculated to 15% of $200 = $170 total.",
      actual: "Discount remains calculated on original $100 single item = $185 total.",
    },
  },
  {
    id: "proj-2",
    slug: "eduscan-mobile-qa",
    title: "EduScan Mobile Attendance QA",
    subtitle: "Hardware QR Scanner, Offline Cache & Sync Reliability",
    discipline: "TESTED BY ME",
    category: "Mobile QA & Edge Cases",
    year: "2026",
    summary:
      "Comprehensive quality assurance testing for a student attendance tracking mobile app featuring hardware camera QR scanning, offline caching, and database sync.",
    challenge:
      "Field users frequently lost cellular connection in basement lecture halls, causing data collision and duplicate records when reconnecting, plus application crashes upon denying camera permissions.",
    solution:
      "Constructed a 62-workflow mobile test matrix covering offline SQLite persistence, connection drop simulation, low-light camera stress tests, and permission handling.",
    responsibilities: [
      "Simulated intermittent offline connectivity and validated local cache retention",
      "Tested Android hardware camera permissions and low-light QR scanning fallbacks",
      "Logged critical crash stack traces with reproduction logs for the mobile dev team",
      "Verified duplicate record prevention logic during reconnect sync",
    ],
    technologies: ["Android Studio", "Real Device Testing", "Postman", "Git", "Exploratory Testing", "Offline Storage Auditing"],
    deliverables: [
      "Mobile Test Scenarios Suite (62 workflows)",
      "Camera Permission Exception Bug Reports",
      "Offline Sync Data Integrity Matrix",
    ],
    metrics: [
      { label: "Workflows Tested", value: "62" },
      { label: "Offline Scenarios", value: "14" },
      { label: "Bugs Logged", value: "12" },
      { label: "Data Integrity Rate", value: "100%" },
    ],
    accentColor: "#C6F36B",
    githubUrl: "https://github.com/elbltagi/qa-portfolio",
    sampleTestCases: [
      {
        id: "TC-ES-01",
        scenario: "QR Scan - Low Light & Damaged Code Scanning",
        technique: "Exploratory / Hardware",
        expected: "Fallback manual ID entry prompt appears without app freeze",
        result: "PASS",
      },
      {
        id: "TC-ES-02",
        scenario: "Offline Attendance - 50 Records Cached in LocalDB",
        technique: "Offline Persistence",
        expected: "All 50 records saved in cache without memory loss",
        result: "PASS",
      },
      {
        id: "TC-ES-03",
        scenario: "Reconnection Sync - Prevent Duplicate Student Record",
        technique: "Data Integrity Validation",
        expected: "Sync merges records cleanly without duplicate increments",
        result: "PASS",
      },
    ],
    sampleBugReport: {
      id: "BUG-ES-04",
      title: "App crash when attempting QR scan after user denies camera permission",
      severity: "Critical",
      priority: "P0 - Blocker",
      environment: "Android 13 / Samsung Galaxy S21 & Pixel 6",
      steps: [
        "Install application fresh and navigate to attendance screen.",
        "Deny camera permission when Android system modal appears.",
        "Tap 'Scan QR Code' button.",
      ],
      expected: "Display friendly in-app banner prompting user to enable camera in system settings.",
      actual: "Application instantly force-closes with an unhandled NullPointerException in CameraProvider.",
    },
  },
  {
    id: "proj-3",
    slug: "rest-api-testing-suite",
    title: "Enterprise REST API Test Suite",
    subtitle: "HTTP Status Codes, Schema Validation & Boundary Injections",
    discipline: "TESTED BY ME",
    category: "API & Backend QA",
    year: "2026",
    summary:
      "Automated and manual backend API testing using Postman collections to validate HTTP status codes, JSON schema structures, boundary payloads, and authentication tokens.",
    challenge:
      "Unvalidated API request bodies caused internal 500 server crashes and unhandled database exceptions instead of returning appropriate 4xx client error status codes.",
    solution:
      "Designed Postman collections covering 24 endpoints across GET, POST, PUT, DELETE with 110 automated assertion scripts. Tested negative boundaries, SQL injection payloads, and null parameters.",
    responsibilities: [
      "Authored 110 Postman assertions verifying response schemas and latency",
      "Validated HTTP response codes (200, 201, 400, 401, 403, 404, 409, 500)",
      "Tested security boundary payloads including special characters and oversized strings",
      "Documented API defect logs with cURL requests and JSON payload reproduction steps",
    ],
    technologies: ["Postman", "JSON Schema Validator", "cURL", "Git", "REST APIs", "Boundary Testing"],
    deliverables: [
      "Exportable Postman Environment & Collection Suite",
      "API Defect Matrix & Status Code Log",
      "Schema Validation & Latency Audit",
    ],
    metrics: [
      { label: "Endpoints Tested", value: "24" },
      { label: "Assertions Written", value: "110" },
      { label: "API Defects Logged", value: "7" },
      { label: "CRUD Coverage", value: "100%" },
    ],
    accentColor: "#FF5A36",
    githubUrl: "https://github.com/elbltagi/qa-portfolio",
    sampleTestCases: [
      {
        id: "TC-API-01",
        scenario: "POST /api/v1/auth/login - Valid credentials authentication",
        technique: "Positive Functional",
        expected: "200 OK with Bearer Token and user metadata in JSON body",
        result: "PASS",
      },
      {
        id: "TC-API-02",
        scenario: "POST /api/v1/users - Duplicate Email Registration",
        technique: "Negative / Validation",
        expected: "409 Conflict with informative error message: 'Email already exists'",
        result: "PASS",
      },
      {
        id: "TC-API-03",
        scenario: "DELETE /api/v1/items/999999 - Non-existent resource ID",
        technique: "Error Handling",
        expected: "404 Not Found response instead of database crash",
        result: "PASS",
      },
    ],
    sampleBugReport: {
      id: "BUG-API-02",
      title: "POST /api/v1/users returns 500 Error when payload age is negative string",
      severity: "Medium",
      priority: "P2 - Medium",
      environment: "Postman v10.22 / Staging Server API v1.2",
      steps: [
        "Send POST request to `/api/v1/users`.",
        "Set JSON body: `{\"name\":\"Test User\", \"age\": \"-55\"}`.",
        "Execute request and observe response code.",
      ],
      expected: "400 Bad Request with field validation error: 'Age must be a positive integer'.",
      actual: "500 Internal Server Error with unhandled database exception stack trace in response.",
    },
  },
  {
    id: "proj-4",
    slug: "creative-interactive-portfolio",
    title: "Dual-Engine Creative Studio Portfolio",
    subtitle: "Awwwards-Level Frontend Architecture & QA Playground",
    discipline: "BUILT & TESTED",
    category: "Frontend Engineering & Testing",
    year: "2026",
    summary:
      "A bespoke, high-performance portfolio featuring experimental editorial typography, physics-based interactions, smooth GSAP/Motion animations, and an interactive QA sandbox.",
    challenge:
      "Combining complex interactive animations, dual light/dark themes, and an embedded QA simulator without degrading mobile performance or accessibility.",
    solution:
      "Built with Next.js App Router, React 19, Tailwind CSS v4, and custom motion hooks. Implemented strict ARIA accessibility standards, keyboard navigation, and responsive fluid clamp typography.",
    responsibilities: [
      "Designed the complete Swiss/brutalist-editorial visual system and typography hierarchy",
      "Engineered the interactive QA Playground simulator with live defect diagnostics",
      "Implemented smooth kinetic animations with prefers-reduced-motion fallbacks",
      "Validated cross-browser rendering, mobile responsiveness, and Lighthouse Core Web Vitals",
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Manual QA"],
    deliverables: [
      "Production-Grade Next.js Web Application",
      "Interactive QA Playground Simulator",
      "100% Accessible and Keyboard Navigable Interface",
    ],
    metrics: [
      { label: "Core Web Vitals", value: "98+" },
      { label: "Accessibility Score", value: "100" },
      { label: "Interactive Demos", value: "2 Tools" },
      { label: "Discipline Balance", value: "50/50" },
    ],
    accentColor: "#C6F36B",
    liveUrl: "https://www.youssefelbltagi.dev",
    githubUrl: "https://github.com/elbltagi/qa-portfolio",
    sampleTestCases: [
      {
        id: "TC-PF-01",
        scenario: "Custom Cursor - Automatic suppression on touch and coarse pointer devices",
        technique: "Responsive & Usability",
        expected: "Custom cursor hidden completely on mobile/tablets; native touch preserved",
        result: "PASS",
      },
      {
        id: "TC-PF-02",
        scenario: "Interactive QA Simulator - Boundary Value Analysis on discount calculation",
        technique: "Boundary Testing",
        expected: "Simulator catches invalid inputs and highlights expected vs actual behavior",
        result: "PASS",
      },
      {
        id: "TC-PF-03",
        scenario: "Keyboard Navigation - Tab focus trap inside modal case studies",
        technique: "Accessibility Auditing",
        expected: "Focus trapped within modal while open; restored to trigger upon close",
        result: "PASS",
      },
    ],
  },
];

export const servicesData = [
  {
    number: "01",
    title: "FRONTEND ENGINEERING",
    tagline: "Performant, accessible, and art-directed digital interfaces.",
    description:
      "I transform ambitious creative concepts into clean, resilient code. From responsive landing pages to scalable React and Next.js web applications, I build interfaces that feel fluid, look exceptional, and adhere to modern architectural standards.",
    accent: "#FF5A36",
    deliverables: [
      "React.js & Next.js App Development",
      "Responsive & Fluid UI Implementation",
      "Modern CSS & Tailwind Architecture",
      "Component Systems & Micro-Interactions",
      "Performance & Core Web Vitals Tuning",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "JavaScript ES6+"],
  },
  {
    number: "02",
    title: "SOFTWARE QUALITY ASSURANCE",
    tagline: "Structured testing strategies that protect product reliability.",
    description:
      "I put software through rigorous testing before real users encounter defects. Utilizing formal techniques such as Equivalence Partitioning and Boundary Value Analysis, I design comprehensive test matrices and write actionable bug reports developers love.",
    accent: "#181818",
    deliverables: [
      "Manual Functional & UI Testing",
      "Test Scenario & Test Case Design (EP & BVA)",
      "Detailed Bug Reports with Reproduction Steps",
      "Regression Testing & Release Verification",
      "REST API Endpoint Validation via Postman",
    ],
    tools: ["Manual QA", "Equivalence Partitioning", "Boundary Value Analysis", "Postman", "Jira", "Chrome DevTools"],
  },
  {
    number: "03",
    title: "UI QUALITY & OPTIMIZATION",
    tagline: "Bridging the gap between creative design and defect-free reality.",
    description:
      "Because I both code and test, I inspect the fine details that standard testers miss and standard developers overlook. I eliminate visual glitches, edge-case layout breaks, accessibility barriers, and cross-browser discrepancies across all devices.",
    accent: "#C6F36B",
    deliverables: [
      "Cross-Browser & Device Compatibility Audits",
      "Accessibility (WCAG) & Keyboard Navigation Checks",
      "Responsive Layout Stress-Testing",
      "Usability & User Journey Friction Audits",
      "Frontend Code Review from a QA Lens",
    ],
    tools: ["Chrome / Safari / Firefox", "Mobile Emulators & Real Devices", "Lighthouse", "W3C Validators"],
  },
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tag: "CODE & UI",
    description: "Modern web foundations for building fast, responsive, and maintainable interfaces.",
    skills: [
      { name: "React.js", level: "Production", experience: "Component lifecycle, state hooks, reusable design patterns" },
      { name: "Next.js", level: "App Router", experience: "Server components, file-based routing, SEO, static generation" },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "Modern syntax, async/await, DOM APIs, event handling" },
      { name: "TypeScript", level: "Intermediate", experience: "Type safety, interfaces, typed component props" },
      { name: "HTML5 & Semantic Web", level: "Core", experience: "Accessible markup, document hierarchy, SEO meta" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", experience: "Flexbox, CSS Grid, animations, responsive media queries" },
      { name: "Tailwind CSS", level: "Proficient", experience: "Utility-first design tokens, responsive typography, v4 themes" },
    ],
  },
  {
    id: "qa",
    title: "Quality Assurance & Testing",
    tag: "QUALITY & RELIABILITY",
    description: "Disciplined manual and exploratory testing methodologies learned through DEPI specialization.",
    skills: [
      { name: "Manual Functional Testing", level: "Core Specialization", experience: "End-to-end workflow verification across complex web flows" },
      { name: "Test Case Design", level: "Formal", experience: "Structured test suites with pre-conditions and expected results" },
      { name: "Boundary Value Analysis (BVA)", level: "Technique", experience: "Testing exact limits, min/max borders, and threshold shifts" },
      { name: "Equivalence Partitioning (EP)", level: "Technique", experience: "Segmenting valid/invalid input classes to optimize coverage" },
      { name: "Exploratory Testing", level: "Unscripted", experience: "Ad-hoc deep dive investigations uncovering hidden UX flaws" },
      { name: "Bug Reporting & Triage", level: "Actionable", experience: "Writing clear reproduction steps, priority, and severity logs" },
      { name: "Regression Testing", level: "Systematic", experience: "Ensuring new updates and bug fixes preserve existing stability" },
    ],
  },
  {
    id: "tools",
    title: "Development & QA Tooling",
    tag: "WORKFLOW & APIS",
    description: "Industry-standard tools for debugging, version control, and API validation.",
    skills: [
      { name: "Postman", level: "API Testing", experience: "Collection runners, environment variables, CRUD assertions" },
      { name: "Chrome DevTools", level: "Deep Inspection", experience: "Network payload inspection, DOM manipulation, console debugging" },
      { name: "Git & GitHub", level: "Version Control", experience: "Branching, PRs, version history, repository collaboration" },
      { name: "Jira / TestRail", level: "Workflow Tracking", experience: "Defect logging, sprint tracking, test case management" },
      { name: "Android Studio & Real Devices", level: "Mobile QA", experience: "Logcat inspection, permission tests, device emulations" },
      { name: "Markdown Documentation", level: "Documentation", experience: "Structured test execution summaries and technical reports" },
    ],
  },
  {
    id: "core",
    title: "Computer Science & Foundations",
    tag: "LOGIC & COMPUTATION",
    description: "Foundational programming concepts that give me a developer's insight into system failures.",
    skills: [
      { name: "Java", level: "Core & OOP", experience: "Object-oriented architecture, data structures, exception logic" },
      { name: "C++", level: "Fundamentals", experience: "Memory concepts, algorithmic problem solving, logic flows" },
      { name: "Express.js", level: "Backend Basics", experience: "REST endpoint routing, middleware, JSON error handling" },
      { name: "Problem Solving", level: "Analytical", experience: "Root-cause diagnosis, debugging complex state interactions" },
    ],
  },
];

export const processSteps = [
  {
    phase: "01",
    name: "DISCOVER",
    subtitle: "Deconstruct Requirements & Edge Cases",
    description:
      "Before writing a line of code or executing a test, I analyze user stories, system specifications, and architectural constraints. I identify missing requirements, ambiguities, and potential risk zones early.",
    deliverable: "Risk Assessment & Test Plan Scope",
    icon: "Search",
  },
  {
    phase: "02",
    name: "BUILD",
    subtitle: "Precision Development & Implementation",
    description:
      "When developing frontend interfaces, I engineer accessible, modular components with fluid responsiveness and semantic HTML. Every component is architected with testability and edge cases in mind.",
    deliverable: "Responsive, Semantic Component Code",
    icon: "Code",
  },
  {
    phase: "03",
    name: "VALIDATE",
    subtitle: "Stress Testing & Defect Uncovering",
    description:
      "I apply Boundary Value Analysis, Equivalence Partitioning, and negative testing across all critical journeys. I challenge inputs, simulate network drops, inspect network payloads, and identify anomalies.",
    deliverable: "Actionable Bug Reports & Test Matrices",
    icon: "CheckSquare",
  },
  {
    phase: "04",
    name: "REFINE",
    subtitle: "Verification, Optimization & Sign-Off",
    description:
      "I re-test fixed bugs to ensure no regressions occur. I fine-tune performance, review accessibility compliance, and sign off on a polished release that delivers high reliability and visual distinction.",
    deliverable: "Final Quality Sign-off & Clean Release",
    icon: "Sparkles",
  },
];

export const personalInfo = {
  name: "Youssef Salah Elbltagi",
  title: "Frontend Developer & Software QA Engineer",
  tagline: "I build digital experiences, test their limits, and make them better.",
  status: "DEPI Software Testing Trainee • Available for Select Projects",
  location: "Egypt • Remote Worldwide",
  email: "youssefsalah469@gmail.com",
  github: "https://github.com/elbltagi",
  linkedin: "https://www.linkedin.com/in/youssef-elbltagi/",
  website: "https://www.youssefelbltagi.dev",
  bio: `I am Youssef Salah Elbltagi, a dual-discipline Frontend Developer and Software QA Engineer currently specializing as a Software Testing Trainee at DEPI (Digital Egypt Pioneers Initiative). My background in Java, C++, React, and Next.js allows me to understand software from the inside out — enabling me to engineer fluid, accessible user interfaces and systematically break them down to uncover edge-case defects before users ever do.`,
  responseTime: "Within 4–12 hours",
};

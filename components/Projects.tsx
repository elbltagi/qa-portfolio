"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ShoppingBag, 
  Smartphone, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck,
  Bug,
  Terminal,
  ExternalLink
} from "lucide-react";
import CaseStudyModal, { ProjectData } from "./CaseStudyModal";

const projectsData: ProjectData[] = [
  {
    id: "proj-1",
    title: "E-Commerce Website Testing",
    category: "Web & E-Commerce QA",
    description: "Comprehensive manual testing of an online shopping platform to validate user authentication, product catalog filters, cart calculations, and checkout gateways.",
    overview: "This project focused on executing end-to-end manual functional testing for a high-traffic e-commerce web application. I designed test scenarios applying Equivalence Partitioning and Boundary Value Analysis to cart item limits, promo code input validations, and payment gateway responses.",
    testingActivities: [
      "Functional Testing across cart & checkout",
      "Equivalence Partitioning on coupon inputs",
      "Boundary Value Analysis on item quantity limits",
      "Regression Testing after sprint updates",
      "Actionable Bug Reporting with reproduction steps",
    ],
    deliverables: [
      "Comprehensive Test Cases Sheet",
      "Defect Log with Severity & Priority Ratings",
      "Final Test Execution & Summary Report",
    ],
    tools: ["Manual Testing", "TestRail / Excel", "Chrome DevTools", "Jira"],
    metrics: [
      { label: "Total Test Cases", value: "85 Scenarios" },
      { label: "Defects Uncovered", value: "18 Bugs" },
      { label: "Critical Bugs", value: "3 Found" },
      { label: "Pass Rate", value: "96.4%" },
    ],
    sampleTestCases: [
      { id: "TC-EC-01", scenario: "Cart Item Quantity - Boundary Max Limit (99 items)", technique: "Boundary Value Analysis", expected: "Quantity capped at 99 with clear user error message", result: "PASS" },
      { id: "TC-EC-02", scenario: "Promo Code - Equivalence Class Invalid Special Characters", technique: "Equivalence Partitioning", expected: "Invalid code inline error, button disabled", result: "PASS" },
      { id: "TC-EC-03", scenario: "Guest Checkout - Missing Required Billing Fields", technique: "Negative Testing", expected: "Highlight empty fields and prevent form submission", result: "PASS" },
      { id: "TC-EC-04", scenario: "Payment Step - Double Click Submit Order Button", technique: "Concurrency / UI", expected: "Button locks instantly, single order created", result: "PASS" },
    ],
    sampleBugReport: {
      id: "BUG-EC-09",
      title: "Cart Total Calculation Error when applying percentage discount",
      severity: "High",
      priority: "P1 - High",
      environment: "Staging / Chrome 122 / Desktop",
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
    title: "EduScan Mobile Application QA",
    category: "Mobile QA & Workflows",
    description: "Testing a student management and payment tracking application with complex offline workflows, QR code scanning, and data synchronization.",
    overview: "EduScan is a mobile platform used for tracking student attendance via QR codes and managing tuition payments. Testing required verifying device permissions, camera scanning speeds, offline data caching, and verifying duplicate record prevention during sync.",
    testingActivities: [
      "Mobile Functional Testing (Android)",
      "QR Code Camera Scanning Testing",
      "Offline Functionality & Cache Storage",
      "Data Synchronization when reconnecting",
      "Duplicate Record Validation",
    ],
    deliverables: [
      "Mobile Test Scenarios Suite",
      "Detailed Defect Reports with Screenshots",
      "Test Execution Summary Matrix",
    ],
    tools: ["Android Studio Emulator", "Real Device Testing", "Postman", "Git"],
    metrics: [
      { label: "Test Scenarios", value: "62 Workflows" },
      { label: "Offline Cases", value: "14 Scenarios" },
      { label: "Bugs Logged", value: "12 Defects" },
      { label: "Sync Coverage", value: "100%" },
    ],
    sampleTestCases: [
      { id: "TC-ES-01", scenario: "QR Scan - Low Light & Damaged Code Scanning", technique: "Exploratory / Hardware", expected: "Fallback manual ID entry prompt appears", result: "PASS" },
      { id: "TC-ES-02", scenario: "Offline Attendance - 50 Records Cached in LocalDB", technique: "Offline Testing", expected: "Records saved locally without data loss", result: "PASS" },
      { id: "TC-ES-03", scenario: "Reconnection Sync - Prevent Duplicate Student Record", technique: "Data Integrity", expected: "Sync merges records without creating duplicates", result: "PASS" },
    ],
    sampleBugReport: {
      id: "BUG-ES-04",
      title: "App crash when attempting QR scan without camera permission",
      severity: "Critical",
      priority: "P0 - Immediate",
      environment: "Android 13 / Samsung S21",
      steps: [
        "Install application fresh and open attendance screen.",
        "Deny camera permission when system dialog appears.",
        "Tap 'Scan QR Code' button.",
      ],
      expected: "Show friendly in-app banner asking user to enable camera in settings.",
      actual: "Application instantly force closes with NullPointer exception.",
    },
  },
  {
    id: "proj-3",
    title: "REST API Testing Project",
    category: "API & Backend QA",
    description: "Quality assurance testing for RESTful APIs to validate request payload structures, HTTP status codes, data integrity, and error handling.",
    overview: "Conducted rigorous backend API testing using Postman. Designed test collections covering all HTTP methods (GET, POST, PUT, DELETE), validating JSON response body key-value types, headers, status codes, and negative boundary payloads.",
    testingActivities: [
      "GET / POST / PUT / DELETE Endpoint Verification",
      "HTTP Status Code Validation (200, 201, 400, 401, 404, 500)",
      "Input Schema & Header Validation",
      "Negative Boundary Testing (Nulls, SQLi Strings)",
      "API Response Speed & Payload Assertions",
    ],
    deliverables: [
      "Postman Exported Test Collections",
      "API Defect Matrix & Status Logs",
      "Response Validation Report",
    ],
    tools: ["Postman", "JSON Schema Validator", "cURL", "Git"],
    metrics: [
      { label: "Endpoints Tested", value: "24 Routes" },
      { label: "Postman Tests", value: "110 Assertions" },
      { label: "API Bugs", value: "7 Logged" },
      { label: "Coverage", value: "Full CRUD" },
    ],
    sampleTestCases: [
      { id: "TC-API-01", scenario: "POST /api/v1/auth/login - Valid credentials", technique: "Positive Functional", expected: "200 OK with Bearer Token in JSON body", result: "PASS" },
      { id: "TC-API-02", scenario: "POST /api/v1/users - Duplicate Email Registration", technique: "Negative / Validation", expected: "409 Conflict with clear error message", result: "PASS" },
      { id: "TC-API-03", scenario: "DELETE /api/v1/items/999999 - Non-existent Resource", technique: "Error Handling", expected: "404 Not Found response", result: "PASS" },
    ],
    sampleBugReport: {
      id: "BUG-API-02",
      title: "POST /api/v1/users returns 500 Error when payload age is negative string",
      severity: "Medium",
      priority: "P2 - Medium",
      environment: "Postman v10.22 / Staging Server",
      steps: [
        "Send POST request to `/api/v1/users`.",
        "Set JSON body: `{\"name\":\"Test\", \"age\": \"-55\"}`.",
        "Execute request and observe response code.",
      ],
      expected: "400 Bad Request with field error: 'Age must be positive integer'.",
      actual: "500 Internal Server Error with unhandled database exception stack trace.",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0B0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-cyan">QA Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Practical testing projects demonstrating my structured approach to software quality, test execution, and defect reporting.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* 3 Detailed Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#111820] rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Visual Accent */}
              <div className="p-6 bg-[#141C26] border-b border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 px-2.5 py-1 rounded-full border border-[#00D4FF]/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    QA Project #{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

                {/* Activities Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-white font-semibold block">Testing Activities:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.testingActivities.slice(0, 4).map((act) => (
                      <span
                        key={act}
                        className="px-2 py-0.5 text-[11px] font-mono text-[#94A3B8] bg-[#0B0F14] border border-white/5 rounded"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables summary */}
                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  <span className="text-xs font-mono text-[#7C3AED] font-semibold block">Key Deliverables:</span>
                  <div className="space-y-1">
                    {project.deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA Footer */}
              <div className="p-6 bg-[#0B0F14] border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-[#0B0F14] bg-[#00D4FF] hover:bg-[#38E0FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import HowIWork from "@/components/sections/HowIWork";
import QAPlayground from "@/components/sections/QAPlayground";
import Contact from "@/components/sections/Contact";
import ScrollMarquee from "@/components/ui/ScrollMarquee";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F4F1EA] text-[#181818]">
      {/* Contextual Custom Cursor on Desktop */}
      <CustomCursor />

      {/* Sticky Editorial Header */}
      <Navbar />

      {/* Main Editorial Flow */}
      <main>
        {/* Section 01: Experimental Hero */}
        <Hero />

        {/* Kinetic Scroll Marquee */}
        <ScrollMarquee text="BUILD • TEST • IMPROVE • REPEAT" theme="light" />

        {/* Section 02: Creative Manifesto */}
        <Manifesto />

        {/* Section 03: Selected Projects */}
        <SelectedProjects />

        {/* Section 04: Services */}
        <Services />

        {/* Section 05: Interactive Skills Matrix */}
        <Skills />

        {/* Section 06: How I Work (4-Phase Lifecycle) */}
        <HowIWork />

        {/* Section 07: QA Interactive Playground */}
        <QAPlayground />

        {/* Studio Marquee Accent */}
        <ScrollMarquee text="SOFTWARE QUALITY • RESILIENT FRONTEND • ACCESSIBLE BY DESIGN" theme="orange" />

        {/* Section 08: Contact Studio */}
        <Contact />
      </main>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
}

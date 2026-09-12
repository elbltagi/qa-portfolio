import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] selection:bg-[#00D4FF] selection:text-[#0B0F14]">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Skills />
        <WhyMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

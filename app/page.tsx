import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="antialiased relative overflow-x-hidden bg-background text-foreground font-sans min-h-screen">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

      {/* Background Blob Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Navbar />
        <Hero />
        <About />

        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-20"></div>

        {/* Featured Project Deep Dive */}
        <FeaturedProject />

        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-20"></div>

        {/* Carousel for other projects */}
        <ProjectsCarousel />
        <Skills />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}

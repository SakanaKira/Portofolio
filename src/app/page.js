import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";
import Projects from "@/components/layout/project";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

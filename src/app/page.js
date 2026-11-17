  import About from "@/components/layout/about";
import Contact from "@/components/layout/contact";
import Projects from "@/components/layout/project";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

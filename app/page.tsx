import TerminalLayout from "@/layouts/TerminalLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <TerminalLayout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </TerminalLayout>
  );
}

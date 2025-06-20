
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

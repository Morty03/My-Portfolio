import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SkillsAndProjects from "@/components/SkillsAndProjects"; // ✅ new combined layout
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-visible bg-[#f5f5dc]">
      <Hero />
      <About />
      <Education />
      
      <SkillsAndProjects /> 
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;

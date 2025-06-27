import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import SkillsAndProjects from "@/components/SkillsAndProjects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="overflow-visible relative scroll-smooth">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <div className="bg-white text-stone-900">
        <About />
        <Education />
        <SkillsAndProjects />
        <Certifications />
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;

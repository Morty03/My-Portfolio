import React from "react";

import Hero from "@/components/Hero";              // 🌀 Has Silk (purple)
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SkillsAndProjects from "@/components/SkillsAndProjects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";       // 🌀 Has same Silk (purple)

const Index = () => {
  return (
    <div className="overflow-visible">
      {/* 🟣 Hero with Silk */}
      <Hero />

      {/* 🤍 Middle plain sections */}
      <div className="bg-white text-stone-900">
        <About />
        <Education />
        <Experience />
        <SkillsAndProjects />
        <Certifications />
      </div>

      {/* 🟣 Contact with same Silk as Hero */}
      <Contact />
    </div>
  );
};

export default Index;

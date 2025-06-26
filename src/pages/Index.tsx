import React from "react";
import GooeyNav from "@/components/GooeyNav";

import Hero from "@/components/Hero";              // 🌀 Has Silk (purple)
import About from "@/components/About";
import Education from "@/components/Education";

import SkillsAndProjects from "@/components/SkillsAndProjects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";       // 🌀 Has same Silk (purple)

const Index = () => {
  return (
    <div className="overflow-visible relative">
      {/* 🔮 Gooey Navigation Bar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <GooeyNav
          items={[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Education", href: "#education" },
            { label: "Projects", href: "#projects" },
            { label: "Certifications", href: "#certs" },
            { label: "Contact", href: "#contact" },
          ]}
        />
      </div>

      {/* 🟣 Hero with Silk */}
      <section id="hero">
        <Hero />
      </section>

      {/* 🤍 Middle plain sections */}
      <div className="bg-white text-stone-900">
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <SkillsAndProjects />
        </section>
        <section id="certs">
          <Certifications />
        </section>
      </div>

      {/* 🟣 Contact with Silk */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;

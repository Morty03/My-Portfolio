import Projects from "./Projects";
import Skills from "./Skills";

export default function SkillsAndProjects() {
  return (
    <section className="flex flex-col md:flex-row justify-between px-6 py-12 bg-[#f5f5dc]">

      <div className="w-full md:w-1/2 md:pr-4">
        <Projects />
      </div>

      <div className="w-full md:w-1/2 md:pl-4 mt-8 md:mt-0">
        <Skills />
      </div>
    </section>
  );
}

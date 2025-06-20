
import { Code2, Database, Globe, Key } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React & TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      description: "Crafting elegant user interfaces with modern frameworks"
    },
    {
      title: "Backend Engineering", 
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      description: "Building robust and scalable server architectures"
    },
    {
      title: "Development Tools",
      icon: Code2, 
      skills: ["Git & GitHub", "Docker", "AWS", "CI/CD"],
      description: "Streamlined workflows and professional deployment"
    },
    {
      title: "Core Principles",
      icon: Key,
      skills: ["Clean Architecture", "Test-Driven Development", "Performance Optimization", "Security Best Practices"],
      description: "Fundamental practices that ensure lasting quality"
    }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Expertise
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of skills, refined through years of dedicated practice 
              and continuous learning in the art of software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 hover:border-amber-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-stone-100 rounded-sm group-hover:bg-amber-50 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-stone-600 group-hover:text-amber-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-sm text-stone-700 py-2 px-3 bg-stone-50 rounded-sm hover:bg-amber-50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { Code2, Database, Globe, Key, Award, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["TypeScript", "JavaScript", "Python", "Java", "C++", "Go"],
    "Frontend Technologies": ["React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "SASS"],
    "Backend Technologies": ["Node.js", "Express", "Django", "Spring Boot", "FastAPI", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Elasticsearch"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    "Tools & Methodologies": ["Git", "Jenkins", "Agile/Scrum", "TDD", "CI/CD", "Microservices"]
  };

  const softSkills = [
    { name: "Leadership", icon: Users },
    { name: "Problem Solving", icon: Key },
    { name: "Communication", icon: Globe },
    { name: "Project Management", icon: Award }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Technical Expertise
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-stone-800 mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-lg border border-stone-200">
                  <h4 className="text-lg font-serif text-stone-800 mb-4 border-b border-stone-200 pb-2">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        <span className="text-stone-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-serif text-stone-800 mb-8 text-center">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-lg border border-stone-200 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <skill.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-serif text-stone-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { Code2, Database, Globe, Languages } from "lucide-react";

const Skills = () => {
  const skillCategories = {
    "Computer Languages:": ["Python", "Java", "C", "HTML", "CSS", "Kotlin", "Java Script"],
    "Software & Frameworks:": ["GIT", "Android Studio", "Firebase", "Robotic Process Automation", "React-Native", "API","Tensorflow"],
    "Course Work:": ["Software Engineering" ,"Data Structures","Database Management",  "Full Stack Development", "Internet Of Things", "Natural Language processing"," Machine Learning & AI","Cloud and DevOps" ],
    "Languages:": ["English", "Tamil", "Telugu", "Hindi", "Kannada"]
  };

  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              SKILLS
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-lg border border-stone-200">
                <h3 className="text-lg font-serif text-stone-800 mb-4 border-b border-stone-200 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-stone-100 text-stone-700 rounded-sm text-sm"
                    >
                      {skill}
                    </span>
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

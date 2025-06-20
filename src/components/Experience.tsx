
const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Goldman Sachs",
      location: "New York, NY",
      period: "2022 - Present",
      achievements: [
        "Led development of high-frequency trading platform processing $2B+ daily transactions",
        "Architected microservices infrastructure reducing system latency by 40%",
        "Mentored team of 5 junior developers and established coding standards",
        "Implemented automated testing framework increasing code coverage to 95%"
      ]
    },
    {
      title: "Software Engineer",
      company: "J.P. Morgan Chase",
      location: "New York, NY", 
      period: "2019 - 2022",
      achievements: [
        "Developed risk management dashboard serving 500+ internal users",
        "Optimized database queries resulting in 60% performance improvement",
        "Collaborated with cross-functional teams to deliver 12 major features",
        "Maintained legacy systems while transitioning to modern tech stack"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Morgan Stanley", 
      location: "New York, NY",
      period: "2018 - 2019",
      achievements: [
        "Built client-facing portfolio management tools using React and Node.js",
        "Participated in agile development process with 2-week sprint cycles",
        "Contributed to open-source internal libraries used across organization",
        "Completed comprehensive financial technology training program"
      ]
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Professional Experience
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-amber-600 pl-8 relative">
                <div className="absolute w-3 h-3 bg-amber-600 rounded-full -left-2 top-2"></div>
                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-stone-600 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-stone-500">
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-stone-800 font-medium text-lg">{exp.period}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-stone-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

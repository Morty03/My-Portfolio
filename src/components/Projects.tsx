const Projects = () => {
  const projects = [
    {
      title: "Agentic AI Explainable Cybersecurity System",
      category: "AI + Cybersecurity",
      period: "Present",
      description:
        "Developed a multi-agent AI cybersecurity system to detect anomalous network activity. Implemented risk scoring and explainable reasoning using LLMs with automated incident report generation. Designed an event-driven architecture enabling autonomous threat monitoring."
    },
    {
      title: "Generative Satellite Vision (GenUrban)",
      category: "AI + Geospatial Intelligence",
      period: "2025",
      description:
        "Built a generative AI framework to simulate future urban growth using satellite imagery and climate datasets. Integrated Earth Observation data with generative models to predict urban morphology scenarios and developed an interactive dashboard for climate-resilient urban planning simulations."
    },
    {
      title: "DevTools PWA Toolkit",
      category: "Web Engineering",
      period: "2025",
      description:
        "Developed a Progressive Web App for inspecting service workers, browser storage systems, and offline capabilities. Designed modular developer tools with a modern UI to debug and analyze browser-based applications."
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              PROJECTS
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-amber-600 pl-8 relative">
                <div className="absolute w-3 h-3 bg-amber-600 rounded-full -left-2 top-2"></div>

                <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg overflow-visible">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-amber-600 font-medium italic mb-1">
                        {project.category}
                      </p>
                    </div>

                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-stone-800 font-medium">
                        {project.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-stone-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
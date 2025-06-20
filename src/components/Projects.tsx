
const Projects = () => {
  const projects = [
    {
      title: "Heritage Banking Platform",
      category: "FinTech Application",
      description: "A sophisticated banking interface combining traditional elegance with modern functionality. Built with React and Node.js, featuring real-time transactions and premium user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      year: "2024"
    },
    {
      title: "Estate Management System",
      category: "Enterprise Software",
      description: "Comprehensive property management solution for luxury real estate portfolios. Features sophisticated analytics and client relationship management.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      year: "2023"
    },
    {
      title: "Classical Library Archive",
      category: "Digital Preservation",
      description: "Digital cataloging system for rare books and manuscripts, featuring advanced search capabilities and preservation metadata management.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Elasticsearch", "Azure"],
      year: "2023"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Selected Works
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              A carefully curated portfolio showcasing projects that embody 
              the perfect marriage of classical design principles and modern technology.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-amber-600 mb-2">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-3xl font-serif text-stone-800 mb-4">
                      {project.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-stone-300"></div>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs uppercase tracking-wider px-3 py-1 bg-stone-200 text-stone-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="group inline-flex items-center text-stone-800 hover:text-amber-600 transition-colors duration-300 font-medium">
                    <span className="mr-2">View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative bg-white p-4 rounded-sm shadow-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-sm filter sepia-[0.1] contrast-105"
                    />
                    <div className="absolute inset-4 bg-gradient-to-t from-stone-900/10 to-transparent rounded-sm"></div>
                  </div>
                  
                  {/* Decorative border */}
                  <div className="absolute -inset-2 border border-amber-600/10 rounded-sm -z-10"></div>
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

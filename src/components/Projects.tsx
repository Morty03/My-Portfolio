
const Projects = () => {
  const projects = [
    {
      title: "Generative Satellite Vision for Simulating Future Urban Morphology",
      category: "AI + Climate Tech",
      period: "August 2025 - Ongoing",
      description: "Developing a generative AI-driven framework using GANs and diffusion models to simulate urban morphology under climate stress.Integrated satellite imagery, GIS datasets, and climate projections into an interactive web dashboard for planners and policymakers."
    },
    {
      title: "Face-Based Security System",
      category: "Digital Image Processing", 
      period: "Jan 2025 - May 2025",
      description: "Developed a Face-Based Security System (FBSS) utilizing advanced facial recognition for enhanced, contactless security and user convenience. Implemented a robust biometric framework using Haar Cascade/AdaBoost for real-time face detection and LBPH for recognition, with liveness detection to prevent spoofing."
    },
    {
      title: "SMART DUSTBIN",
      category: "Internet Of Things",
      period: "August 2024 - November 2024", 
      description: "Developed an IoT Smart Dustbin for automated waste segregation, resident verification, and real-time fill-level monitoring with municipal alerts. Leveraged Arduino Uno, Python (with OpenCV), and moisture/ultrasonic sensors for waste classification, facial recognition, and fill-level monitoring, enhancing urban waste management."
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
                      <div className="text-stone-800 font-medium">{project.period}</div>
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

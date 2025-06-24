
const Certifications = () => {
  const certifications = [
    {
      name: "Android App Development",
      category: "Imarticus Learning",
      period: "June 2024 - July 2024"
    },
    {
      name: "Robotic Process Automation",
      category: "Automation anywhere university", 
      period: "June 2024 - July 2024"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              CERTIFICATIONS
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-lg font-serif text-stone-800 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-amber-600 font-medium italic">
                      {cert.category}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-stone-600 font-medium">{cert.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

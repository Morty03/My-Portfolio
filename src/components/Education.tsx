
const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      year: "2018",
      gpa: "3.9/4.0",
      honors: "Magna Cum Laude"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA", 
      year: "2016",
      gpa: "3.8/4.0",
      honors: "Summa Cum Laude"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Education
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-amber-600 pl-8 relative">
                <div className="absolute w-3 h-3 bg-amber-600 rounded-full -left-2 top-2"></div>
                <div className="bg-stone-50 p-6 rounded-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-serif text-stone-800 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-stone-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-stone-500 text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-stone-800 font-medium">{edu.year}</div>
                      <div className="text-stone-600 text-sm">GPA: {edu.gpa}</div>
                      <div className="text-amber-600 text-sm italic">{edu.honors}</div>
                    </div>
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

export default Education;

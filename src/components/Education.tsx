
const Education = () => {
  const education = [
    {
      degree: "M Tech Integrated Software Engineering",
      institution: "Vellore Institute of Technology, Vellore",
      location: "Vellore, India",
      period: "September 2021 - Present",
      gpa: "Overall GPA: 8.95/10"
    },
    {
      degree: "Class 12 (CBSE)",
      institution: "Sunbeam CBSE School, Katpadi",
      location: "Katpadi, India",
      period: "May 2021",
      gpa: "Total Percentage: 79%"
    },
    {
      degree: "Class 10 (SSC)",
      institution: "RK Model School, Chittoor",
      location: "Chittoor, India",
      period: "April 2019",
      gpa: "CGPA: 10.0/10"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              EDUCATION
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
                      <div className="text-stone-800 font-medium">{edu.period}</div>
                      <div className="text-amber-600 text-sm italic">{edu.gpa}</div>
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

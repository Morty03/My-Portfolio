
const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-PSA-2023-001",
      status: "Active"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023", 
      credentialId: "GCP-PD-2023-045",
      status: "Active"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
      credentialId: "CKA-2022-789",
      status: "Active"
    },
    {
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "AZ-204-2022-156",
      status: "Active"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Certifications
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-serif text-stone-800 leading-tight">
                    {cert.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <p className="text-stone-600 font-medium mb-2">
                  {cert.issuer}
                </p>
                
                <div className="flex justify-between items-center text-sm text-stone-500">
                  <span>Issued: {cert.year}</span>
                  <span className="font-mono text-xs">ID: {cert.credentialId}</span>
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


const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Professional Summary
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg text-stone-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg">
              Accomplished Software Engineer with 8+ years of experience in developing sophisticated 
              web applications and enterprise solutions. Expertise in modern JavaScript frameworks, 
              cloud architecture, and agile development methodologies. Proven track record of delivering 
              high-quality software solutions for Fortune 500 companies and innovative startups.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6 bg-white rounded-sm shadow-lg">
              <div className="text-3xl font-serif text-stone-800 mb-2">8+</div>
              <div className="text-sm uppercase tracking-widest text-stone-600">Years Experience</div>
            </div>
            <div className="p-6 bg-white rounded-sm shadow-lg">
              <div className="text-3xl font-serif text-stone-800 mb-2">50+</div>
              <div className="text-sm uppercase tracking-widest text-stone-600">Projects Delivered</div>
            </div>
            <div className="p-6 bg-white rounded-sm shadow-lg">
              <div className="text-3xl font-serif text-stone-800 mb-2">12</div>
              <div className="text-sm uppercase tracking-widest text-stone-600">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


const About = () => {
  return (
    <section id="about" className="bg-[#f5f5dc] ...">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mt-10">
              GOUTHAM K
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 mb-2">
              Chittoor, Andhra Pradesh, 517002, India
            </p>
            <p className="text-lg text-stone-600">
              (+91) 9346765417 ◦ skgoutham1344@gmail.com
            </p>
          </div>
          
          <div className="prose prose-lg text-stone-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg">
              Software Engineering student with expertise in modern programming languages and frameworks. 
              Currently pursuing M.Tech in Integrated Software Engineering with practical project experience in full-stack development, automation, and IoT solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

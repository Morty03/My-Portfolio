
const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
                  About
                </h2>
                <div className="w-16 h-0.5 bg-amber-600"></div>
              </div>
              
              <div className="prose prose-lg text-stone-600 leading-relaxed space-y-6">
                <p className="text-lg">
                  With a foundation built on classical principles and modern innovation, 
                  I craft digital experiences that stand the test of time. My approach 
                  combines the precision of traditional craftsmanship with cutting-edge technology.
                </p>
                
                <p>
                  Educated at prestigious institutions and refined through years of 
                  meticulous practice, I specialize in creating sophisticated software 
                  solutions that embody both functionality and elegance.
                </p>
                
                <p>
                  When I'm not coding, you'll find me studying classical architecture, 
                  collecting vintage timepieces, or exploring the intersection of 
                  traditional design and modern technology.
                </p>
              </div>
              
              <div className="flex space-x-8 text-sm text-stone-500 uppercase tracking-widest">
                <div>
                  <div className="text-2xl font-serif text-stone-800 mb-1">8+</div>
                  <div>Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-stone-800 mb-1">50+</div>
                  <div>Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-stone-800 mb-1">12</div>
                  <div>Technologies Mastered</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-stone-200 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=700&fit=crop&crop=face"
                  alt="Professional portrait"
                  className="w-full h-96 object-cover filter sepia-[0.2] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-amber-600/20 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

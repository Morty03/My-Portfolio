
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            <span className="font-serif">Alexander</span>
            <br />
            <span className="font-serif italic text-amber-200">Sterling</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-amber-200 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl font-light tracking-wider text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Software Engineer & Digital Craftsman
            <br />
            <span className="text-lg text-stone-400 italic">Building elegant solutions with timeless precision</span>
          </p>
          
          <button 
            onClick={scrollToAbout}
            className="group inline-flex items-center text-amber-200 hover:text-amber-100 transition-all duration-300 font-light tracking-widest"
          >
            <span className="mr-2 text-sm uppercase">Discover More</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-200 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;

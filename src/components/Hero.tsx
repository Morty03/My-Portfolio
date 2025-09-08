import Silk from "@/components/Silks";
import BlurText from "@/components/BlurText";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate h-screen overflow-hidden text-stone-100 flex items-center justify-center">
      {/* 🌀 Silk Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Silk
          speed={5}
          scale={1}
          color="#7B74B1"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Content */}
      <div className="text-center px-6 max-w-3xl">
        <BlurText
          text="I'm Goutham"
          className="text-6xl md:text-8xl font-light mb-6 tracking-wide font-serif"
          animateBy="letters"
          direction="top"
          delay={50}
          stepDuration={0.35}
          easing={(t) => t}
        />

        <div className="w-24 h-0.5 bg-amber-200 mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl font-light text-stone-300 mb-12">
          Software Engineering Student<br />
          <span className="text-lg text-stone-400 italic">
            I write code that works hard and looks good doing it.
          </span>
        </p>

        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center text-amber-200 hover:text-amber-100 transition-all duration-300 font-light tracking-widest"
          aria-label="Scroll to About section"
        >
          <span className="mr-2 text-sm uppercase">Discover More</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;

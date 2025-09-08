import ScrollFloat from "@/components/ScrollFloat";

const About = () => {
  return (
    <section id="about" className="bg-indigo-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            {/* Name (Keep default serif font) */}
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom-=10%"
              scrollEnd="center center"
              stagger={0.05}
              containerClassName="mt-10"
              textClassName="text-5xl md:text-6xl font-serif text-stone-800"
            >
              GOUTHAM K
            </ScrollFloat>

            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>

            {/* Location and contact (Use Passion One font) */}
            <ScrollFloat
              animationDuration={1.2}
              ease="power2.out"
              scrollStart="top bottom"
              scrollEnd="center center"
              stagger={0.02}
              textClassName="text-lg text-stone-600 font-passion"
            >
              Chittoor, Andhra Pradesh, 517002, India
            </ScrollFloat>

            <ScrollFloat
              animationDuration={1.2}
              ease="power2.out"
              scrollStart="top bottom"
              scrollEnd="center center"
              stagger={0.02}
              textClassName="text-lg text-stone-600 font-passion"
            >
              (+91) 9346765417 ◦ skgoutham1344@gmail.com
            </ScrollFloat>
          </div>

          {/* Paragraph in Passion One */}
          <div className="prose prose-lg text-stone-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            <ScrollFloat
              animationDuration={1.5}
              ease="expo.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              stagger={0.01}
              textClassName="text-lg font-passion"
            >
              Software Engineering student with expertise in modern programming languages and frameworks. Currently pursuing M.Tech in Integrated Software Engineering with practical project experience in full-stack development, automation, and IoT solutions.
            </ScrollFloat>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

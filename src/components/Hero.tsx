import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(logoRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(taglineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Nightlife Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <img 
          ref={logoRef}
          src="/image.png" 
          alt="Seamora Entertainment" 
          className="w-72 sm:w-96 h-auto mx-auto mb-8"
        />
        
        <h1 
          ref={taglineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat tracking-tight"
        >
          Entertainment. Events. Experiences.
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat font-light"
        >
          Elevating entertainment, one experience at a time
        </p>
        
        <div className="mt-12 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-montserrat">
            Book Event
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 font-montserrat">
            View Artists
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
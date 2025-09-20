import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Calendar, Users, Music, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(featuresRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const features = [
    {
      icon: Users,
      title: "Artist Management",
      description: "Professional representation and career development for emerging and established talent.",
      link: "/services"
    },
    {
      icon: Music,
      title: "DJ Nights",
      description: "Curated nightlife experiences with world-class DJs and premium production.",
      link: "/events"
    },
    {
      icon: Calendar,
      title: "Social Media",
      description: "Comprehensive digital strategy and content creation for creative professionals.",
      link: "/services"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat font-light mb-12"
          >
            Elevating entertainment, one experience at a time
          </p>
          
          <div className="space-x-4">
            <Link 
              to="/events"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-montserrat"
            >
              View Events
            </Link>
            <Link 
              to="/artists"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 font-montserrat"
            >
              Meet Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-montserrat">
              From artist management to unforgettable events, we create experiences that resonate
            </p>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-800 hover:border-purple-500"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 font-montserrat leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
            Ready to Elevate Your Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-montserrat">
            Let's create something unforgettable together
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-montserrat text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Music, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Artist Management",
      icon: Users,
      description: "Professional artist representation, career development, and strategic booking management for emerging and established talent.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Career Development", "Booking Management", "Brand Building", "Industry Connections"]
    },
    {
      id: 2,
      title: "DJ Nights",
      icon: Music,
      description: "Curated nightlife experiences featuring world-class DJs, premium sound systems, and unforgettable atmospheres.",
      image: "https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Premium Sound", "World-Class DJs", "Event Production", "Venue Partnerships"]
    },
    {
      id: 3,
      title: "Social Media for Creators",
      icon: Share2,
      description: "Comprehensive digital strategy, content creation, and audience growth solutions for creative professionals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Content Strategy", "Audience Growth", "Brand Partnerships", "Analytics & Insights"]
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(servicesRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 font-montserrat"
        >
          Our Services
        </h2>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 p-3 bg-purple-600 rounded-full">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 font-montserrat leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 font-montserrat">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Music, Share2, Star, CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Artist Management",
      icon: Users,
      description: "Professional artist representation, career development, and strategic booking management for emerging and established talent.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Career Development", "Booking Management", "Brand Building", "Industry Connections", "Contract Negotiation", "Tour Planning"],
      price: "Custom Pricing",
      popular: false
    },
    {
      id: 2,
      title: "DJ Nights",
      icon: Music,
      description: "Curated nightlife experiences featuring world-class DJs, premium sound systems, and unforgettable atmospheres.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Premium Sound Systems", "World-Class DJs", "Event Production", "Venue Partnerships", "Lighting Design", "VIP Experiences"],
      price: "From $5,000",
      popular: true
    },
    {
      id: 3,
      title: "Social Media for Creators",
      icon: Share2,
      description: "Comprehensive digital strategy, content creation, and audience growth solutions for creative professionals.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Content Strategy", "Audience Growth", "Brand Partnerships", "Analytics & Insights", "Influencer Collaborations", "Campaign Management"],
      price: "From $2,500/month",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and unique requirements."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our team develops a customized plan tailored to your specific needs."
    },
    {
      step: "03",
      title: "Execution",
      description: "We bring your vision to life with precision and attention to detail."
    },
    {
      step: "04",
      title: "Success",
      description: "Ongoing support and optimization to ensure lasting success."
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
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
        delay: 0.3
      }
    );

    gsap.fromTo(processRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-7xl font-bold text-white mb-6 font-montserrat"
          >
            Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat">
            Comprehensive solutions for artists, events, and digital presence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <div 
                key={service.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 border ${
                  service.popular 
                    ? 'bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500' 
                    : 'bg-black/50 border-gray-800 hover:border-purple-500'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    POPULAR
                  </div>
                )}
                
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
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 font-montserrat ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-montserrat">
              From concept to execution, we ensure every detail is perfect
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-montserrat">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-montserrat">
            Let's discuss how we can help elevate your entertainment experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-montserrat">
              Schedule Consultation
            </button>
            <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 font-montserrat flex items-center justify-center">
              View Portfolio
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
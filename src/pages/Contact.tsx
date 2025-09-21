import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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

    gsap.fromTo([formRef.current, infoRef.current],
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
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-7xl font-bold text-white mb-6 font-montserrat"
          >
            Contact
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat">
            Ready to create something extraordinary? Let's start the conversation
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
                Start Your Project
              </h2>
              <p className="text-gray-300 mb-8 font-montserrat">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="artist-management">Artist Management</option>
                      <option value="dj-nights">DJ Nights</option>
                      <option value="social-media">Social Media</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and how we can help..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 font-montserrat transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div ref={infoRef} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 font-montserrat leading-relaxed">
                  Whether you're an artist looking for representation, planning an event, or need digital marketing support, we're here to help bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <p className="text-white font-medium text-lg">hello@seamora.com</p>
                      <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <p className="text-white font-medium text-lg">+91 98765 43210</p>
                      <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white font-medium text-lg">Pune, Maharashtra</p>
                      <p className="text-gray-400 text-sm">Available worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                      <p className="text-white font-medium">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-white font-medium">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-400 text-sm">Emergency support available 24/7 IST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-4 font-montserrat">
                  Follow Our Journey
                </h4>
                <p className="text-gray-300 mb-6 font-montserrat">
                  Stay updated with our latest events, artist spotlights, and industry insights.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
                  >
                    <Instagram className="text-gray-300 group-hover:text-white" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
                  >
                    <Facebook className="text-gray-300 group-hover:text-white" size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
                  >
                    <Twitter className="text-gray-300 group-hover:text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I book an artist for my event?",
                answer: "Simply fill out our contact form with your event details, or call us directly. We'll match you with the perfect artist based on your venue, audience, and budget."
              },
              {
                question: "What's included in your artist management services?",
                answer: "Our comprehensive management includes career development, booking coordination, brand building, contract negotiation, and ongoing support to help artists reach their full potential."
              },
              {
                question: "Do you work with venues outside of Los Angeles?",
                answer: "Absolutely! While we're based in Pune, we work with artists and venues across Maharashtra and India. Travel and accommodation costs may apply for out-of-city events."
              },
              {
                question: "How far in advance should I book an event?",
                answer: "We recommend booking at least 4-6 weeks in advance for optimal artist availability. However, we can often accommodate shorter notice requests depending on the artist's schedule."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3 font-montserrat">
                  {faq.question}
                </h3>
                <p className="text-gray-300 font-montserrat">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
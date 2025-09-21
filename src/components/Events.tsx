import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: "Electric Nights",
      date: "March 15, 2025",
      location: "The Underground, Koregaon Park",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An electrifying night of house and techno beats",
      attendees: "500+"
    },
    {
      id: 2,
      title: "Rooftop Sessions",
      date: "March 22, 2025",
      location: "Sky Lounge, Viman Nagar",
      image: "https://images.unsplash.com/photo-1571949334156-fee1b2f63e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sunset vibes with the city's hottest DJs",
      attendees: "300+"
    },
    {
      id: 3,
      title: "Bass Drop Friday",
      date: "March 29, 2025",
      location: "Metro Club, Baner",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Heavy bass, intense drops, unforgettable night",
      attendees: "800+"
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

    gsap.fromTo(eventsRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventsRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 font-montserrat"
        >
          Upcoming Events
        </h2>
        
        <div 
          ref={eventsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <div 
              key={event.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 font-montserrat">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300 font-montserrat">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
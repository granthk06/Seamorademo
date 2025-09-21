import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Users, Clock, Ticket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Electric Nights",
      date: "March 15, 2025",
      time: "10:00 PM",
      location: "The Underground",
      venue: "Koregaon Park",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An electrifying night of house and techno beats with internationally acclaimed DJs",
      attendees: "500+",
      price: "$45",
      featured: true
    },
    {
      id: 2,
      title: "Rooftop Sessions",
      date: "March 22, 2025",
      time: "8:00 PM",
      location: "Sky Lounge",
      venue: "Viman Nagar",
      image: "https://images.unsplash.com/photo-1571949334156-fee1b2f63e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sunset vibes with the city's hottest DJs and panoramic city views",
      attendees: "300+",
      price: "$65"
    },
    {
      id: 3,
      title: "Bass Drop Friday",
      date: "March 29, 2025",
      time: "11:00 PM",
      location: "Metro Club",
      venue: "Baner",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Heavy bass, intense drops, and an unforgettable night of electronic music",
      attendees: "800+",
      price: "$35"
    },
    {
      id: 4,
      title: "Midnight Groove",
      date: "April 5, 2025",
      time: "12:00 AM",
      location: "Neon Palace",
      venue: "Kalyani Nagar",
      image: "https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Deep house and progressive beats in an intimate underground setting",
      attendees: "400+",
      price: "$50"
    },
    {
      id: 5,
      title: "Summer Kickoff",
      date: "April 12, 2025",
      time: "9:00 PM",
      location: "Beachside Arena",
      venue: "Hinjewadi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Outdoor festival vibes with multiple stages and top-tier artists",
      attendees: "1000+",
      price: "$75"
    },
    {
      id: 6,
      title: "Intimate Acoustics",
      date: "April 19, 2025",
      time: "7:30 PM",
      location: "The Loft",
      venue: "Wakad",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Stripped-down performances in a cozy, artistic atmosphere",
      attendees: "150+",
      price: "$40"
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

    gsap.fromTo(upcomingRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
      }
    );

    gsap.fromTo(eventsRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventsRef.current,
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
            src="https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Events Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-7xl font-bold text-white mb-6 font-montserrat"
          >
            Events
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat">
            Immersive experiences that bring music and community together
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 font-montserrat text-center">
            Featured Event
          </h2>
          
          <div 
            ref={upcomingRef}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-purple-500/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={upcomingEvents[0].image}
                  alt={upcomingEvents[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  FEATURED
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-4 font-montserrat">
                  {upcomingEvents[0].title}
                </h3>
                
                <p className="text-gray-300 mb-6 font-montserrat text-lg leading-relaxed">
                  {upcomingEvents[0].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-3 text-purple-400" size={20} />
                    <div>
                      <p className="font-semibold">{upcomingEvents[0].date}</p>
                      <p className="text-sm">{upcomingEvents[0].time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <MapPin className="mr-3 text-purple-400" size={20} />
                    <div>
                      <p className="font-semibold">{upcomingEvents[0].location}</p>
                      <p className="text-sm">{upcomingEvents[0].venue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Users className="mr-3 text-purple-400" size={20} />
                    <span>{upcomingEvents[0].attendees} Expected</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Ticket className="mr-3 text-purple-400" size={20} />
                    <span>From {upcomingEvents[0].price}</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-montserrat text-lg">
                  Get Tickets Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16 font-montserrat">
            Upcoming Events
          </h2>
          
          <div 
            ref={eventsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {upcomingEvents.slice(1).map((event) => (
              <div 
                key={event.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 border border-gray-800 hover:border-purple-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 font-montserrat">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}, {event.venue}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={16} className="mr-2" />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 font-montserrat">
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Star, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Artists = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);

  const artists = [
    {
      id: 1,
      name: "DJ Neon",
      genre: "Electronic / House",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Master of electronic beats and crowd energy",
      rating: 5,
      events: "50+ Events"
    },
    {
      id: 2,
      name: "Luna Vibes",
      genre: "Deep House / Techno",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Creating atmospheric soundscapes for unforgettable nights",
      rating: 5,
      events: "75+ Events"
    },
    {
      id: 3,
      name: "Bass King",
      genre: "Dubstep / EDM",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Heavy drops and intense bass that moves crowds",
      rating: 5,
      events: "100+ Events"
    },
    {
      id: 4,
      name: "Rhythm Queen",
      genre: "Hip-Hop / R&B",
      image: "https://images.unsplash.com/photo-1571949334156-fee1b2f63e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Bringing the hottest hip-hop and R&B vibes",
      rating: 5,
      events: "60+ Events"
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

    gsap.fromTo(artistsRef.current?.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: artistsRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="artists" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 font-montserrat"
        >
          Featured Artists
        </h2>
        
        <div 
          ref={artistsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full">
                  {[...Array(artist.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1 font-montserrat">
                  {artist.name}
                </h3>
                <p className="text-purple-400 text-sm mb-2 font-semibold">
                  {artist.genre}
                </p>
                <p className="text-gray-300 text-sm mb-4 font-montserrat">
                  {artist.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Music size={16} />
                    <span>{artist.genre.split(' / ')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{artist.events}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 font-montserrat">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
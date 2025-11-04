import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Star, Calendar, Play, Instagram, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Artists = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);

  const featuredArtist = {
    id: 1,
    name: "DJ Seaborn",
    genre: "Electronic / House",
    image: "/image copy copy.png",
    description: "Master of electronic beats and crowd energy, DJ Seaborn has been setting dance floors ablaze across the globe for over a decade. Known for seamless mixing and reading the crowd's energy.",
    rating: 5,
    events: "50+ Events",
    followers: "125K",
    nextShow: "Electric Nights - March 15",
    bio: "With residencies at top clubs worldwide and festival appearances at major festivals, DJ Seaborn brings unmatched energy to every performance with his signature style."
  };

  const artists = [
    {
      id: 2,
      name: "Luna Vibes",
      genre: "Deep House / Techno",
      image: "https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Creating atmospheric soundscapes for unforgettable nights",
      rating: 5,
      events: "75+ Events",
      followers: "89K"
    },
    {
      id: 3,
      name: "Bass King",
      genre: "Dubstep / EDM",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Heavy drops and intense bass that moves crowds",
      rating: 5,
      events: "100+ Events",
      followers: "156K"
    },
    {
      id: 4,
      name: "Rhythm Queen",
      genre: "Hip-Hop / R&B",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Bringing the hottest hip-hop and R&B vibes",
      rating: 5,
      events: "60+ Events",
      followers: "92K"
    },
    {
      id: 5,
      name: "Sonic Wave",
      genre: "Progressive House",
      image: "https://images.unsplash.com/photo-1571266028243-0c55f7d68ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Progressive journeys through sound and emotion",
      rating: 5,
      events: "85+ Events",
      followers: "78K"
    },
    {
      id: 6,
      name: "Electric Soul",
      genre: "Future Bass / Trap",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Blending electronic elements with soulful melodies",
      rating: 5,
      events: "45+ Events",
      followers: "67K"
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

    gsap.fromTo(featuredRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.3
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
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Artists Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-7xl font-bold text-white mb-6 font-montserrat"
          >
            Artists
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat">
            Meet the talented artists who bring our events to life
          </p>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 font-montserrat text-center">
            Featured Artist
          </h2>
          
          <div 
            ref={featuredRef}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-purple-500/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={featuredArtist.image}
                  alt={featuredArtist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-6 right-6 flex items-center space-x-1 bg-black/50 px-3 py-2 rounded-full">
                  {[...Array(featuredArtist.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  FEATURED
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-2 font-montserrat">
                  {featuredArtist.name}
                </h3>
                
                <p className="text-purple-400 text-lg font-semibold mb-4">
                  {featuredArtist.genre}
                </p>
                
                <p className="text-gray-300 mb-4 font-montserrat leading-relaxed">
                  {featuredArtist.description}
                </p>
                
                <p className="text-gray-300 mb-6 font-montserrat text-sm leading-relaxed">
                  {featuredArtist.bio}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-black/30 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">{featuredArtist.followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                  <div className="text-center bg-black/30 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">{featuredArtist.events}</p>
                    <p className="text-gray-400 text-sm">Events</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300 mb-6">
                  <Calendar className="mr-3 text-purple-400" size={20} />
                  <span>Next Show: {featuredArtist.nextShow}</span>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 font-montserrat">
                    Book Now
                  </button>
                  <button className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300">
                    <Play className="text-white" size={20} />
                  </button>
                  <button className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300">
                    <Instagram className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16 font-montserrat">
            Our Roster
          </h2>
          
          <div 
            ref={artistsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artists.map((artist) => (
              <div 
                key={artist.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 border border-gray-800 hover:border-purple-500"
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
                  
                  {/* Social Icons */}
                  <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-black/50 rounded-full hover:bg-purple-600 transition-colors duration-300">
                      <Play className="text-white" size={16} />
                    </button>
                    <button className="p-2 bg-black/50 rounded-full hover:bg-purple-600 transition-colors duration-300">
                      <Instagram className="text-white" size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
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
                  
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold text-white">{artist.followers}</p>
                    <p className="text-gray-400 text-xs">Followers</p>
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
    </div>
  );
};

export default Artists;
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link to="/">
            <img 
              src="/image.png" 
              alt="Seamora Entertainment" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: 'Artists', path: '/artists' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-montserrat"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
            >
              <Instagram className="text-gray-400 group-hover:text-white" size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
            >
              <Facebook className="text-gray-400 group-hover:text-white" size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
            >
              <Twitter className="text-gray-400 group-hover:text-white" size={20} />
            </a>
            <a 
              href="mailto:hello@seamora.com" 
              className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
            >
              <Mail className="text-gray-400 group-hover:text-white" size={20} />
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gray-800"></div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 font-montserrat">
            <p className="flex items-center justify-center space-x-1">
              <span>© 2025 Seamora Entertainment. Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for the music community.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
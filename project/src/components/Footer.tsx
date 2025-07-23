import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, GraduationCap, Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const usefulLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Technology Clubs', path: '/clubs' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="relative bg-black/90 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-gradient-to-r from-gold-500 to-amber-600 p-3 rounded-xl shadow-2xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-gold-400 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  FOCUS
                </span>
                <div className="text-sm text-blue-200 -mt-1">CSE Governance</div>
              </div>
            </div>
            
            <p className="text-blue-200 leading-relaxed text-lg">
              FOCUS is a platform for university CSE students to address grievances and promote academic growth. 
              It aims to empower students with skills necessary for the evolving global tech landscape, 
              fostering teamwork and knowledge exchange.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group text-blue-200 hover:text-gold-400 transition-all duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors">
                  focus@kluniversity.in
                </span>
              </div>
              
              <div className="text-blue-200 leading-relaxed">
                KL University, Vijayawada, 522302, India
              </div>
            </div>
            
            <div className="flex space-x-4 pt-6">
              <a
                href="#"
                className="group bg-gradient-to-r from-pink-500 to-rose-600 w-12 h-12 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="#"
                className="group bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-blue-300 flex items-center justify-center">
            © 2024 FOCUS - CSE Student Governance Body. Made with 
            <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse" />
            for innovation and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
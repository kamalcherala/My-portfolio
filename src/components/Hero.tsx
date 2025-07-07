import React, { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github, Phone } from 'lucide-react';
import myPhoto from '../assets/profile-pic.png'; // adjust the path as needed
import myResume from '../assets/My resume.pdf'; // adjust the path as needed
const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Tech Enthusiast", 
    "AI Developer",
    "Undergraduate Student"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <>
<section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
  {/* ✅ Background Animation */}
  <div className="absolute inset-0 opacity-50">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
  </div>

  {/* ✅ Content Wrapper */}
  <div className="container mx-auto px-6 py-20 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* 👤 Profile Image (No Glow) */}
      <div className="relative">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            <img 
              src={myPhoto}
              alt="Cherala Sai Kamal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* 🔴 Removed glowing pulse effect div */}
      </div>

      {/* ✍️ Text Content */}
      <div className="text-center lg:text-left lg:max-w-xl">
        <p className="text-gray-300 text-lg mb-4 animate-fade-in">Hello, I'm</p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          CHERALA SAI KAMAL
        </h1>

        <div className="h-20 flex items-center justify-center lg:justify-start mb-8">
          <p className="text-2xl md:text-3xl text-blue-400 font-semibold transition-all duration-500 animate-fade-in-up">
            {roles[currentRole]}
          </p>
        </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href={myResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                  download
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  onClick={handleContactClick}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Contact Info
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/cheralasaikamal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://github.com/kamalcherala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              onClick={handleCloseContact}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <Phone size={20} className="text-blue-400" />
                <a href="tel:+91 8008599269" className="text-white hover:text-blue-400 transition-colors">
                  +91 8008599269
                </a>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:skml.ch500@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  skml.ch500@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <Linkedin size={20} className="text-blue-400" />
                <a 
                  href="https://www.linkedin.com/in/cheralasaikamal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                <Github size={20} className="text-blue-400" />
                <a 
                  href="https://github.com/kamalcherala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
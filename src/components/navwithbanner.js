
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, Award, Globe, Shield } from 'lucide-react';

const NavbarWithBanner = () => {
  const videoRef = useRef(null);
  const [textPhase, setTextPhase] = useState(0);
  const [showCompanyName, setShowCompanyName] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    // Animation sequence for text phases
    const initialTimeout = setTimeout(() => {
      setShowCompanyName(false);
      setTimeout(() => setTextPhase(1), 500);
    }, 4000);

    // Text rotation interval
    const textInterval = setInterval(() => {
      setTextPhase(prev => {
        if (prev >= 3) {
          // Reset to company name
          setShowCompanyName(true);
          setTimeout(() => setShowCompanyName(false), 4000);
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
      clearTimeout(initialTimeout);
      clearInterval(textInterval);
    };
  }, []);

  // Text content for different phases
  const textContent = [
    { // Phase 0
      headline: "Delivering Reliable, Full Supply Chain Solutions for Over 30 Years",
      mainText: [
        "CREATE NEW REVENUE",
        "STREAMS, MAINTAIN",
        "QUALITY CONTROL &",
        "REDUCE COSTS"
      ],
      icon: <Award className="w-12 h-12 text-cyan-400 mb-6" />
    },
    { // Phase 1
      headline: "Expertise in Steel Manufacturing & Industrial Solutions",
      mainText: [
        "INNOVATIVE",
        "ENGINEERING",
        "SOLUTIONS &",
        "PREMIUM QUALITY"
      ],
      icon: <Shield className="w-12 h-12 text-cyan-400 mb-6" />
    },
    { // Phase 2
      headline: "Global Reach with Local Expertise",
      mainText: [
        "PAN INDIA",
        "PRESENCE WITH",
        "INTERNATIONAL",
        "CAPABILITIES"
      ],
      icon: <Globe className="w-12 h-12 text-cyan-400 mb-6" />
    },
    { // Phase 3
      headline: "28+ Years of Engineering Excellence",
      mainText: [
        "CERTIFIED",
        "RELIABLE",
        "INNOVATIVE &",
        "COST-EFFECTIVE"
      ],
      icon: <Award className="w-12 h-12 text-cyan-400 mb-6" />
    }
  ];

  return (
    <div className="relative">
      {/* Enhanced Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 via-black/50 to-transparent">
        {/* Logo section on the left */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-white text-2xl">F</span>
            </div>
            <span className="text-white text-xl font-bold tracking-wide hidden md:block">FeNex</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
        
        {/* Navigation links - desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="#" className="text-white font-medium tracking-wider px-2 py-1 inline-block border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="gallary" className="text-white font-medium tracking-wider px-2 py-1 inline-block border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="products" className="text-white font-medium tracking-wider px-2 py-1 inline-block border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium tracking-wider px-2 py-1 inline-block border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="contact" className="text-white font-medium tracking-wider px-2 py-1 inline-block border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
              Contact
            </a>
          </li>
        </ul>
        
        {/* Contact button */}
        <div className="hidden md:block">
          <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Mobile menu - slide out */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-black/95 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMenuOpen(false)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-white font-medium text-lg flex items-center">
                <span>Home</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-lg flex items-center">
                <span>About</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-lg flex items-center">
                <span>Services</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-lg flex items-center">
                <span>Portfolio</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium text-lg flex items-center">
                <span>Contact</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </li>
          </ul>
          <div className="mt-12">
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-full py-3 rounded-lg font-medium flex justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Hero Banner with Video Background */}
      <div className="relative bg-black text-white overflow-hidden min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            src="/video/cover.mp4"          
            autoPlay 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            Your browser does not support the video tag.
          </video>

          {/* Enhanced gradient overlay */}
          
          {/* Additional visual elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Content container */}
        <div className="container mx-auto px-6 relative z-20 h-screen flex flex-col justify-center">
          {/* Company Name (initially visible in the middle) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${showCompanyName ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Animated logo/icon */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 animate-pulse">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FeNex</span> Engineering
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 text-center mt-4 max-w-2xl">
              Innovative Steel Solutions & Industrial Equipment Experts
            </h2>
            
            {/* Animated down arrow */}
            <div className="absolute bottom-16 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Regular content (slides in after company name) */}
          <div className={`transition-opacity duration-1000 ${showCompanyName ? 'opacity-0' : 'opacity-100'}`}>
            {/* Icon */}
            {textContent[textPhase].icon}
            
            {/* Headline */}
            <div className="border-l-4 border-cyan-400 pl-4 mb-12">
              <h1 className="text-3xl md:text-4xl font-light max-w-3xl transition-all duration-500 transform ease-in-out">
                {textContent[textPhase].headline}
              </h1>
            </div>
            
            {/* Main value proposition */}
            <div className="mb-16">
              {textContent[textPhase].mainText.map((line, index) => (
                <h2 
                  key={index} 
                  className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 transform ${index === 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500' : 'text-white'}`}
                >
                  {line}
                </h2>
              ))}
            </div>
            
            {/* Enhanced call to action */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center">
                <span>Learn More</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              
              {/* Certifications */}
              <p className="text-xl text-gray-300 flex items-center">
                <Award className="w-5 h-5 mr-2 text-cyan-400" />
                <span>MSME & ISO 9001:2015 Certified</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithBanner;
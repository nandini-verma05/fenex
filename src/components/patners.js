'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Partners = () => {
  // Partners data
  const partners = [
    { id: 1, name: 'Tata Steel', logo: '/partners/tata-steel.png' },
    { id: 2, name: 'ArcelorMittal', logo: '/partners/arcelormittal.png' },
    { id: 3, name: 'Jindal Steel', logo: '/partners/jindal.png' },
    { id: 4, name: 'SAIL', logo: '/partners/sail.png' },
    { id: 5, name: 'Nippon Steel', logo: '/partners/nippon.png' },
    { id: 6, name: 'Essar Steel', logo: '/partners/essar.png' },
    { id: 7, name: 'JSW Steel', logo: '/partners/jsw.png' },
    { id: 8, name: 'Posco', logo: '/partners/posco.png' },
  ];

  // Work showcase data
  const workShowcase = [
    {
      id: 1,
      title: 'Rolling Mill Installation',
      location: 'Mumbai, India',
      image: '/work/rolling-mill.jpg',
      description: 'Complete setup of a state-of-the-art rolling mill with capacity of 1.2M tons/year',
    },
    {
      id: 2,
      title: 'Furnace Modernization',
      location: 'Chennai, India',
      image: '/work/furnace.jpg',
      description: 'Upgrading existing furnace facilities with energy-efficient technologies',
    },
    {
      id: 3,
      title: 'Continuous Casting Machine',
      location: 'Jamshedpur, India',
      image: '/work/casting.jpg',
      description: 'Installation of high-speed continuous casting machine for specialty steel grades',
    },
    {
      id: 4,
      title: 'Fume Extraction System',
      location: 'Pune, India',
      image: '/work/fume-extraction.jpg',
      description: 'Environmental compliance upgrade with advanced fume extraction technology',
    },
    {
      id: 5,
      title: 'Steel Plant Automation',
      location: 'Delhi, India',
      image: '/work/automation.jpg',
      description: 'Full automation system implementation reducing manual interventions by 80%',
    },
  ];

  // State for work carousel
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);

  // Carousel navigation
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentWorkIndex((prevIndex) => (prevIndex + 1) % workShowcase.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentWorkIndex((prevIndex) =>
      prevIndex === 0 ? workShowcase.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Autoplay for work carousel
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentWorkIndex]);

  return (
    <div className="bg-gray-50">
      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver exceptional steel plant solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center h-40"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Carousel Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Browse through our latest projects and steel plant implementations
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentWorkIndex * 100}%)` }}
              >
                {workShowcase.map((work) => (
                  <div key={work.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
                        <p className="text-blue-400 text-lg mb-6">{work.location}</p>
                        <p className="text-gray-300 text-lg leading-relaxed">{work.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full z-10 shadow-lg transition-all duration-300"
              disabled={isAnimating}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full z-10 shadow-lg transition-all duration-300"
              disabled={isAnimating}
            >
              <ChevronRight size={28} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {workShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentWorkIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentWorkIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
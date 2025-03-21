'use client';
import { useRef, useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const industries = [
  { 
    title: "Steel Rolling Mills", 
    image: "/api/placeholder/600/400", 
    description: "Advanced manufacturing of high-quality steel products" 
  },
  { 
    title: "Rebar Rolling Mills", 
    image: "/api/placeholder/600/400", 
    description: "Precision engineering for construction reinforcement" 
  },
  { 
    title: "TMT Bar Rolling Mills", 
    image: "/api/placeholder/600/400", 
    description: "Cutting-edge technology for superior strength" 
  },
  { 
    title: "Wire Rod Rolling Mills", 
    image: "/api/placeholder/600/400", 
    description: "Innovative solutions for wire production" 
  },
  { 
    title: "Section Rolling Mills", 
    image: "/api/placeholder/600/400", 
    description: "Specialized mills for structural steel sections" 
  },
  { 
    title: "Electrical Induction Furnace (SMS) Plants", 
    image: "/api/placeholder/600/400", 
    description: "Advanced metallurgical processing technologies" 
  },
  { 
    title: "Continuous Casting Machines (CCM)", 
    image: "/api/placeholder/600/400", 
    description: "Efficient metal casting and shaping solutions" 
  },
  { 
    title: "Oxygen Plants", 
    image: "/api/placeholder/600/400", 
    description: "High-capacity industrial oxygen production" 
  },
  { 
    title: "Steel Pipe, Tube, and Hollow Section Plants", 
    image: "/api/placeholder/600/400", 
    description: "Comprehensive tube manufacturing capabilities" 
  }
];

const ExpertiseSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        // Calculate the current active index based on scroll position
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.querySelector('div > div')?.clientWidth || 250;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);

        // Update scroll capabilities
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(
          scrollLeft + scrollRef.current.clientWidth <
            scrollRef.current.scrollWidth - 10
        );
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize state
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Section Title */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4 tracking-tight">
            Our Business Verticals
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Innovative solutions across multiple industrial domains, delivering cutting-edge technologies and precision engineering.
          </p>
        </div>
      </div>

      {/* Scrollable Cards Section */}
      <div className="relative overflow-hidden py-12">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 
            bg-white shadow-xl border border-gray-200 text-gray-800 
            p-3 rounded-full hover:bg-gray-100 transition-all duration-300 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll scroll-smooth px-4 no-scrollbar"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative min-w-[300px] h-[450px] rounded-2xl overflow-hidden 
              shadow-lg transform transition-all duration-300 
              ${activeIndex === index 
                ? 'scale-105 border-4 border-blue-500' 
                : 'scale-100 hover:scale-[1.03]'}`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                <p className="text-sm opacity-80">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 
            bg-white shadow-xl border border-gray-200 text-gray-800 
            p-3 rounded-full hover:bg-gray-100 transition-all duration-300 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 pb-8">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                const cardWidth = scrollRef.current.querySelector('div > div')?.clientWidth || 300;
                scrollRef.current.scrollTo({ 
                  left: index * cardWidth, 
                  behavior: 'smooth' 
                });
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
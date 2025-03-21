'use client';

import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Award, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export default function AboutUs() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error("Error attempting to autoplay video:", error);
      });
    }
  }, []);

  const companyInfo = {
    name: "FeNex Engineering",
    tagline: "Innovative Steel Solutions and Industrial Equipment Experts",
    description: "Leading provider of steel plant solutions, spare parts, and industrial equipment manufacturing with cutting-edge engineering services",
    foundedYear: 2010,
    founder: "Sanjay Kumar Choudhary"
  };

  const keyHighlights = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Certified Excellence",
      description: "MSME & ISO 9001:2015 Certified, ensuring highest quality standards"
    },
    {
      icon: <Globe className="w-10 h-10 text-green-600" />,
      title: "Global Reach",
      description: "Pan Indian presence with international solution capabilities"
    },
    {
      icon: <Target className="w-10 h-10 text-purple-600" />,
      title: "Specialized Solutions",
      description: "Expert in steel plant spare parts and industrial equipment"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-orange-600" />,
      title: "Proven Expertise",
      description: "28+ years of advanced engineering and consulting experience"
    }
  ];

  const specializations = [
    "Steel Plant Spare Parts Supply",
    "Industrial Equipment Manufacturing",
    "Rolling Mill Solutions",
    "Precision Engineering Services"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{companyInfo.name} - {companyInfo.tagline}</title>
        <meta name="description" content={companyInfo.description} />
        <meta name="keywords" content="steel engineering, industrial equipment, spare parts, rolling mills, manufacturing solutions" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {companyInfo.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {companyInfo.tagline}
          </p>
        </section>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Company Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/image/aboutsection.jpg" 
              alt={`${companyInfo.name} Facility`}
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Key Strengths
            </h2>
            {keyHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
                  transition-all duration-300 flex items-center space-x-6"
              >
                <div>{highlight.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <section className="mb-16">
          <div className="w-full h-[300px]  overflow-hidden ">
            <video 
              ref={videoRef}
              src="/video/cover.mp4"
              autoPlay 
              muted 
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Detailed Company Story */}
        <section className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-4">
            Our Journey
          </h2>

          <div className="space-y-6 text-gray-800">
            <p className="leading-relaxed whitespace-pre-line">
              FeNex Engineering: Revolutionizing the Steel Industry
              Founded in 2010 by Sanjay Kumar Choudhary, FeNex Engineering was born from a vision to transform steel industry solutions through innovation and cost-effective engineering services.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Core Specializations
              </h3>
              <ul className="space-y-2">
                {specializations.map((spec, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-gray-700"
                  >
                    <ArrowRight className="mr-3 text-blue-600" size={20} />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-600 py-4">
              "Engineering excellence is not just our profession, it's our passion."
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
}
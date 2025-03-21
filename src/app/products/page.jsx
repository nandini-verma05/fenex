'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Settings, PenTool as Tool, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('industrial');

  // Product categories with their equipment
  const productCategories = {
    industrial: {
      icon: <Settings className="h-6 w-6" />,
      title: "Industrial Equipment",
      description: "Heavy-duty machinery designed for steel plants and industrial manufacturing",
      equipment: [
        {
          id: "ind-1",
          name: "Rolling Mill",
          image: "/products/industrial/rolling-mill.jpg",
          categories: ["Steel Processing", "Manufacturing"]
        },
        {
          id: "ind-2",
          name: "Induction Furnace",
          image: "/products/industrial/induction-furnace.jpg",
          categories: ["Melting", "Foundry"]
        },
        {
          id: "ind-3",
          name: "Heat Treatment Oven",
          image: "/products/industrial/heat-treatment.jpg",
          categories: ["Heat Processing", "Manufacturing"]
        },
        {
          id: "ind-4",
          name: "Hydraulic Press",
          image: "/products/industrial/hydraulic-press.jpg",
          categories: ["Metal Forming", "Manufacturing"]
        },
        {
          id: "ind-5",
          name: "Industrial Crane",
          image: "/products/industrial/crane.jpg",
          categories: ["Material Handling", "Factory Equipment"]
        },
        {
          id: "ind-6",
          name: "Casting Machine",
          image: "/products/industrial/casting.jpg",
          categories: ["Metal Casting", "Foundry"]
        }
      ]
    },
    hardware: {
      icon: <Tool className="h-6 w-6" />,
      title: "General Hardware",
      description: "Essential hardware components and tools for steel plant operations",
      equipment: [
        {
          id: "hw-1",
          name: "High-Strength Bolts",
          image: "/products/hardware/bolts.jpg",
          categories: ["Fasteners", "Structural"]
        },
        {
          id: "hw-2",
          name: "Industrial Valves",
          image: "/products/hardware/valves.jpg",
          categories: ["Flow Control", "Piping"]
        },
        {
          id: "hw-3",
          name: "Steel Flanges",
          image: "/products/hardware/flanges.jpg",
          categories: ["Piping", "Connections"]
        },
        {
          id: "hw-4",
          name: "Hydraulic Fittings",
          image: "/products/hardware/hydraulic-fittings.jpg",
          categories: ["Hydraulics", "Connections"]
        },
        {
          id: "hw-5",
          name: "Heat-Resistant Gaskets",
          image: "/products/hardware/gaskets.jpg",
          categories: ["Sealing", "High Temperature"]
        },
        {
          id: "hw-6",
          name: "Industrial Chains",
          image: "/products/hardware/chains.jpg",
          categories: ["Power Transmission", "Material Handling"]
        }
      ]
    },
    electrical: {
      icon: <Zap className="h-6 w-6" />,
      title: "Electrical Equipment",
      description: "Power systems and electrical components for industrial applications",
      equipment: [
        {
          id: "el-1",
          name: "VFD Drives",
          image: "/products/electrical/vfd.jpg",
          categories: ["Motor Control", "Automation"]
        },
        {
          id: "el-2",
          name: "Industrial Switchgear",
          image: "/products/electrical/switchgear.jpg",
          categories: ["Power Distribution", "Safety"]
        },
        {
          id: "el-3",
          name: "Control Panels",
          image: "/products/electrical/control-panel.jpg",
          categories: ["Automation", "Control Systems"]
        },
        {
          id: "el-4",
          name: "High Voltage Transformers",
          image: "/products/electrical/transformer.jpg",
          categories: ["Power", "Electrical"]
        },
        {
          id: "el-5",
          name: "Industrial Motors",
          image: "/products/electrical/motors.jpg",
          categories: ["Power Equipment", "Mechanical"]
        },
        {
          id: "el-6",
          name: "PLC Systems",
          image: "/products/electrical/plc.jpg",
          categories: ["Automation", "Control Systems"]
        }
      ]
    }
  };

  // Filter for viewing equipment by category (can be expanded)
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEquipment = (equipment) => {
    if (activeFilter === 'All') return equipment;
    return equipment.filter(item =>
      item.categories.some(cat => cat.toLowerCase() === activeFilter.toLowerCase())
    );
  };

  // Function to get unique categories across all products of a given type
  const getUniqueCategories = (equipmentArray) => {
    const categories = new Set();
    categories.add('All');

    equipmentArray.forEach(item => {
      item.categories.forEach(cat => categories.add(cat));
    });

    return Array.from(categories);
  };

  // Custom tab rendering function
  const renderTabContent = (key) => {
    return (
      <div className="mb-8" key={key}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center bg-darkblue-700 text-blue-200 p-3 rounded-full mb-4">
            {productCategories[key].icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{productCategories[key].title}</h3>
          <p className="text-gray-400 mt-2">{productCategories[key].description}</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {getUniqueCategories(productCategories[key].equipment).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEquipment(productCategories[key].equipment).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">{item.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Products</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive range of equipment and components for steel plants and industrial applications,
            designed for reliability, efficiency, and performance.
          </p>
        </div>

        {/* Custom Tabs implementation */}
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-lg flex">
              {Object.keys(productCategories).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center px-6 py-3 rounded transition-colors ${selectedCategory === key
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {key === 'industrial' && <Settings className="mr-2 h-5 w-5" />}
                  {key === 'hardware' && <Tool className="mr-2 h-5 w-5" />}
                  {key === 'electrical' && <Zap className="mr-2 h-5 w-5" />}
                  {key === 'industrial' && 'Industrial Equipment'}
                  {key === 'hardware' && 'General Hardware'}
                  {key === 'electrical' && 'Electrical Equipment'}
                </button>
              ))}
            </div>
          </div>

          {/* Render only the active tab content */}
          {renderTabContent(selectedCategory)}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution or can't find what you're looking for?</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

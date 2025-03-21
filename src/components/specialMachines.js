
  
// const InfoSections = () => {
//     const sections = [
//       {
//         title: "CNC Turning Center",
//         description:
//           "OSPAS is the result of many years’ collaboration between our in-house experts and technology partners. It spans our entire oil, gas and NGL networks, refining and distribution system, through to our terminal network, providing extreme agility in the face of demand fluctuations and evolving market conditions.",
//         image: "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3703a00193d9c502d/view?project=6790c07f0018598d5209&mode=admin",
//       },
//       {
//         title: "CNC Milling Machine",
//         description:
//           "The reliable delivery of energy is essential to businesses and consumers worldwide. Through OSPAS, we ensure seamless operations that keep the supply chain moving efficiently.",
//         image: "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36acb00279efe37d0/view?project=6790c07f0018598d5209&mode=admin",
//       },
//     ];
  
//     return (
//       <div className="bg-white py-12">
//         <div className="space-y-12 p-6 container mx-auto">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 ${
//                 index % 2 !== 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Text Content */}
//               <div className="md:w-1/2 text-center md:text-left">
//                 <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
//                 <p className="text-gray-600 mt-4">{section.description}</p>
//               </div>
  
//               {/* Image Section */}
//               <div className="md:w-1/2">
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="rounded-2xl shadow-lg w-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default InfoSections;

"use client";
import { useState } from "react";
import Image from "next/image";

const SpecialMachines = () => {
  const sections = [
    {
      title: "CNC Turning Center",
      shortDescription:
        "OSPAS is the result of many years’ collaboration between our in-house experts and technology partners...",
      fullDescription:
        "OSPAS is the result of many years’ collaboration between our in-house experts and technology partners. It spans our entire oil, gas, and NGL networks, refining and distribution system, through to our terminal network, providing extreme agility in the face of demand fluctuations and evolving market conditions.",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3703a00193d9c502d/view?project=6790c07f0018598d5209&mode=admin",
    },
    {
      title: "CNC Milling Machine",
      shortDescription: "The reliable delivery of energy is essential to businesses and consumers worldwide...",
      fullDescription:
        "The reliable delivery of energy is essential to businesses and consumers worldwide. Through OSPAS, we ensure seamless operations that keep the supply chain moving efficiently and handle disruptions proactively.",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36acb00279efe37d0/view?project=6790c07f0018598d5209&mode=admin",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-12">
      <div className="space-y-12 p-6 container mx-auto">
        {sections.map((section, index) => (
          <ExpandableCard key={index} section={section} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

const ExpandableCard = ({ section, reverse }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 ${reverse ? "md:flex-row-reverse" : ""}`}>
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
        <p className="text-gray-600 mt-4">
          {expanded ? section.fullDescription : section.shortDescription}{" "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 font-medium hover:underline focus:outline-none"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <Image src={section.image} alt={section.title} className="rounded-2xl shadow-lg w-full object-cover" />
      </div>
    </div>
  );
};

export default SpecialMachines;
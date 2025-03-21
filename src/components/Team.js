"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, Briefcase, Info, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "MR. MOHAMMAD HASHIM KHAN",
    role: "Mananging consultant",
    image: "",
    experience: "35 Years",
    companies: ["SAUDI IRON & STEEL CO.", "EMIRATES STEEL INDUSTRIES", "QATAR STEEL CO."],
    description:
      "Worked 35 Years' experience in Steel Plant & Rolling mill of SAUDI IRON & STEEL CO. (HADEED) (Saudi Arabia). EMIRATES STEEL INDUSTRIES (UAE), QATAR STEEL CO. (Qatar), UNICA IRON CO. (South Africa), MTPL-SANGAM INDIA LTD. (Wardha), RAMA POWER & STEEL (Raipur) Expertise in steel plant & Process, Wire & Bar Hot Rolling Mill operation Specialization in BAR SLITTING ROLLING MILL.",
  },
  {
    name: "MR. SANJAY KU. CHOUDHARY",
    role: "Technical expert Consultant",
    image: "",
    experience: "25 Years",
    companies: ["FeNex Engineering", "Various EPC Projects"],
    description:
      "Worked experience 25 Years' & Engaged in Consultancy-Technology & Engineering, Design, Mechanics, Automation & Electrical, A take single point responsibility & EPC / Trunkey basis for managing all elements of project execution Viz.: Basic & details engineering, material procurement, Plant construction, Erection & startup. Commissioning & post commissioning services in the area of SMS, CCM, Bar & Rods rolling Mill, Section Rolling Mill & Tube Mill",
  },
  {
    name: "MR. Y.N. SINGH",
    role: "Chief Technical Consultant",
    image: "",
    experience: "47 Years",
    companies: ["SAIL", "Usha Martin", "Jindal Steel & Power Ltd"],
    description:
      "MIE (India) with 47 Years' experience in leading steel industries in Bhilai Steel Plant (SAIL), Usha Martin Jamshedpur, Usha Ispat-Lucknow and Goa, Jindal Steel & Power Ltd. In miltipal disciplines of projects (Rolling Mill, Steel Melting Furnace. Billet Caster plant) operation, Marketing. In addition have been fully conversant in preparing Techno Economic feasibility report, Costing of project of steel making & Rolling mill, Its viability. Roll Pass design of round section, TMT Rebar. Widely travelled in overseas on various occasions for business purpose of the companies and retired from Jindal Steel & Power Ltd",
  },
  {
    name: "MR. RAJINDER NATH",
    role: "Advisor Consultant",
    image: "",
    experience: "45 Years",
    companies: ["SAIL", "INSDAG", "UNDP"],
    description:
      "Worked experience 45 Years' as Head of Human Resource Development Executive Director, SAIL Consultancy Division, Consultant to Institute for Steel Development and Growth (INSDAG), UNDP/GEF project (Steel) Delhi productivity council (DPC), National corporation, Technical Services center.",
  },
  {
    name: "MR. AKHTAR KHAN",
    role: "Marketing Consultant",
    image: "",
    experience: "36 Years",
    companies: ["SAUDI IRON & STEEL", "KUWAIT STEEL"],
    description:
      "Worked 36 Years' experience in Steel Plant & Rolling mill of SAUDI IRON & STEEL COMPANY (HADEED) (Saudi Arabia), KUWAIT STEEL (KUWAIT), Expertization in Steel Rolling mill operation from Raw material to Finished Long Products and Logistic, Import & Export, Marketing.",
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)

  const openModal = (member) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <>
      <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h2
            className="text-4xl font-extrabold mb-12 text-gray-800 
            relative after:content-[''] after:absolute after:bottom-[-10px] 
            after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-20 after:h-1 after:bg-blue-500"
          >
            Our Expert Consultants
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="relative group aspect-square flex flex-col">
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden 
          transition-all duration-300 
          hover:shadow-2xl hover:scale-105 transform
          border-2 border-transparent hover:border-blue-500
          flex flex-col flex-grow"
                  >
                    {/* Background Gradient */}
                    <div
                      className="absolute top-0 left-0 w-full h-full 
            bg-gradient-to-br from-blue-50 to-white 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 z-0"
                    ></div>

                    {/* Image Container */}
                    <div className="relative pt-8 pb-4 px-6 z-10">
                      <div
                        className="absolute inset-0 
              bg-gradient-to-b from-transparent to-blue-100/20 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300"
                      ></div>
                      <Image
                        src={null}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4 
                border-4 border-white shadow-lg 
                group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Member Details */}
                    <div className="px-6 pb-6 relative z-10 text-center">
                      <h3
                        className="text-xl font-bold text-gray-800 mb-1 
              group-hover:text-blue-700 transition-colors"
                      >
                        {member.name}
                      </h3>
                      <p className="text-gray-500 mb-2">{member.role}</p>

                      {/* Experience and Companies */}
                      <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Award size={20} className="mr-2 text-blue-500" />
                          <span className="text-sm">{member.experience}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase size={20} className="mr-2 text-green-500" />
                          <span className="text-sm">{member.companies.length} Companies</span>
                        </div>
                      </div>

                      {/* Info Button */}
                      <button
                        onClick={() => openModal(member)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full 
                hover:bg-blue-600 transition-colors flex items-center mx-auto"
                      >
                        <Info size={18} className="mr-2" /> View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center gap-8">
              {teamMembers.slice(3, 5).map((member, index) => (
                <div
                  key={index}
                  className="relative group aspect-square flex flex-col w-full sm:w-[calc(33.333%-1rem)]"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden 
          transition-all duration-300 
          hover:shadow-2xl hover:scale-105 transform
          border-2 border-transparent hover:border-blue-500
          flex flex-col flex-grow"
                  >
                    {/* Background Gradient */}
                    <div
                      className="absolute top-0 left-0 w-full h-full 
            bg-gradient-to-br from-blue-50 to-white 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 z-0"
                    ></div>

                    {/* Image Container */}
                    <div className="relative pt-8 pb-4 px-6 z-10">
                      <div
                        className="absolute inset-0 
              bg-gradient-to-b from-transparent to-blue-100/20 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300"
                      ></div>
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4 
                border-4 border-white shadow-lg 
                group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Member Details */}
                    <div className="px-6 pb-6 relative z-10 text-center">
                      <h3
                        className="text-xl font-bold text-gray-800 mb-1 
              group-hover:text-blue-700 transition-colors"
                      >
                        {member.name}
                      </h3>
                      <p className="text-gray-500 mb-2">{member.role}</p>

                      {/* Experience and Companies */}
                      <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Award size={20} className="mr-2 text-blue-500" />
                          <span className="text-sm">{member.experience}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase size={20} className="mr-2 text-green-500" />
                          <span className="text-sm">{member.companies.length} Companies</span>
                        </div>
                      </div>

                      {/* Info Button */}
                      <button
                        onClick={() => openModal(member)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full 
                hover:bg-blue-600 transition-colors flex items-center mx-auto"
                      >
                        <Info size={18} className="mr-2" /> View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto 
              shadow-2xl relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 
                bg-gray-100 rounded-full p-2"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Image Column */}
              <div className="col-span-1 flex flex-col items-center">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  width={250}
                  height={250}
                  className="rounded-full border-8 border-blue-100 shadow-lg"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{selectedMember.name}</h2>
                <p className="text-gray-500 mb-4">{selectedMember.role}</p>

                {/* Quick Stats */}
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center">
                    <Globe size={24} className="mr-2 text-green-500" />
                    <span className="text-sm">{selectedMember.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={24} className="mr-2 text-blue-500" />
                    <span className="text-sm">{selectedMember.companies.length} Companies</span>
                  </div>
                </div>
              </div>

              {/* Description Column */}
              <div className="col-span-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Professional Profile</h3>
                <p className="text-gray-700 leading-relaxed">{selectedMember.description}</p>

                {/* Companies Worked */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Companies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.companies.map((company, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


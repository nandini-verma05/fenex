'use client';
import { PackageOpen, BadgeCheck, Briefcase, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

export default function WhyUs() {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-background"
      style={{ backgroundImage: 'url(/image/rollingmill.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
       {/* Reduced opacity from 0.70 to 0.55 for less contrast */}
       <div className="absolute inset-0 bg-black opacity-55 z-0"></div>

<div className="relative container mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            WHY CHOOSE FENEX ENGINEERING FOR STEEL PLANT MACHINES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a leading provider of steel plant equipment and machinery, FeNex Engineering delivers innovative
            solutions designed to enhance your production efficiency, safety, and overall performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <PackageOpen className="h-8 w-8 mb-4 text-black" />,
              title: <h3 className="text-black">Wide Range of Products</h3>,
              description: (
                <p className="text-black">
                  FeNex Engineering offers an extensive selection of equipment, machinery, and spare parts for steel plants, making it a one-stop solution for all your requirements. From induction furnace components to fume extraction systems and laboratory testing equipment, we have you covered.
                </p>
              ),
            },
            {
              icon: <BadgeCheck className="h-8 w-8 mb-4 text-black" />,
              title: <h3 className="text-black">Quality and Precision</h3>,
              description: (
                <p className="text-black">
                  Our products are known for their precision and reliability. We understand the critical role that equipment plays in steel production, and we are committed to delivering high-quality, durable, and efficient solutions that contribute to improved efficiency and performance.
                </p>
              ),
            },
            {
              icon: <Briefcase className="h-8 w-8 mb-4 text-black" />,
              title: <h3 className="text-black">Expertise and Experience</h3>,
              description: (
                <p className="text-black">
                  With years of experience in the steel industry, FeNex Engineering has gained valuable insights into the unique challenges and requirements of steel plants. Our expertise allows us to provide tailored solutions and recommendations to meet your specific needs.
                </p>
              ),
            },
            {
              icon: <ShieldCheck className="h-8 w-8 mb-4 text-black" />,
              title: <h3 className="text-black">Safety and Compliance</h3>,
              description: (
                <p className="text-black">
                  Safety is a top priority in any steel plant. FeNex Engineering offers equipment and systems designed to enhance employee safety, such as our industrial fume extraction systems. We ensure that our products comply with industry standards and regulations.
                </p>
              ),
            },
            {
              icon: <Handshake className="h-8 w-8 mb-4 text-black" />,
              title: <h3 className="text-black">Reliable Partner</h3>,
              description: (
                <p className="text-black">
                  FeNex Engineering is a trusted partner for steel plants worldwide. We are dedicated to building long-term relationships with our clients by providing exceptional service, support, and solutions that drive success.
                </p>
              )
            },
          ].map((card, index) => (
            <div
              key={index}
              className="border-l-4 border-l-black p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {card.icon}
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-base text-muted-foreground">{card.description}</p>
            </div>
          ))}

          <div className="bg-primary/5 border-none shadow-none p-6 rounded-lg flex flex-col justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">Ready to optimize your steel plant operations?</p>
              {/* Improved button UI with gradient, better padding, and smoother hover effect */}
              <button className="bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:translate-y-px font-medium">
                Contact Us Today
                <ArrowRight className="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Products & Solutions" },
              { value: "200+", label: "Steel Plants Served" },
              { value: "15+", label: "Years of Experience" },
              { value: "24/7", label: "Technical Support" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
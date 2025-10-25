import React from 'react';
import generalDentistry from "./assets/General Dentistry.svg";
import cosmeticDentistry from "./assets/Cosmetic & Aesthetic Dentistry.svg";
import advancedCare from "./assets/Advanced Dental Care.svg";
import preventiveCare from "./assets/Preventive & Maintenance Care.svg";

export default function DentalServices() {
  const services = [
    {
      icon: generalDentistry,
      title: "General Dentistry",
      items: [
        "Dental Fillings & Restorations",
        "Tooth Extractions",
        "Root Canal Treatment",
        "Scaling & Oral Prophylaxis"
      ]
    },
    {
      icon: cosmeticDentistry,
      title: "Cosmetic & Aesthetic Dentistry",
      items: [
        "Dental Crowns & Veneers",
        "Teeth Whitening",
        "Smile Correction & Alignment",
        "Dental Implants"
      ]
    },
    {
      icon: advancedCare,
      title: "Advanced Dental Care",
      items: [
        "Orthodontic Treatments (Braces & Aligners)",
        "Laser Gum Treatments",
        "Periodontics (Gum & Bone Care)",
        "Tooth-Specific Minor Surgical Care",
        "Flap Surgery"
      ]
    },
    {
      icon: preventiveCare,
      title: "Preventive & Maintenance Care",
      items: [
        "Routine Dental Check-ups",
        "Oral Hygiene Counselling",
        "Preventive Sealants"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-sans">
            Our Services
          </h1>
          <p className="text-xl text-gray-500 font-sans">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-[#B5E1FF] rounded-[30px] p-8 shadow-sm hover:shadow-sm transition-shadow"
            >
              {/* Icon */}
              <div className=" text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  className="w-14 h-14"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-6 font-sans">
                {service.title}
              </h3>

              {/* Service Items */}
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-sans">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
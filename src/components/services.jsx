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
    <div className="min-h-screen bg-white py-12 sm:py-16 px-4 -mt-19 sm:-mt-24 lg:-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-sans">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-sans px-4">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-[#B5E1FF] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 font-sans">
                {service.title}
              </h3>

              {/* Service Items */}
              <ul className="space-y-2 sm:space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 font-sans">
                    <span className="mr-2 flex-shrink-0 mt-1">•</span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
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
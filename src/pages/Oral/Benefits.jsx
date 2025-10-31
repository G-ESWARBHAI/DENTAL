import React from "react";
import ArrowIcon from "../../components/assets/ORAL/arrow.svg";

export default function Benefits() {
  const benefits = [
    "Removes harmful plaque and tartar",
    "Visibly brightens teeth by removing surface stains",
    "Freshens breath and improves oral hygiene",
    "Prevents gum disease and tooth loss",
    "Boosts the longevity of cosmetic dental work",
    "Quick, non-invasive, and typically pain-free"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-6 md:mb-12 font-bold text-xl md:text-3xl lg:text-[40px]" style={{color: '#0267AC'}}>
          Benefits of Oral Prophylaxis
        </h2>
        
        {/* Benefits Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#0267AC] rounded-2xl p-4 md:p-6 flex items-center hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Arrow Icon */}
              <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-8 ml-2 md:ml-5 lg:ml-7">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  style={{filter: 'brightness(0) invert(1)'}}
                />
              </div>
              
              {/* Text */}
              <p className="text-white text-sm md:text-base lg:text-[22px]" style={{letterSpacing: '0.5px'}}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import React from "react";
import ArrowIcon from "../../components/assets/ORAL/arrow.svg";

export default function WhoShould() {
  const candidates = [
    "Patients who haven't had a dental cleaning in over six months",
    "Individuals experiencing gum bleeding, sensitivity, or bad breath",
    "Patients preparing for cosmetic work such as whitening or veneers",
    "Braces or aligner wearers who struggle with plaque buildup",
    "Health-conscious individuals focused on long-term dental care"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-8">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-4 md:mb-5 lg:mb-8 font-bold text-xl md:text-3xl lg:text-[40px]" style={{color: '#0267AC'}}>
          Who Should Get Scaling & Polishing?
        </h2>
        
        {/* Introductory Text */}
        <p className="text-center mb-6 md:mb-12 text-gray-700 text-lg md:text-2xl lg:text-[34px]">
          This service is ideal for:
        </p>
        
        {/* List */}
        <div className="space-y-4 md:space-y-6 -mt-2">
          {candidates.map((candidate, index) => (
            <div key={index} className="flex items-start ml-0 md:ml-22 lg:ml-44">
              {/* Arrow Icon */}
              <div className="flex-shrink-0 mr-3 md:mr-4 lg:mr-6">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed flex-1 text-sm md:text-base lg:text-[23px]" style={{letterSpacing: '0.5px'}}>
                {candidate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


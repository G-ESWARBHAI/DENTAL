import React from "react";
import UltrasonicScalingIcon from "../../components/assets/ORAL/Ultrasonic Scaling.svg";
import HandScalingIcon from "../../components/assets/ORAL/Hand Scaling.svg";
import AirFlowIcon from "../../components/assets/ORAL/Air-Flow Polishing.svg";
import OptionalFluorideIcon from "../../components/assets/ORAL/Optional Fluoride.svg";

export default function WhatHappens() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-[1105px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-5 md:mb-8 font-bold text-xl md:text-3xl lg:text-[40px]" style={{color: '#0267AC'}}>
          What Happens During the Procedure?
        </h2>
        
        {/* Introductory Paragraph */}
        <p className=" md:text-left mb-6 md:mb-12 text-gray-700 text-sm md:text-lg lg:text-[24px]" style={{letterSpacing: '0.5px',lineHeight: '1.4'}}>
          Our licensed dental hygienists use a combination of modern tools and precision techniques for a comfortable and effective cleaning:
        </p>
        
        {/* Four Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 max-w-[960px] mx-auto">
          {/* Left Card - Ultrasonic Scaling */}
          <div className="flex flex-col items-start rounded-3xl p-6 md:p-8 lg:p-11 w-full h-auto md:w-[452px] md:h-[393px] hover:scale-105 transition-all duration-300 ease-in-out" style={{background: 'linear-gradient(180deg, rgb(199, 216, 228) 0%, rgb(255, 255, 255) 100%)'}}>
            <div className="mb-4 md:mb-7 mt-2 md:mt-4">
              <img 
                src={UltrasonicScalingIcon} 
                alt="Ultrasonic Scaling icon"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-23 lg:h-23"
              />
            </div>
            <h3 className="font-bold mb-2 text-base md:text-xl lg:text-[29px]" style={{color: '#392D44'}}>
              Ultrasonic Scaling
            </h3>
            <p className="leading-relaxed text-sm md:text-base lg:text-[24px]" style={{color: '#392D44',letterSpacing: '0.5px',lineHeight: '1.4'}}>
              High-frequency vibrations are used to dislodge and remove tartar and plaque.
            </p>
          </div>

          {/* Right Card - Hand Scaling */}
          <div className="flex flex-col items-start rounded-3xl p-6 md:p-8 lg:p-11 w-full h-auto md:w-[452px] md:h-[393px] hover:scale-105 transition-all duration-300 ease-in-out" style={{background: 'linear-gradient(180deg, rgb(199, 216, 228) 0%, rgb(255, 255, 255) 100%)'}}>
            <div className="mb-4 md:mb-6 mt-2 md:mt-4">
              <img 
                src={HandScalingIcon} 
                alt="Hand Scaling icon"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-23 lg:h-23"
              />
            </div>
            <h3 className="font-bold mb-2 text-base md:text-xl lg:text-[29px]" style={{color: '#392D44'}}>
              Hand Scaling
            </h3>
            <p className="leading-relaxed text-sm md:text-base lg:text-[24px]" style={{color: '#392D44',letterSpacing: '0.5px',lineHeight: '1.4'}}>
              Manual tools are used for detailed cleaning in hard-to-reach areas.
            </p>
          </div>

          {/* Third Card - Air-Flow Polishing */}
          <div className="flex flex-col items-start rounded-3xl p-6 md:p-8 lg:p-11 w-full h-auto md:w-[452px] md:h-[393px] hover:scale-105 transition-all duration-300 ease-in-out" style={{background: 'linear-gradient(180deg, rgb(199, 216, 228) 0%, rgb(255, 255, 255) 100%)'}}>
            <div className="mb-4 md:mb-7 mt-2 md:mt-4">
              <img 
                src={AirFlowIcon} 
                alt="Air-Flow Polishing icon"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-23 lg:h-23"
              />
            </div>
            <h3 className="font-bold mb-2 text-base md:text-xl lg:text-[29px]" style={{color: '#392D44'}}>
              Air-Flow Polishing
            </h3>
            <p className="leading-relaxed text-sm md:text-base lg:text-[24px]" style={{color: '#392D44',letterSpacing: '0.5px',lineHeight: '1.4'}}>
              A gentle jet of air, water, and fine powder smooths the tooth surface and removes stains.
            </p>
          </div>

          {/* Fourth Card - Optional Fluoride */}
          <div className="flex flex-col items-start rounded-3xl p-6 md:p-8 lg:p-11 w-full h-auto md:w-[452px] md:h-[393px] hover:scale-105 transition-all duration-300 ease-in-out" style={{background: 'linear-gradient(180deg, rgb(199, 216, 228) 0%, rgb(255, 255, 255) 100%)'}}>
            <div className="mb-4 md:mb-6 mt-2 md:mt-4">
              <img 
                src={OptionalFluorideIcon} 
                alt="Optional Fluoride icon"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-23 lg:h-23"
              />
            </div>
            <h3 className="font-bold mb-2 text-base md:text-xl lg:text-[29px]" style={{color: '#392D44'}}>
              Optional Fluoride or Enamel Protection
            </h3>
            <p className="leading-relaxed text-sm md:text-base lg:text-[24px]" style={{color: '#392D44',letterSpacing: '0.5px',lineHeight: '1.4'}}>
              Strengthening treatments may be recommended based on your oral health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


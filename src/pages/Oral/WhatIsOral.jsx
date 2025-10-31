import React from "react";

export default function WhatIsOral() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-3 md:mb-5 font-bold text-xl md:text-3xl lg:text-[40px]" style={{color: '#0267AC'}}>
          What Is Oral Prophylaxis?
        </h2>
        
        {/* Content */}
        <div className="space-y-3 md:space-y-4">
          <p className="text-center md:text-left leading-relaxed text-gray-600 text-sm md:text-lg lg:text-[24px]" style={{lineHeight: '2'}}>
            Oral Prophylaxis commonly known as dental scaling and polishing is a preventive dental procedure that removes hardened plaque (tartar), biofilm, and surface stains from your teeth and along the gum line.
          </p>
          
          <p className="text-center md:text-left leading-relaxed text-gray-600 text-sm md:text-lg lg:text-[24px]" style={{lineHeight: '2'}}>
            At Sasha Luxe Dental, we elevate this essential service into a premium, spa-like experience. Our goal is not only to improve your oral hygiene but to reset your entire smile making it brighter, healthier, and better prepared for cosmetic or restorative treatments.
          </p>
        </div>
      </div>
    </div>
  );
}


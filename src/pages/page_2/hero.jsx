import React from "react";
import { ArrowRight } from "lucide-react";
import bnrSvg from "../../components/assets/Page2/BNR.svg";
import ContentSection from "../../pages/page_2/content";
import CrownOptions from "../../pages/page_2/crown_options";
import Veneer from "../../pages/page_2/Veneer";
import WhyChoose from "../../pages/page_2/WhyChoose";
import PerfectFor from "../../pages/page_2/PerfectFor";
import WhatExpect from "../../pages/page_2/WhatExpect";
import CrownVeneerCareTips from "../../pages/page_2/CrownVeneer";
import Frequently from "../../pages/page_2/Frequentlyask";
import IsTheProcedure from "../../pages/page_2/IsTheProcedure";
import OurClient from "../../pages/page_2/OurClient";

const HeroSection = () => {
  return (
    <>
      <section 
        className="relative overflow-hidden min-h-screen"
        style={{
          backgroundImage: `url(${bnrSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative  mx-auto px-6 md:px-12 py-20 md:py-32 min-h-screen flex items-center ml-36">
          
          {/* Left Side Content */}
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className=" font-bold text-[#0067AC] leading-tight tracking-tight mb-3" style={{ fontSize: '54px' }}>
              Dental Crowns & Veneers
            </h1>

            {/* Subtitle */}
            <p className=" text-[#272727] font-medium leading-relaxed mb-10" style={{ fontSize: '30px' }}>
              Crafted for Strength. Designed for Beauty.
            </p>

            {/* Call to Action Button */}
            <button className="bg-[#0267AC] text-white px-10 py-5 rounded-xl font-semibold text-2xl hover:bg-[#0056a3] transition-colors duration-300 shadow-lg">
              Book Your Consultation Today
            </button>
          </div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </section>

      {/* Content Section */}
      <ContentSection />

      {/* Crown Options Section */}
      <CrownOptions />

      {/* Veneer Section */}
      <Veneer />
      <WhyChoose />
      <PerfectFor />
      <WhatExpect />
      <CrownVeneerCareTips />
      <Frequently />
      <IsTheProcedure />
      <OurClient />
    </>
  );
};

export default HeroSection;

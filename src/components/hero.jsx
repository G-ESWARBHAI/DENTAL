import React from "react";
import { ArrowRight } from "lucide-react";
import heroSvg from "../components/assets/hero.svg";

const HeroSection = () => {
  return (
    <section 
      className="relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${heroSvg})`,
        backgroundSize: '100%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10"></div>  {/* 10% instead of 20% */}
      
       <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pl-0 md:pl-0 pr-6 md:pr-12 py-12 md:py-20 min-h-screen">
        
        {/* Left Side Text */}
        <div className="max-w-xl space-y-7 text-left md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[87.47px] font-medium text-gray-800 leading-tight tracking-wider font-sans">
              <div className="text-gray-800 whitespace-nowrap">Every Smile</div>
              <div className="text-[#0076C0]">Matters</div>
            </h1>

          <p className="text-xl text-gray-600 font-sans">
            At Sasha Smiles, we combine expertise, innovation,<br />
            and gentle care to craft smiles that radiate health <br/>
            and confidence.
          </p>

          <button className="mt-5 bg-[#FF642F] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-4 hover:bg-[#ff5a1e] transition font-sans">
            Book Consultation <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side - Empty space for the background image to show through */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end items-center">
          {/* This space allows the background SVG to be visible */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

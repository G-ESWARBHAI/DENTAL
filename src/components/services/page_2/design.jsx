import React from "react";
import { motion } from 'framer-motion';
import FrameBanner from "../../assets/design the smile.svg";



export default function Ready() {
  return (
    <div className="-mt-4 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <div 
          className="relative overflow-hidden w-full h-[180px] md:h-[392px]"
          style={{
            backgroundImage: `url(${FrameBanner})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 lg:ml-14 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-14 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <h2 className="text-white font-bold mb-1 md:mb-5 lg:mb-6 text-[10px] md:text-3xl lg:text-[38px] whitespace-nowrap" style={{letterSpacing: '0.3px'}}>
              Design the Smile You Deserve
              </h2>
              <p className="text-white mb-2 md:mb-6 text-[8px] md:text-lg lg:text-[24px]" style={{letterSpacing: '0.6px',lineHeight: '1.2'}}>
              At Sasha Luxe, orthodontic care isn’t just about straight 
teeth—it’s about confidence, harmony, and long-term 
health. Let us help you choose the right treatment for 
your lifestyle and goals.
              </p>
              <button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-[9px] md:text-lg lg:text-[24px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
              >
                Book Your Consultation
              </button>
            </div>

            {/* Right Side - Image (will be handled by SVG background) */}
            <div className="w-1/2 md:w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
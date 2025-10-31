import React from "react";
import RootCanalsReady from "../../components/assets/RootCanal/Ready to Relieve.svg";

export default function Ready() {
  return (
    <div className="-mt-4 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <div 
          className="relative overflow-hidden w-full h-[180px] md:h-[500px]"
          style={{
            backgroundImage: `url(${RootCanalsReady})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-14 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <h2 className="text-white font-bold mb-1 md:mb-5 lg:mb-6 text-[9px] md:text-3xl lg:text-[33px] whitespace-nowrap" style={{letterSpacing: '0.3px'}}>
              Ready to Relieve Pain & Save Your Smile?
              </h2>
              <p className="text-white mb-2 md:mb-6 text-[9px] md:text-lg lg:text-[20px] lg:w-[520px]" style={{letterSpacing: '1.2px',lineHeight: '1.5'}}>
              Don’t let tooth infection disrupt your life. Our 
expert <strong>root canal treatment</strong> can restore comfort 
and confidence safely and effectively.
              </p>
              <button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-[8px] md:text-lg lg:text-[25px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
                style={{letterSpacing: '1px'}}
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


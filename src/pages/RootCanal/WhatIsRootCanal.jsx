import React from "react";

export default function WhatIsRootCanal() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center  mb-4 md:mb-10 font-bold text-xl md:text-3xl lg:text-[40px]" style={{color: '#0267AC'}}>
          What Is Root Canal Treatment?
        </h2>

        {/* Content */}
        <div className="space-y-4 md:space-y-8">
          <p className="text-center md:text-left leading-relaxed text-gray-700 text-sm md:text-lg lg:text-[24px]" style={{lineHeight: '1.9',letterSpacing: '0.7px'}}>
            <strong>Root canal treatment</strong> is a dental procedure used to treat infection or inflammation inside a tooth.            When the <strong>dental pulp</strong> (the inner soft tissue) becomes infected due to decay, trauma, or deep cracks, it can cause severe pain or lead to an abscess.

          </p>

     

          <p className="text-center md:text-left leading-relaxed text-gray-700 text-sm md:text-lg lg:text-[24px]" style={{lineHeight: '1.9',letterSpacing: '0.7px'}}>
            During <strong>endodontic treatment</strong>, our dentist removes the infected pulp, cleans and disinfects the root canals, and fills them to prevent reinfection. The tooth is then restored with a crown or filling.
          </p>
        </div>
      </div>
    </div>
  );
}


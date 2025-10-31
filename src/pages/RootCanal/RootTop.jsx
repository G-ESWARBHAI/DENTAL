import React from "react";
import BnrSvg from "../../components/assets/RootCanal/BNR.svg";
import RootIntro from "../../pages/RootCanal/RootIntro";
import WhatIsRootCanal from "../../pages/RootCanal/WhatIsRootCanal";
import RootBenefits from "../../pages/RootCanal/RootBenefits";
import WhenToGet from "../../pages/RootCanal/WhenToGet";
import BenefitsOfRootCanal from "../../pages/RootCanal/BenefitsOfRootCanal";
import WhyChoose from "../../pages/RootCanal/WhyChoose";
import WhatToExpect from "../../pages/RootCanal/WhatToExpect";
import After from "../../pages/RootCanal/After";
import Frequently from "../../pages/RootCanal/Frequently";
import Ready from "../../pages/RootCanal/Ready";
import OurClient from "../../pages/RootCanal/OurClient";

export default function RootTop() {
  return (
    <>
    <section
      className="relative overflow-hidden w-full md:min-h-[670px] mt-16 md:mt-14"
      style={{
        backgroundImage: `url(${BnrSvg})`,
        // backgroundSize: "contain",
        // backgroundSize: "cover",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative mx-auto px-3 sm:px-6 lg:px-12 py-3 sm:py-8 md:py-14 flex flex-row items-center">
        {/* Left Text */}
        <div className="z-10 ml-2 sm:ml-6 md:ml-16 mt-5 md:mt-40 flex-shrink-0 max-w-[65%] sm:max-w-[55%] md:max-w-[48%]">
          <h1 className="text-[#0267AC] font-extrabold leading-tight mb-2 sm:mb-3 md:mb-5 text-base sm:text-3xl md:text-5xl lg:text-[58px] whitespace-nowrap" >
            Root Canal
          </h1>
          <div className="text-[#272727] font-medium space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-5 md:mb-12" style={{lineHeight: '1.2' , letterSpacing: '1px'}}>
            <p className="text-[10px] sm:text-base md:text-2xl lg:text-[30px]">Eliminate Pain. Stop Infection.</p>
            <p className="text-[10px] sm:text-base md:text-2xl lg:text-[30px]">Save Your Natural Tooth.</p>
          </div>
          <button
            className="bg-[#0267AC] text-white rounded-xl font-medium shadow-lg px-3 py-1.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-[20px] text-[10px] sm:text-base md:text-3xl lg:text-[30 px] transition-all duration-300 hover:bg-[#0056a3] hover:scale-105 hover:shadow-xl"
          >
            Book Your Consultation Today
          </button>
        </div>

        {/* Right spacer to preserve composition as in desktop */}
        <div className="hidden md:block flex-shrink-0 md:w-[45%]" />
      </div>
    </section>
    <RootIntro />
    <WhatIsRootCanal />
    <RootBenefits />
    <WhenToGet />
    <BenefitsOfRootCanal />
    <WhyChoose />
    <WhatToExpect />
    <After />
    <Frequently />
    <Ready />
    <OurClient />
    </>
  );
}



import React from "react";
import BnrSvg from "../../components/assets/Teeth Whitening/SVG/BNR.svg";


export default function Hero() {
  return (
    <>
    <section
      className="relative overflow-hidden w-full h-full md:max-h-[900px]  mt-1 md:mt-17 lg:min-h-[750px]  min-h-[280px]"
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
      <div className="relative  px-3 sm:px-6 lg:px-12 py-3 sm:py-8 md:py-14 flex flex-row items-center">
        {/* Left Text */}
        <div className="z-10 ml-2 sm:ml-6 lg:ml-26 md:ml-28 md:mt-40   flex-shrink-0 max-w-[65%] sm:max-w-[55%] md:max-w-[48%]">
          <h1 className="text-[#0267AC] mt-20 font-extrabold leading-tight mb-2 sm:mb-3 md:mb-5 text-base sm:text-3xl md:text-5xl lg:text-[49px] whitespace-nowrap" >
          Teeth Whitening
         </h1>
          <div className="text-[#272727] font-medium space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-5 md:mb-12" style={{lineHeight: '1.2' , letterSpacing: '1px'}}>
            <p className="text-[10px] sm:text-base md:text-2xl lg:text-[31px]"> Brighten your smile. Instantly lift years 
            of stains</p>
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
    </>
  );
}
import React from "react";
import heroSvg from "../components/assets/hero.svg";
import { ArrowRight } from "lucide-react";


export default function ToothTop() {
  return (
    <>
     <section
       className="relative overflow-hidden w-full h-[200px] md:h-[640px] mt-14 md:mt-5"
      style={{
        backgroundImage: `url(${heroSvg})`,
        // backgroundSize: "contain",
        // backgroundSize: "cover",
        backgroundSize: "100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
       <div className="absolute inset-x-0 top-3 sm:top-5 md:mt-32 px-3 sm:px-6 lg:px-12 flex flex-row items-start">
        {/* Left Text */}
         <div className="z-10 ml-2 sm:ml-6 md:ml-16 flex-shrink-0 max-w-[150px] sm:max-w-[55%] md:max-w-[560px]">
          <h1 className="text-gray-800 font-extrabold leading-tight mt-2 font-sans md:mb-2 md:-mt-2 text-base text-[15px] sm:text-3xl md:text-5xl lg:text-[87.47px] font-medium whitespace-nowrap" >
            Every Smile 
         </h1>
          <h1 className="text-[#0076C0] font-extrabold leading-tight font-sans mb-2 sm:mb-3 md:mb-7 text-base text-[15px] sm:text-3xl md:text-5xl lg:text-[87.47px] font-medium whitespace-nowrap" >
            Matters          
          </h1>
          <div className="text-[#272727] font-medium space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-5 md:mb-12" style={{lineHeight: '1.2' , letterSpacing: '1px'}}>
            <p className="text-[7px] sm:text-base md:text-xl lg:text-xl text-gray-600 font-sans">
            At Sasha Smiles, we combine expertise, innovation,
            and gentle care to craft smiles that radiate health 
            and confidence.              </p>
          </div>
          <button
            className="bg-[#FF642F] text-white rounded-full flex flex-inline items-center justify-center gap-2 font-semibold shadow-lg p px-3 py-0.5  lg:px-10 lg:py-[7px] text-[8px] sm:text-base md:text-3xl lg:text-[15px] transition-all duration-300 hover:bg-[#0056a3] hover:scale-105 hover:shadow-xl"
            >
              Book Consultation <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Right spacer to preserve composition as in desktop */}
        <div className="hidden md:block flex-shrink-0 md:w-[45%]" />
      </div>
    </section>
 
   
    </>
  );
}
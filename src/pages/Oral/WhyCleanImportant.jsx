import React from "react";
import ProfessionalTeethImg from "../../components/assets/ORAL/Professional Teeth.svg";
import ArrowIcon from "../../components/assets/ORAL/arrow.svg";

export default function WhyCleanImportant() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-center font-bold text-xl md:text-3xl mb-5 lg:text-[40px]" style={{color: '#0267AC'}}>
          Why Is Professional Teeth Cleaning Important?
        </h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-0 ">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src={ProfessionalTeethImg} 
              alt="Professional teeth cleaning procedure"
              className="rounded-2xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] h-auto"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-3 md:space-y-5 lg:-ml-44 lg:-mt-5 order-1 lg:order-2">
            {/* Introductory Paragraph */}
            <p className=" md:text-left leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{letterSpacing: '0.5px'}}>
              Even with daily brushing and flossing, plaque can build up in hard-to-reach areas and harden into tartar. Left untreated, it can lead to:
            </p>
            
            {/* Bulleted List */}
            <ul className="space-y-3 md:space-y-4 mt-2">
              <li className="flex items-start">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{letterSpacing: '0.5px',lineHeight: '1.8'}}>
                  Gum disease (gingivitis or periodontitis)
                </span>
              </li>
              
              <li className="flex items-start">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{lineHeight: '1.8'}}>
                  Tooth decay and cavities
                </span>
              </li>
              
              <li className="flex items-start">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{lineHeight: '1.8'}}>
                  Bad breath (halitosis)
                </span>
              </li>
              
              <li className="flex items-start">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]">
                  Yellowing and staining of teeth
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


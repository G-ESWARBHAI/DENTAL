import React from "react";
import { motion } from "framer-motion";
import bnrSvg from "../../components/assets/ORAL/bnr.svg";
import WhatIsOral from "../../pages/Oral/WhatIsOral";
import WhyCleanImportant from "../../pages/Oral/WhyCleanImportant";
import WhatHappens from "../../pages/Oral/WhatHappens";
import Technology from "../../pages/Oral/Technology";
import WhyChoose from "../../pages/Oral/WhyChoose";
import Benefits from "../../pages/Oral/Benefits";
import WhoShould from "../../pages/Oral/WhoShould";
import WhatToExpect from "../../pages/Oral/WhatToExpect";
import BeforeAfter from "../../pages/Oral/BeforeAfter";
import Frequently from "../../pages/Oral/Frequently";
import Ready from "../../pages/Oral/Ready";
import OurClient from "../../pages/Oral/OurClient";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const OralTop = () => {
  return (
    <>
      <section 
        className="relative overflow-hidden md:min-h-screen mt-8"
        style={{
          backgroundImage: `url(${bnrSvg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <motion.div 
          className="relative mx-auto px-2 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* Left Side Content */}
          <div className="max-w-[140px] sm:max-w-[200px] md:max-w-sm lg:max-w-xl xl:max-w-2xl ml-4 md:ml-10 lg:ml-28 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8">
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight  lg:mb-7 tracking-tight text-[14px] sm:text-base md:text-2xl lg:text-[54px]"
              variants={headingVariants}
            >
              Oral Prophylaxis
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="font-medium text-[#0267AC] leading-relaxed mb-2 md:mb-8 text-[12px] sm:text-xs md:text-lg lg:text-[42px]"
              variants={subtitleVariants}
            >
              (Scaling & Polishing)
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed mb-2 md:mb-8 lg:mb-11 text-[8px] sm:text-[10px] md:text-sm lg:text-[30px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Clean. Polish. Protect. Reveal your most Radiant, Healthy Smile.
            </motion.p>

            {/* Call to Action Button */}
            <motion.button 
              className="bg-[#0267AC] text-white px-2 py-1 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[8px] sm:text-[10px] md:text-base lg:text-[26px] w-full md:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation Today
            </motion.button>
          </div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </motion.div>
      </section>
      
      {/* Other sections */}
      <WhatIsOral />
      <WhyCleanImportant />
      <WhatHappens />
      <Technology />
      <WhyChoose />
      <Benefits />
      <WhoShould />
      <WhatToExpect />
      <BeforeAfter />
      <Frequently />
      <Ready />
      <OurClient />
    </>
  );
};

export default OralTop;


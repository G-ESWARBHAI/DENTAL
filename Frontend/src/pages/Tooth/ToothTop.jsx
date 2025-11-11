import React from "react";
import { motion } from "framer-motion";
import BnrSvg from "../../components/assets/Tooth/BNR.svg";
import WhatAreMinor from "../../pages/Tooth/WhatAreMinor";
import Cyst from "../../pages/Tooth/Cyst";
import SoftTissue from "../../pages/Tooth/SoftTissue";
import Alveo from "../../pages/Tooth/Alveo";
import Apicoe from "../../pages/Tooth/Apicoe";
import OtherTooth from "../../pages/Tooth/OtherTooth";
import WhyChoose from "../../pages/Tooth/WhyChoose";
import BeforeAfter from "../../pages/Tooth/BeforeAfter";
import Frequently from "../../pages/Tooth/Frequently";
import Ready from "../../pages/Tooth/Ready";
import OurClient from "../../pages/Tooth/OurClient";

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

export default function ToothTop() {
  return (
    <>
    <section
      className="relative overflow-hidden w-full  md:max-h-[700px] mt-14 md:mt-17"
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
        <motion.div 
          className="z-10 ml-2 sm:ml-6 md:ml-28 md:mt-40   flex-shrink-0 max-w-[65%] sm:max-w-[55%] md:max-w-[48%]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-[#0267AC] font-extrabold leading-tight mb-2 sm:mb-3 md:mb-5 text-base sm:text-3xl md:text-5xl lg:text-[49px] whitespace-nowrap"
            variants={headingVariants}
          >
            Tooth-Specific
         </motion.h1>
          <motion.h1 
            className="text-[#0267AC] font-extrabold leading-tight mb-2 sm:mb-3 md:mb-7 text-base sm:text-3xl md:text-5xl lg:text-[49px] whitespace-nowrap"
            variants={headingVariants}
          >
            Minor Surgical Care          
          </motion.h1>
          <div className="text-[#272727] font-medium space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-5 md:mb-12" style={{lineHeight: '1.2' , letterSpacing: '1px'}}>
            <motion.p 
              className="text-[10px] sm:text-base md:text-2xl lg:text-[31px]"
              variants={textVariants}
            >
              Targeted Care. Gentle Technique.
            </motion.p>
            <motion.p 
              className="text-[10px] sm:text-base md:text-2xl lg:text-[31px]"
              variants={textVariants}
            >
              Long-Term Relief.
            </motion.p>
          </div>
          <motion.button
            className="bg-[#0267AC] text-white rounded-xl font-medium shadow-lg px-3 py-1.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-[20px] text-[10px] sm:text-base md:text-3xl lg:text-[30px] transition-all duration-300 hover:bg-[#0056a3]"
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Consultation Today
          </motion.button>
        </motion.div>

        {/* Right spacer to preserve composition as in desktop */}
        <div className="hidden md:block flex-shrink-0 md:w-[45%]" />
      </div>
    </section>
    <WhatAreMinor />
    <Cyst />
    <SoftTissue />
    <Alveo />
    <Apicoe />
    <OtherTooth />
    <WhyChoose />
    <BeforeAfter />
    <Frequently />
    <Ready />
    <OurClient />

   
    </>
  );
}



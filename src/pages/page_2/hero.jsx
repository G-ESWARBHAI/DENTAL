import React from "react";
import { ArrowRight } from "lucide-react";
import bnrSvg from "../../components/assets/Page2/BNR.svg";
import ContentSection from "../../pages/page_2/content";
import CrownOptions from "../../pages/page_2/crown_options";
import Veneer from "../../pages/page_2/Veneer";
import WhyChoose from "../../pages/page_2/WhyChoose";
import PerfectFor from "../../pages/page_2/PerfectFor";
import WhatExpect from "../../pages/page_2/WhatExpect";
import CrownVeneerCareTips from "../../pages/page_2/CrownVeneer";
import Frequently from "../../pages/page_2/Frequentlyask";
import IsTheProcedure from "../../pages/page_2/IsTheProcedure";
import OurClient from "../../pages/page_2/OurClient";
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
       <section 
        className="relative overflow-hidden md:min-h-screen mt-12 lg:-mt-4 "
        style={{
          backgroundImage: `url(${bnrSvg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative mx-auto px-2 lg:ml-10 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center">
          
          {/* Left Side Content */}
          <motion.div 
            className="max-w-[240px]  lg:max-w-[600px] xl:max-w-2xl ml-2 md:ml-10 lg:ml-20 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-9 tracking-tight text-[11px] sm:text-base md:text-2xl lg:text-[52px]"
              variants={titleVariants}
            >
              Dental Crowns & Veneers
            </motion.h1>
            
         
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed lg:mb-6 text-[7px] sm:text-[10px] md:text-sm lg:text-[28px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Crafted for Strength. Designed for Beauty.
            </motion.p>
           

            {/* Call to Action Button */}
            <motion.button 
              className="bg-[#0267AC] text-white px-1  py-0.5 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[6px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Consultation Today
            </motion.button>
          </motion.div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </div>
      </section>

      {/* Content Section */}
      <ContentSection />

      {/* Crown Options Section */}
      <CrownOptions />

      {/* Veneer Section */}
      <Veneer />
      <WhyChoose />
      <PerfectFor />
      <WhatExpect />
      <CrownVeneerCareTips />
      <Frequently />
      <IsTheProcedure />
      <OurClient />
    </>
  );
};

export default HeroSection;

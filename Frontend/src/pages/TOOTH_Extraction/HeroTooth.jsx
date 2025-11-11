







import React from 'react';
import { motion } from 'framer-motion';
import BnrBackground from '../../../public/ToothBNR.svg';



export default function HeroTooth() {
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

  return (
    <>
        <section 
        className="relative overflow-hidden md:min-h-screen mt-14 lg:mt-9"
        style={{
          backgroundImage: `url(${BnrBackground})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative mx-auto px-2 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center">
          
          {/* Left Side Content */}
          <motion.div 
            className="max-w-[240px] lg:max-w-[600px] xl:max-w-2xl ml-2 md:ml-10 lg:ml-28 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-7 tracking-tight text-[14px] sm:text-base md:text-2xl lg:text-[54px]"
              variants={headingVariants}
            >
              Tooth Extractions
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:mb-8 lg:leading-relaxed text-[7px] sm:text-[10px] md:text-sm lg:text-[28px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Gentle. Safe. Professional Tooth
              <br />
              Removal When You Need It Most.
            </motion.p>

            {/* Call to Action Button */}
            <motion.button 
              className="bg-[#0267AC] text-white px-1.5 py-0.5 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium transition-colors duration-300 shadow-lg text-[7px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto mt-2 md:mt-4"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#0056a3", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation Today
            </motion.button>
          </motion.div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </div>
      </section>
      

      
    </>
  );
}

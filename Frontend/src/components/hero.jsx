
import React from 'react';
import { motion } from 'framer-motion';
import BnrBackground from '../components/assets/hero.svg';
import { ArrowRight } from 'lucide-react';



export default function FlapHero() {
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
        className="relative overflow-hidden md:min-h-screen mt-4 lg:-mt-2 "
        style={{
          backgroundImage: `url(${BnrBackground})`,
          backgroundSize: '120%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative mx-auto px-2 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center">
          
          {/* Left Side Content */}
          <motion.div 
            className="max-w-[240px]  lg:max-w-[600px] xl:max-w-2xl ml-2 md:ml-10 lg:ml-28 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-7 tracking-tight text-[14px] sm:text-base md:text-2xl lg:text-[51px]"
              variants={titleVariants}
            >
          <h1 className="text-gray-800 font-extrabold leading-tight mt-2 font-sans md:mb-2 md:-mt-2 text-base text-[13px] sm:text-3xl md:text-5xl lg:text-[87.47px] font-medium whitespace-nowrap" >
            Every Smile 
         </h1>            
         <h1 className="text-[#0076C0] font-extrabold leading-tight font-sans  sm:mb-3 md:mb-7 text-base text-[13px] sm:text-3xl md:text-5xl lg:text-[87.47px] font-medium whitespace-nowrap" >
            Matters          
          </h1>
         </motion.h1>
            
         
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:mb-8 lg:leading-relaxed max-w-[150px] sm:max-w-[55%] lg:max-w-[600px] " 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
            <p className="text-[7px] sm:text-base md:text-xl lg:text-xl text-gray-600 font-sans">
            At Sasha Smiles, we combine expertise, innovation,
            and gentle care to craft smiles that radiate health 
            and confidence.              </p>            </motion.p>
        

            {/* Call to Action Button */}
            <motion.button 
              className=" text-white  md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium  transition-colors duration-300 text-[7px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
          <button
            className="bg-[#FF642F] text-white rounded-full flex flex-inline lg:-ml-10 items-center justify-center gap-2 font-semibold   px-2 py-0.5  lg:px-10 lg:py-[7px] text-[7px] sm:text-base md:text-3xl lg:text-[17px] transition-all  "
            >
              Book Consultation <ArrowRight className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>            </motion.button>
          </motion.div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </div>
      </section>
      

      
    </>
  );
}

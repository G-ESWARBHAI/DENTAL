// import React from "react";
// import styled from "styled-components";

// const HeroSection = () => {
//   return (
//     <HeroContainer>
//       <MobileContent>
//         <HeroHeading>Dental Implants</HeroHeading>
//         <HeroSubheading>Permanent. Natural. Life-Changing.</HeroSubheading>
//         <HeroButton>
//           <ButtonText>Book Your Consultation Today</ButtonText>
//         </HeroButton>
//       </MobileContent>
//       <HeroImage />
//     </HeroContainer>
//   );
// };

// const HeroContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     gap: 0;
//     padding: 0;
//     background: none;
//   }
// `;

// const MobileContent = styled.div`
//   position: absolute;
//   top: 230px;
//   left: 160px;

//   @media (max-width: 768px) {
//     position: static;
//     width: 100vw;
//     text-align: center;
//     padding: 32px 16px 16px 16px;
//     background: #fff;
//     box-sizing: border-box;
//     z-index: 2;
//   }
// `;

// const HeroHeading = styled.h1`
//   font-family: 'Poppins', sans-serif;
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 72px;
//   color: #0267AC;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 30px;
//     line-height: 38px;
//     margin-bottom: 10px;
//   }
// `;

// const HeroSubheading = styled.h2`
//   margin-top: 10px;
//   font-family: 'Montserrat', sans-serif;
//   font-weight: 500;
//   font-size: 27.32px;
//   line-height: 38px;
//   color: #272727;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     line-height: 22px;
//     padding: 0;
//     margin-top: 0;
//     margin-bottom: 14px;
//   }
// `;

// const HeroButton = styled.button`
//   margin-top: 22px;
//   width: 425px;
//   height: 52px;
//   border-radius: 11.26px;
//   background-color: #0267AC;
//   border: none;
//   display: flex;
//   align-items: center;
//   padding-left: 30px;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     width: 90vw;
//     height: 44px;
//     justify-content: center;
//     padding-left: 0;
//     margin: 0 auto;
//   }
// `;

// const ButtonText = styled.span`
//   font-family: 'Montserrat', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   color: #FFFFFF;

//   @media (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

// const HeroImage = styled.div`
//   background-image: url("/BNR.svg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: top center;
//   width: 100%;
//   height: 100vh;

//   @media (max-width: 768px) {
//     position: static;
//     height: 280px;
//     width: 100vw;
//     border-radius: 0px;
//     margin-top: 0;
//     background-position: center;
//   }
// `;

// export default HeroSection;












import React from 'react';
import { motion } from 'framer-motion';
import BnrBackground from '../../../public/BNR.svg';



export default function HeroSection() {
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
        className="relative overflow-hidden md:min-h-screen mt-10 lg:mt-9"
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
            className="max-w-[240px]  lg:max-w-[600px] xl:max-w-2xl ml-2 md:ml-10 lg:ml-28 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-7 tracking-tight text-[24px] sm:text-base md:text-2xl lg:text-[56px]"
              variants={titleVariants}
            >
              Dental Implants
            </motion.h1>
            
         
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:mb-8 lg:leading-relaxed  text-[12px] sm:text-[10px] md:text-sm lg:text-[28px] max-w-[140px] sm:max-w-[55%] lg:max-w-[600px] lg-max-w-[600px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Permanent. Natural. Life-Changing.
            </motion.p>
        

            {/* Call to Action Button */}
            <motion.button 
              className="bg-[#0267AC] text-white px-1.5  py-0.5 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[9px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto"
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
      

      
    </>
  );
}

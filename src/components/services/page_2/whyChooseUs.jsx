import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import  ExpertSupervisionIcon from '../../assets/Expert Supervision.png';
import  DiscreetIcon from '../../assets/Discreet.png';
import  FlexibleIcon from '../../assets/Flexible.png';
import  CustomizedPlanningIcon from '../../assets/Customized Planning.png';
import  DigitalSmileSimulationIcon from '../../assets/Digital Smile Simulation.png';
import arrowIcon from '../../assets/ARROW.png';

export default function WhyChoose() {
  const prefersReducedMotion = useReducedMotion();
  const initialAnim = prefersReducedMotion ? false : 'hidden';
  const animateAnim = prefersReducedMotion ? false : 'visible';
  const whileInViewAnim = prefersReducedMotion ? undefined : 'visible';
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06
      }
    }
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureBoxVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      boxShadow: "0 10px 25px rgba(2, 103, 172, 0.15)",
      transition: {
        duration: 0.08,
        ease: "easeInOut"
      }
    }
  };

  const featureBoxRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      boxShadow: "0 10px 25px rgba(2, 103, 172, 0.15)",
      transition: {
        duration: 0.12,
        ease: "easeInOut"
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const columnStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.12
      }
    }
  };

  const columnVariantsExpect = {
    hidden: { 
      opacity: 0, 
      y: 40,
      x: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const columnHeadingVariants = {
    hidden: { 
      opacity: 0, 
      y: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const bulletBoxVariants = {
    hidden: { 
      opacity: 0, 
      y: 25,
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      x: 5,
      boxShadow: "0 8px 20px rgba(2, 103, 172, 0.2)",
      transition: {
        duration: 0.12,
        ease: "easeInOut"
      }
    }
  };

  const bulletBoxStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12
      }
    }
  };

  // Left column: Expert Supervision, Flexible, Digital Smile Simulation
  const leftColumnFeatures = [
    {
      icon: ExpertSupervisionIcon,
      title: "Expert Supervision",
      text: "Every case is overseen by trained dental professionals"
    },
    {
      icon: FlexibleIcon,
      title: "Flexible",
      text: "Choose what suits your lifestyle:fixed or removable"
    },
    {
      icon: DigitalSmileSimulationIcon,
      title: "Digital Smile Simulation",
      text: "See your future smile before you start"
    }
  ];

  // Right column: Discreet & Comfortable, Customized Planning
  const rightColumnFeatures = [
    {
      icon: DiscreetIcon,
      title: "Discreet & Comfortable",
      text: "Clear aligners and ceramic brackets available"
    },
    {
      icon: CustomizedPlanningIcon,
      title: "Customized Planning",
      text: "We tailor your treatment based on facial structure, bite, and smile goals"
    }
  ];

  return (
    <motion.div 
      className="py-16 px-4 bg-white -mt-5 mb-10"
      initial={initialAnim}
      animate={animateAnim}
      whileInView={whileInViewAnim}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-12 font-bold" 
          style={{color: '#0267AC', fontSize: '38px', letterSpacing: '0.5px'}}
          variants={headingVariants}
        >
          Why Choose Sasha Luxe?
        </motion.h2>
        
        {/* Features Grid - Two columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {/* Left Column - 3 items */}
          <motion.div className="space-y-4" variants={columnVariants}>
            {leftColumnFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="rounded-2xl p-3 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', height: '90px' }}
                variants={featureBoxVariants}
                whileHover="hover"
              >
                <div className="flex items-center h-full px-2">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 mr-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-14 h-14"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      width="56"
                      height="56"
                    />
                  </motion.div>
                  
                  {/* Text */}
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-bold text-gray-800 mb-0.5" style={{fontSize: '16.88px', letterSpacing: '0.3px', lineHeight: '1.2'}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700" style={{fontSize: '16.88px', letterSpacing: '0.3px', lineHeight: '1.3'}}>
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - 2 items */}
          <motion.div className="space-y-4" variants={columnVariants}>
            {rightColumnFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="rounded-2xl p-3 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', height: '90px' }}
                variants={featureBoxRightVariants}
                whileHover="hover"
              >
                <div className="flex items-center h-full px-2">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 mr-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-14 h-14"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      width="56"
                      height="56"
                    />
                  </motion.div>
                  
                  {/* Text */}
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-bold text-gray-800 mb-0.5" style={{fontSize: '16.88px', letterSpacing: '0.3px', lineHeight: '1.2'}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700" style={{fontSize: '16.88px', letterSpacing: '0.3px', lineHeight: '1.3'}}>
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What to Expect During Treatment Section */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-center mb-12 font-bold" 
            style={{color: '#0267AC', fontSize: '38px', letterSpacing: '0.5px'}}
            variants={headingVariants}
          >
            What to Expect During Treatment
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={columnStaggerVariants}
          >
            {/* Column 1: BEFORE YOU BEGIN */}
            <motion.div variants={columnVariantsExpect}>
              <motion.h3 
                className="font-bold text-[#0267AC] mb-6" 
                style={{fontSize: '20px', letterSpacing: '0.5px'}}
                variants={columnHeadingVariants}
              >
                BEFORE YOU BEGIN
              </motion.h3>
              <motion.div className="space-y-4" variants={bulletBoxStaggerVariants}>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Clinical exam, X-rays & scans
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Digital smile preview & treatment plan
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Explanation of all available options
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Payment plans and treatment timeline discussion
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Column 2: DURING TREATMENT */}
            <motion.div variants={columnVariantsExpect}>
              <motion.h3 
                className="font-bold text-[#0267AC] mb-6" 
                style={{fontSize: '20px', letterSpacing: '0.5px'}}
                variants={columnHeadingVariants}
              >
                DURING TREATMENT
              </motion.h3>
              <motion.div className="space-y-4" variants={bulletBoxStaggerVariants}>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Monthly check-ins for braces or aligners
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    width="20"
                    height="20"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Maintain excellent oral hygiene
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Wear aligners 20-22 hours/day (for clear aligner cases)
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Dietary guidance (for fixed braces patients)
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Column 3: AFTER TREATMENT */}
            <motion.div variants={columnVariantsExpect}>
              <motion.h3 
                className="font-bold text-[#0267AC] mb-6" 
                style={{fontSize: '20px', letterSpacing: '0.5px'}}
                variants={columnHeadingVariants}
              >
                AFTER TREATMENT
              </motion.h3>
              <motion.div className="space-y-4" variants={bulletBoxStaggerVariants}>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Final results review and smile assessment
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Retainers provided to maintain alignment
                  </span>
                </motion.div>
                <motion.div 
                  className="p-4 flex items-center overflow-hidden cursor-pointer" 
                  style={{ backgroundColor: '#E1EDF3', borderRadius: '12.74px', height: '90px' }}
                  variants={bulletBoxVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-gray-800" style={{fontSize: '14px', letterSpacing: '0.5px'}}>
                    Long-term follow-up and maintenance guidance
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
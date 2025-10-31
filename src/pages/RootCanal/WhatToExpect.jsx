import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/RootCanal/arrow white.svg";

export default function WhatToExpect() {
  const steps = [
    "Diagnosis & Imaging",
    "Filling & Sealing",
    "Cleaning & Shaping of Root Canals",
    "Final Restoration with a Crown or Filling",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const Card = ({ text }) => (
    <motion.div
      variants={itemVariants}
      className="bg-[#045F9F] rounded-2xl md:rounded-2xl px-4 py-4 md:px-6 md:py-5 flex items-center h-[60px] md:h-[88px] lg:h-[68px] w-full md:max-w-[520px] lg:max-w-[550px] justify-self-center transition-transform"
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="flex-shrink-0 mr-4 md:mr-4">
        <img src={ArrowIcon} alt="arrow" className="w-6 h-6 md:w-6 md:h-6" />
      </div>
      <p className="text-white font-medium tracking-wide text-[14px] md:text-[18px]">
        {text}
      </p>
    </motion.div>
  );

  return (
    <div className="py-14 md:py-20 px-4 bg-white -mt-10">
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-center font-bold mb-8 md:mb-12 text-2xl md:text-4xl"
          style={{ color: "#0267AC", letterSpacing: "0.5px" }}
        >
          What to Expect
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card text={steps[0]} />
          <Card text={steps[1]} />
          <Card text={steps[2]} />
          <Card text={steps[3]} />
        </motion.div>
      </div>
    </div>
  );
}



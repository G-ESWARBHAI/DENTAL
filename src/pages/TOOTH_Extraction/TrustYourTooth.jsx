import React from "react";
import { motion } from "framer-motion";
import RootCanalsReady from "../../../public/Trust Your Smile.svg";

export default function TrustYourTooth() {
  return (
    <div className="-mt-4 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <motion.div 
          className="relative overflow-hidden w-full h-[180px] md:h-[500px]"
          style={{
            backgroundImage: `url(${RootCanalsReady})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-14 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <motion.h2 
                className="font-bold mb-1 md:mb-5 lg:mb-6 text-[10px] md:text-3xl lg:text-[33px] whitespace-nowrap" 
                style={{letterSpacing: '0.3px'}}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white">Trust Your Smile  </span>
                <motion.span 
                  className="inline-block"
                  style={{ 
                    color: '#FFB366',
                    textShadow: '0 0 8px rgba(255, 179, 102, 0.4)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: [1, 0.9, 1],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                      delay: 0.4
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                 to Gentle Hands
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-white mb-1 md:mb-6 text-[6px] md:text-lg lg:text-[20px] lg:w-[520px]" 
                style={{letterSpacing: '1.2px',lineHeight: '1.5'}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
           From Extraction per Tooth to Extraction of Molar and 
           Extraction Surgical (Wisdom Tooth) Sasha Luxe ensures a 
           seamless experience with lasting relief.
              </motion.p>
              <motion.button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg text-[6px] md:text-lg lg:text-[25px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
                style={{letterSpacing: '1px'}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Consultation
              </motion.button>
            </div>

            {/* Right Side - Image (will be handled by SVG background) */}
            <div className="w-1/2 md:w-1/3"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


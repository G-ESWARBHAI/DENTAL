import React from 'react'
import { motion } from 'framer-motion'
import FrameImage from '../components/assets/Frame 1984078762.svg'

const AboutSasha = () => {
  return (
    <div className="bg-white-90 mt-6 lg:-mt-7">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 pt-6 pb-10 md:py-16">
        {/* Header Section */}
        <motion.div className="mb-4 md:mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
            {/* Left Side - About Sasha Smiles */}
            <div className="flex-1 -mt-14 lg:mt-5 lg:-translate-x-4 -mb-3">
              <motion.h1 className="font-bold leading-tight font-sans" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                <span className="block text-md sm:text-4xl md:text-5xl lg:text-6xl  sm:mb-2" style={{ color: '#0267AC' }}>About</span>
                <span className="block text-xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: '#4D4D4D' }}>Sasha Smiles</span>
              </motion.h1>
            </div>

            {/* Right Side - Our Vision */}
            <motion.div className="w-full lg:max-w-lg lg:-translate-x-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.15 }}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-sans" style={{ color: '#FF6633' }}>Our Vision</h2>

              {/* Body Text */}
              <div className="text-xs sm:text-base md:text-lg leading-relaxed font-sans" style={{ color: '#0267AC' }}>
                <p className="mb-2">
                  Your smile is personal—and so is our approach. At Sasha Smiles, dentistry goes beyond treatment. It's about precision, comfort, and trust.
                </p>
                <p>
                  Whether you need preventive care, cosmetic enhancements, or advanced restorative solutions, we ensure your journey feels seamless and reassuring.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="rounded-xl overflow-hidden">
            <img
              src={FrameImage}
              alt="Dental services showcase"
              className="w-full h-[170px] sm:h-[320px] md:h-[450px] lg:h-[660px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSasha
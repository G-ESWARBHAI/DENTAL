import React from 'react';
import { motion } from 'framer-motion';
import OpeningQuotes from '../../components/assets/_.svg';
import StarsIcon from '../../components/assets/stars.svg';
import ClientVideo from '../../components/assets/ourclient.svg';
import ClosingQuotes from '../../components/assets/quotes.svg';

export default function OurClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-8 md:py-16 px-4" style={{backgroundColor: '#F0F9FF'}}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-6 md:mb-10 -mt-0 md:-mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={itemVariants}
        >
          <h2 className="font-bold mb-2 text-2xl md:text-[38px]" style={{color: '#0267AC', letterSpacing: '0.5px'}}>
          Client Testimonials
          </h2>
          <p className="text-gray-700 mx-auto text-sm md:text-[19px] -ml-1" style={{lineHeight: '1.6'}}>
          Some best words from our beloved clients. It’s always encouraging to know that our clients loved our services as it keeps us 
          going even more enthusiastically.
          </p>
        </motion.div>

        {/* Testimonials and Video Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-10 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* Testimonials Container */}
          <div className="md:col-span-6 flex flex-col md:flex-row gap-5">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[310px] h-auto md:h-[210px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Opening Quotes */}
              <motion.div 
                className="absolute -top-4 md:-top-6"
                initial={{ opacity: 0, rotate: -20 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img src={OpeningQuotes} alt="Opening quotes" className="w-12 h-12 md:w-18 md:h-18" />
              </motion.div>
              
              {/* Stars */}
              <div className="mt-2 md:mt-4 mb-2 md:mb-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-3 leading-relaxed text-xs md:text-[11px]" style={{lineHeight: '1.8'}}>
              “I had a cyst removed near my molar, and I was 
terrified at first. But the team at Sasha Luxe made 
it so smooth. I had almost no pain, and it healed 
quickly.”


              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text-[14px]">
              —Ajay T.
              </p>

            
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[294px] h-auto md:h-[210px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Stars */}
              <div className="mb-2 md:mb-4 mt-2 md:mt-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-3 leading-relaxed text-xs md:text-[11px]" style={{lineHeight: '1.8'}}>
              “I needed an apicoectomy to save a tooth that 
kept getting infected. It was surprisingly easy, and 
now everything feels normal again. Highly 
recommend!”
              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text-[14px]">
              —Fatima L.
              </p>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div 
            className="md:col-span-4 relative mt-8 md:mt-0"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {/* Video Thumbnail */}
            <div className="relative rounded-lg overflow-hidden w-full max-w-full md:max-w-none">
              <img 
                src={ClientVideo} 
                alt="Client testimonial video" 
                className="w-full h-auto md:w-[460px] md:h-[270px]"
              />
              {/* Play Button Overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{backgroundColor: '#E3B077'}}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Closing Quotes */}
            <motion.div 
              className="absolute -bottom-3 md:-bottom-5 -right-0.5 hidden md:block"
              initial={{ opacity: 0, rotate: 20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <img src={ClosingQuotes} alt="Closing quotes" className="w-12 h-12 md:w-18 md:h-18" />
            </motion.div>
            
          </motion.div>
        </motion.div>

        {/* Click More Button */}
        <motion.div 
          className="flex mt-8 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={itemVariants}
        >
          <motion.button 
            className="py-2.5 px-7 rounded-lg font-semibold text-sm md:text-[17px]" 
            style={{backgroundColor: '#0267AC', color: '#fff'}}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(2, 103, 172, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Click More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

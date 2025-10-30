import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import logo from './assets/SASHA SMILES LOGO.svg'

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const bottomBarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <footer className="bg-white border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
      {/* Main Footer Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-12 sm:py-14"
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Logo and Tagline */}
          <motion.div className="space-y-4" variants={sectionVariants}>
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Sasha Smiles Logo"
                className="h-9 sm:h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-600 font-sans text-sm">
              Precision. Care. Confidence.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div className="space-y-4" variants={sectionVariants}>
            <h3 className="text-gray-800 font-semibold font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div className="space-y-4" variants={sectionVariants}>
            <h3 className="text-gray-800 font-semibold font-sans">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Braces & Aligners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Preventive Care
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div className="space-y-4" variants={sectionVariants}>
            <h3 className="text-gray-800 font-semibold font-sans">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 font-sans text-sm">
                  123 Dental Street, Suite 100
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 font-sans text-sm">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 font-sans text-sm">
                  hello@sashasmiles.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div className="border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
        <motion.div 
          className="max-w-7xl mx-auto px-6 py-6"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={bottomBarVariants}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center">
            <p className="text-gray-600 font-sans text-sm text-center sm:text-left">
              © 2025 Sasha Smiles. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-5">
              <motion.a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }}>
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }}>
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }}>
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import logo from './assets/SASHA SMILES LOGO.svg'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Sasha Smiles Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 font-sans text-sm">
              Precision. Care. Confidence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
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
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
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
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
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
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-sans text-sm">
              © 2025 Sasha Smiles. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

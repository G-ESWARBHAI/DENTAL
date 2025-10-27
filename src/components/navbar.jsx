import React, { useState } from 'react'
import logo from './assets/SASHA SMILES LOGO.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Sasha Smiles Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium flex items-center">
                About us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {/* Dropdown menu would go here */}
            </div>
            <div className="relative group">
              <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {/* Dropdown menu would go here */}
            </div>
            <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium">
              Contact us
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-dental-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Q Search here..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleSearch}
              className="text-dental-dark-blue hover:text-dental-teal transition-colors p-1"
              aria-label="Toggle search"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-dental-dark-blue hover:text-dental-teal transition-colors p-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 sm:py-4 border-t border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-dental-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base">
                Home
              </a>
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base">
                About us
              </a>
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base">
                Services
              </a>
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base">
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

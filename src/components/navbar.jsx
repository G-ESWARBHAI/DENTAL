import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/SASHA SMILES LOGO.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesDropdownRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const closeOverlays = () => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
    setIsServicesOpen(false)
  }

  // Close dropdown when clicking outside (only for desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle click outside on desktop (screen width >= 768px)
      if (window.innerWidth >= 768 && servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    // Use mouseleave for better desktop experience
    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        setTimeout(() => {
          if (servicesDropdownRef.current && !servicesDropdownRef.current.matches(':hover')) {
            setIsServicesOpen(false)
          }
        }, 200)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Services data - easy to add more later
  const services = [
    { name: 'Dental Restorations & Fillings', path: '/services' },
    { name: 'Teeth Whitening', path: '/services/teeth-whitening' },
    { name: 'Orthodontics', path: '/services/orthodontics' },
    { name: 'Oral Prophylaxis', path: '/services/oral-prophylaxis' },
    {name:"Dental Crowns & Veneers", path:"/services/dental-crowns-and-veneers"},
    {name:"Root Canal", path:"/services/root-canal"},
    {name:"Tooth Surgery", path:"/services/tooth-surgery"}
  ]

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
            <Link to="/" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
              Home
            </Link>
            <div className="relative group">
              <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium flex items-center">
                About us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative group" 
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center cursor-pointer pb-2">
                <Link 
                  to="/services" 
                  className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium flex items-center"
                  onClick={closeOverlays}
                >
                  Services
                </Link>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 text-dental-dark-blue ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu with bridge */}
              <div 
                className={`absolute left-0 top-full pt-2 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div 
                  className="w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden"
                  style={{
                    animation: isServicesOpen ? 'fadeInDown 0.3s ease-out' : 'none',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-5 py-3.5 text-sm text-dental-dark-blue hover:bg-gradient-to-r hover:from-dental-teal hover:to-blue-500 hover:text-white transition-all duration-200 font-medium relative group/item"
                      onClick={closeOverlays}
                      style={{
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
              Blog
            </a>
            <a href="#" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
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
                placeholder="Search here..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Mobile Buttons */}
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
              <Link to="/" className="block px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
                Home
              </Link>
              <a href="#" className="block px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
                About us
              </a>
              {/* Services with Dropdown - Mobile */}
              <div className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsServicesOpen(!isServicesOpen)
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium text-left"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown Items */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-6 py-2.5 text-sm text-dental-blue hover:text-dental-teal hover:bg-white transition-colors font-medium border-l-2 border-transparent hover:border-dental-teal"
                        onClick={(e) => {
                          e.stopPropagation()
                          closeOverlays()
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <a href="#" className="block px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
                Blog
              </a>
              <a href="#" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base" onClick={closeOverlays}>
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

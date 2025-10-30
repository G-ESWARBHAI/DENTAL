import React from 'react'
import page3Image from '../../assets/page_3.svg'

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left Half - Content */}
      <div 
        className="w-full md:w-1/2 flex items-center justify-center py-10 px-5 sm:px-6 sm:py-8 md:py-10 lg:py-12 md:px-8"
        style={{ backgroundColor: '#E1EDF3' }}
      >
        <div className="max-w-lg w-full text-left space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-5">
          {/* Main Heading */}
          <h1 
            className="leading-tight"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 6vw, 48px)',
              color: '#0267AC',
              lineHeight: '1.2'
            }}
          >
            Orthodontic Solutions
          </h1>
          
          {/* Sub-heading */}
          <p 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 3.5vw, 27.32px)',
              color: '#272727',
              lineHeight: 'clamp(24px, 5vw, 40px)'
            }}
          >
            Aligned. Confident. Transformative.
          </p>
          
          {/* Call to Action Button */}
          <button className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-3 bg-[#0267AC] hover:bg-blue-800 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg transition-colors duration-200 shadow-md whitespace-nowrap">
            Book Your Consultation Today
          </button>
        </div>
      </div>

      {/* Right Half - Image */}
      <div 
        className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-full md:min-h-[500px] overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: '#E1EDF3' }}
      >
        <img 
          src={page3Image} 
          alt="Orthodontic Solutions" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  )
}

export default Hero
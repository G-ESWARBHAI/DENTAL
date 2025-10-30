import React from 'react'
import FrameImage from '../components/assets/Frame 1984078762.svg'

const AboutSasha = () => {
  return (
    <div className="bg-white-90 -mt-16 sm:-mt-20">
      {/* Main Container */}
      <div className="  max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-start">
            {/* Left Side - About Sasha Smiles */}
            <div className="flex-1 mb-6 lg:mb-0 lg:mt-5">
              <h1 className="font-bold leading-normal font-sans">
                <span className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4" style={{ color: '#0267AC' }}>About</span>
                <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: '#4D4D4D' }}>Sasha Smiles</span>
              </h1>
            </div>
            
            {/* Right Side - Our Vision */}
            <div className="max-w-lg lg:max-w-md xl:max-w-lg relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-sans" style={{ color: '#FF6633' }}>Our Vision</h2>
              
              {/* Body Text */}
              <div className="text-base sm:text-lg leading-relaxed font-sans" style={{ color: '#0267AC' }}>
                <p className="mb-3 sm:mb-4">
                  Your smile is personal-and so is our approach. At Sasha Smiles, dentistry goes beyond treatment. It's about precision, comfort, and trust.
                </p>
                <p>
                  Whether you need preventive care, cosmetic enhancements, or advanced restorative solutions, we ensure your journey feels seamless and reassuring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden">
            <img 
              src={FrameImage} 
              alt="Dental services showcase" 
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSasha
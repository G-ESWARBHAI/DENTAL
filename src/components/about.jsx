import React from 'react'
import FrameImage from '../components/assets/Frame 1984078762.svg'

const AboutSasha = () => {
  return (
    <div className="bg-white-90 -mt-20 ">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto  py-20">
        
        {/* Header Section */}
        <div className="mb-4">
          <div className="flex items-start">
            {/* Left Side - About Sasha Smiles */}
            <div className="flex-1 mt-5" style={{ transform: 'translateX(-16px)' }}>
              <h1 className="font-bold leading-normal font-sans">
                <span className="text-6xl mb-4" style={{ color: '#0267AC' }}>About</span >
                <br />
                <span className="text-7xl" style={{ color: '#4D4D4D' }}>Sasha Smiles</span>
              </h1>
            </div>
            
            {/* Right Side - Our Vision */}
            <div className="max-w-lg relative" style={{ transform: 'translateX(-70px)' }}>
              <h2 className="text-3xl font-bold mb-1 font-sans" style={{ color: '#FF6633' }}>Our Vision</h2>
              
              {/* Body Text */}
              <div className="text-lg leading-relaxed font-sans" style={{ color: '#0267AC' }}>
                <p className="mb-2">
                  Your smile is personal-and so is our approach.At Sasha Smiles, dentistry goes beyond treatment. It's about precision, comfort, and trust.
                </p>
                <p>
                  Whether you need preventive care, cosmetic enhancements, or advanced restorative solutions, we ensure your journey feels seamless and reassuring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={FrameImage} 
              alt="Dental services showcase" 
              className="w-full h-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSasha
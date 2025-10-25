import React from 'react'
import ComfortFirstIcon from '../components/assets/Comfort-First Experience.svg'
import PrecisionYouIcon from '../components/assets/Precision You Can Trust.svg'
import SmilesForEveryIcon from '../components/assets/Smiles for Every Stage.svg'
import TechnologyWithIcon from '../components/assets/Technology with a Human Touch.svg'

const Explore = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold font-sans leading-tight">
            <span style={{ color: '#333333' }}>Explore What Makes </span>
            <span style={{ color: '#0067AC' }}>Sasha Smiles </span>
            <span style={{ color: '#333333' }}>Different</span>
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
           {/* Card 1: Precision You Can Trust */}
           <div className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center">
             {/* Blue Icon Section */}
             <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
               <img 
                 src={PrecisionYouIcon} 
                 alt="Precision You Can Trust" 
                 style={{ width: '120px', height: '120px' }}
               />
             </div>
             {/* White Text Section */}
             <div className="mt-2 p-3">
               <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                 Precision You Can Trust
               </h3>
               <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                 Expert dentists with proven care, combining skill and empathy for lasting results.
               </p>
             </div>
           </div>

          {/* Card 2: Smiles for Every Stage */}
          <div className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center">
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <img 
                src={SmilesForEveryIcon} 
                alt="Smiles for Every Stage" 
                style={{ width: '120px', height: '120px' }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Smiles for Every Stage
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                From children to adults, personalized treatments crafted to fit every life stage.
              </p>
            </div>
          </div>

          {/* Card 3: Technology with a Human Touch */}
          <div className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center">
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <img 
                src={TechnologyWithIcon} 
                alt="Technology with a Human Touch" 
                style={{ width: '120px', height: '120px' }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Technology with a Human Touch
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                Digital precision planning and advanced tools, guided by genuine care.
              </p>
            </div>
          </div>

          {/* Card 4: Comfort-First Experience */}
          <div className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center">
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <img 
                src={ComfortFirstIcon} 
                alt="Comfort-First Experience" 
                style={{ width: '120px', height: '120px' }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Comfort-First Experience
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                A soothing environment and gentle approach that make every visit stress-free.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Explore
import React from 'react';
import BnrBackground from '../../components/assets/Bnr.svg';
import Restorations from './Restorations';
import Benefits from './Benifits';
import WhyChoose from './WhyChoose';
import OurClient from './OurClient';  
import Frequently from './Frequently';


export default function DentalRestorationsTop() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden mt-8">
        {/* Background SVG */}
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BnrBackground})`,
            backgroundSize: '100%',
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Text Content */}
              <div className="">
                {/* Main Heading */}
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-28 whitespace-nowrap -mt-24" style={{color: '#0267AC'}}>
                  Dental Restorations & Fillings
                </h1>
                
                {/* Sub-text */}
                <div className="space-y-6 mb-8">
                  <p className="text-xl lg:text-2xl font-medium" style={{color: '#272727'}}>
                    Restore Your Smile. Repair Damage.
                  </p>
                  <p className="text-xl lg:text-2xl font-medium" style={{color: '#272727'}}>
                    Protect Your Teeth.
                  </p>
                </div>
                
                {/* Call-to-Action Button */}
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-2xl transition-colors duration-300 shadow-lg hover:shadow-xl" style={{backgroundColor: '#0267AC'}}>
                  Book Your Consultation Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restorations Section */}
      <Restorations />
      <Benefits />
      <WhyChoose />
      <Frequently />
      <OurClient />
      
    </>
  );
}

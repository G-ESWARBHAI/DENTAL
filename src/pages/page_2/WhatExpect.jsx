import React from 'react';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function WhatExpect() {
  return (
    <div className="py-16 px-4 mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-8 font-bold" style={{color: '#0267AC', fontSize: '40px'}}>
          What to Expect
        </h2>
        
        {/* Expectations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center rounded-2xl p-6 min-h-[75px] " style={{background: 'linear-gradient(180deg,rgb(186, 220, 244) 0%,rgb(232, 239, 247) 100%)'}}>
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-9 ml-8 flex-shrink-0"
              />
              <span className='font-bold' style={{color: '#392D44', fontSize: '21px'}}>
                Comprehensive dental consultation
              </span>
            </div>
            
            <div className="flex items-center rounded-2xl p-6 min-h-[80px]" style={{background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%,rgb(232, 239, 247) 100%)'}}>
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-9 ml-8 flex-shrink-0"

              />
              <span className='font-bold' style={{color: '#392D44', fontSize: '21px'}}>
              Minimal-prep, conservative techniques
              </span>
            </div>
            
            <div className="flex items-center rounded-2xl p-6 min-h-[90px]" style={{background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%,rgb(232, 239, 247) 100%)'}}>
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-9 ml-8 flex-shrink-0"
              />
              <span className='font-bold' style={{color: '#392D44', fontSize: '21px'}}>
              Warrantied crowns with detailed aftercare
              </span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-center rounded-2xl p-6 min-h-[90px]" style={{background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%,rgb(232, 239, 247) 100%)'}}>
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-9 ml-8 flex-shrink-0"
              />
              <span className='font-bold' style={{color: '#392D44', fontSize: '21px'}}>
              Digital scans & precise shade matching
              </span>
            </div>
            
            <div className="flex items-center rounded-2xl p-6 min-h-[90px]" style={{background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%,rgb(232, 239, 247) 100%)'}}>
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-9 ml-8 flex-shrink-0"
              />
              <span className='font-bold mr-2' style={{color: '#392D44', fontSize: '21px',letterSpacing: '0.5px'}}>
              Pain-free placement in 1-2 visits
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


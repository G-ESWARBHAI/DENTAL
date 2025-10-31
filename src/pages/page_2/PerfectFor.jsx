import React from 'react';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function Benefits() {
  return (
    <div className="py-10 px-4 -mt-6" style={{backgroundColor: '#EBF7FF'}}>
      <div className="-mt-7">
        {/* Main Heading */}
        <h2 className="text-center font-bold" style={{color: '#0267AC', fontSize: '36px'}}>
          Perfect For:
        </h2>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-5 max-w-full py-16 px-10 mx-auto">
          {/* Left Column */}
          <div className="space-y-8 ml-40">
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
              Broken or severely worn teeth              </span>
            </div>
            
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
              Discolored or mildly misaligned teeth              </span>
            </div>
            
          
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
              Cosmetic smile makeovers
              </span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
          <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
              Post-root canal restorations              </span>
            </div>
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
              Replacing old or metal-based crowns
              </span>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

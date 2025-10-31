import React from 'react';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function Benefits() {
  return (
    <div className="py-16 px-4 -mt-6 ">
      <div className="">
        {/* Main Heading */}
        <h2 className="text-center mb-8 font-bold" style={{color: '#0267AC', fontSize: '36px'}}>
          Benefits of Restorative Treatment
        </h2>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full py-16 px-10 mx-auto" style={{backgroundColor: '#EBF7FF'}}>
          {/* Left Column */}
          <div className="space-y-8 ml-40">
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
                Natural-looking, long-lasting results
              </span>
            </div>
            
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
                Restores bite strength and tooth function
              </span>
            </div>
            
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
                Personalized approach for every smile
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
                Prevents further tooth decay or damage
              </span>
            </div>
            
            <div className="flex items-center">
              <img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-8 h-8 mr-8 flex-shrink-0"
              />
              <span style={{color: '#392D44', fontSize: '23px', letterSpacing: '0.5px'}}>
                Minimally invasive techniques
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

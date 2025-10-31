import React from 'react';
import SkilledIcon from '../../components/assets/skillled.svg';
import GentleTechIcon from '../../components/assets/gentle tech.svg';
import TrustedIcon from '../../components/assets/trusted.svg';
import HighQualityIcon from '../../components/assets/high quality.svg';
import SpaLikeIcon from '../../components/assets/spa like.svg';

export default function WhyChoose() {
  const features = [
    {
        icon: HighQualityIcon,
        text: "Custom-crafted, natural-looking results"
    },

    {
      icon: GentleTechIcon,
      text: " Pain-free, digital precision techniques"
    },
    {
      icon: TrustedIcon,
      text: " Long-lasting materials with warranties"
    },
    {
        icon: SkilledIcon,
        text: " Skilled cosmetic dentists with years of experience"
      },
    {
      icon: SpaLikeIcon,
      text: " Seamless smile transformations in a luxury setting"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white -mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-12 font-bold" style={{color: '#0267AC', fontSize: '38px', letterSpacing: '0.5px'}}>
          Why Choose Sasha Luxe?
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-6  hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mr-8 ml-5">
                  <img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-14 h-14"
                  />
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed" style={{fontSize: '18px', letterSpacing: '0.5px'}}>
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

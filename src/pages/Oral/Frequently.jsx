import React from 'react';
import FrequentlyQuestionsImage from '../../components/assets/Frequently Questions.svg';

export default function Frequently() {
  const faqs = [
    {
      question: "Is the procedure painful?",
      answer: "Most patients find it very comfortable. For sensitive areas, we use gentle tools and techniques to minimize discomfort."

    },
    {
      question: "How often should I get a professional cleaning?",
      answer: "Every 6 months is ideal for most people. If you have gum disease, wear braces, or are at high risk for plaque buildup, more frequent visits may be recommended."

    },
    {
      question: "Will my teeth look whiter after scaling?",
      answer: " Yes. Scaling removes surface stains, making your teeth appear visibly cleaner and brighter— though it is not a substitute for whitening treatments."

    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-6 md:mb-8 font-bold text-xl md:text-3xl lg:text-[39px]" style={{color: '#0267AC', letterSpacing: '0.5px'}}>
          Frequently Asked Questions
        </h2>
        
        {/* Image for Mobile - After Heading */}
        <div className="flex justify-center mb-8 lg:hidden">
          <img 
            src={FrequentlyQuestionsImage} 
            alt="Frequently Asked Questions illustration"
            className="w-64 h-64"
          />
        </div>
        
        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:-ml-40">
          {/* Left Side - Image (Desktop Only) */}
          <div className="hidden lg:flex justify-center">
            <img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className="w-120 h-120"
            />
          </div>
          
          {/* Right Side - FAQ Items */}
          <div className="space-y-3 lg:-ml-36 lg:-mt-2">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 md:p-6 shadow-sm hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-start">
                  {/* Plus Icon */}
                  <div className="flex-shrink-0 mr-2 md:mr-3 -mt-0.5 md:-mt-1">
                    <span className="text-gray-700 text-lg md:text-xl font-bold">+</span>
                  </div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-2 md:mb-3 text-sm md:text-base lg:text-[16px]" style={{letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-[14px]" style={{letterSpacing: '0.3px'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

<div className="mt-6 md:mt-10">
          <a 
            href="#" 
            className="inline-flex text-blue-600 hover:text-blue-800 font-bold transition-colors text-base md:text-xl lg:text-[24px]" style={{letterSpacing: '0.5px'}}
          >
            Read More
            <span className="ml-2 text-2xl md:text-3xl lg:text-4xl">→</span>
          </a>
        </div>
          </div>
          
        </div>
        
      
      </div>
    </div>
  );
}

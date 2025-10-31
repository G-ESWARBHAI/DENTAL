import React from 'react';
import FrequentlyQuestionsImage from '../../components/assets/Frequently Questions.svg';

export default function Frequently() {
  const faqs = [
    {
      question: "Are composite fillings better than metal fillings?",
      answer: "Yes for most patients, composite fillings offer better aesthetics and preserve more natural tooth structure compared to amalgam (silver) fillings."
    },
    {
      question: "How long do composite veneers last?",
      answer: "With proper care, composite veneers can last 5-7 years, and can be easily repaired or refreshed."
    },
    {
      question: "Is GIC good for permanent fillings?",
      answer: "GIC is commonly used in non-load-bearing areas and for temporary or pediatric restorations. It's also a great choice when fluoride protection is a priority."
    }
  ];

  return (
    <div className="py-16 px-4 bg-white -mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-8 font-bold" style={{color: '#0267AC', fontSize: '39px', letterSpacing: '0.5px'}}>
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start -ml-40">
          {/* Left Side - Image */}
          <div className="flex justify-center ">
            <img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className="w-120 h-120"
            />
          </div>
          
          {/* Right Side - FAQ Items */}
          <div className="space-y-3 -ml-36 -mt-2">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start">
                  {/* Plus Icon */}
                  <div className="flex-shrink-0 mr-3 -mt-1">
                    <span className="text-gray-700 text-xl font-bold">+</span>
                  </div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-3" style={{fontSize: '16px', letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed " style={{fontSize: '14px', letterSpacing: '0.3px'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

<div className=" mt-10">
          <a 
            href="#" 
            className="inline-flex text-blue-600 hover:text-blue-800 font-bold transition-colors"
            style={{fontSize: '24px', letterSpacing: '0.5px'}}
          >
            Read More
            <span className="ml-2 text-4xl">→</span>
          </a>
        </div>
          </div>
          
        </div>
        
        {/* Read More Link */}
      
      </div>
    </div>
  );
}

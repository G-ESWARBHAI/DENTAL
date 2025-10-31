import React from 'react';
import FrequentlyQuestionsImage from '../../components/assets/Frequently Questions.svg';

export default function Frequently() {
  const faqs = [
    {
      question: " What’s the difference between a crown and a veneer?",
      answer: "A crown covers the entire tooth and is used to restore strength and function—often after damage or root canal treatment. A veneer is a thin shell placed only on the front surface of the tooth, mainly for cosmetic improvements like whitening, reshaping, or closing gaps."

    },
    {
      question: "Are crowns and veneers permanent?",
      answer: "Yes. Both crowns and veneers are considered long-term restorations, usually lasting 10–15 years or more with proper care. They may eventually need replacement due to wear, damage, or gum changes, but they’re designed for lasting beauty and durability."

    },
    {
      question: " Will my crown or veneer look natural?",
      answer: " Absolutely. At Sasha Luxe, we use high-quality materials like Emax and Zirconia that are color matched to your natural teeth. These restorations reflect light like real enamel, making them virtually indistinguishable from surrounding teeth."



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
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-start ml-2">
                  {/* Plus Icon */}
                  <div className="flex-shrink-0 mr-3 -mt-1">
                    <span className="text-gray-700 text-xl font-medium">+</span>
                  </div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-3" style={{fontSize: '16px', letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed " style={{fontSize: '13px',letterSpacing: '0.3px'}}>
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

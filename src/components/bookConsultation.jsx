import React from 'react'
import { ArrowRight } from 'lucide-react'
import bookaconsulting from "./assets/Book a Consultation.png";


const BookConsultation = () => {
  return (
    <section className="py-12 sm:py-16 -mt-20 sm:-mt-24 lg:-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          className="rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #A1D6FA 13%, #FAFDFF 100%)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight font-sans">
                <span className="text-black">Book a</span>
                <br />
                <span className="text-[#0267AC]">Consultation</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 font-normal max-w-md mx-auto lg:mx-0" style={{fontFamily: 'Segoe UI Symbol'}}>
                A healthy smile starts with a conversation. Book your free consultation and discover the right path for your dental care.
              </p>

              {/* Button */}
              <button className="bg-[#FF6633] hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-normal flex items-center space-x-2 transition-colors font-sans text-sm sm:text-base mx-auto lg:mx-0">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img 
                  src={bookaconsulting} 
                  alt="Tooth illustration for dental consultation"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookConsultation

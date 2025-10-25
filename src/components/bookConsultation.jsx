import React from 'react'
import { ArrowRight } from 'lucide-react'
import bookaconsulting from "./assets/Book a Consultation.png";


const BookConsultation = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className="rounded-[24px] p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #A1D6FA 13%, #FAFDFF 100%)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-normal leading-tight font-sans">
                <span className="text-black">Book a</span>
                <br />
                <span className="text-[#0267AC]">Consultation</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 font-normal max-w-md" style={{fontFamily: 'Segoe UI Symbol'}}>
                A healthy smile starts with a conversation. Book your free consultation and discover the right path for your dental care.
              </p>

              {/* Button */}
              <button className="bg-[#FF6633] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-normal flex items-center space-x-2 transition-colors font-sans">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center lg:justify-left">
              <div className="w-64 h-64 flex items-center justify-center">
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

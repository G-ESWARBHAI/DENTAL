import React from 'react';
import OpeningQuotes from '../../components/assets/_.svg';
import StarsIcon from '../../components/assets/stars.svg';
import ClientVideo from '../../components/assets/ourclient.svg';
import ClosingQuotes from '../../components/assets/quotes.svg';

export default function OurClient() {
  return (
    <div className="py-16 px-4" style={{backgroundColor: '#F0F9FF'}}>
      <div className="max-w-6xl mx-auto mt-4">
        {/* Header Section */}
        <div className=" mb-10 -mt-8">
          <h2 className="font-bold mb-2" style={{color: '#0267AC', fontSize: '38px', letterSpacing: '0.5px'}}>
            Our Clients Love
          </h2>
          <p className="text-gray-700 mx-auto  -ml-1" style={{fontSize: '19px', lineHeight: '1.6'}}>
            Some best words from our beloved clients. It's always encouraging to know that our clients loved our services as it keeps us going even more enthusiastically.
          </p>
        </div>

        {/* Testimonials and Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-10  items-start">
          
          {/* Testimonials Container */}
          <div className="md:col-span-6 flex gap-5 mt-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 relative" style={{width: '310px', height: '200px'}}>
              {/* Opening Quotes */}
              <div className="absolute -top-6 ">
                <img src={OpeningQuotes} alt="Opening quotes" className="w-18 h-18" />
              </div>
              
              {/* Stars */}
              <div className="mt-4 mb-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed" style={{fontSize: '11px', lineHeight: '1.8'}}>
              I got Emax veneers done for my wedding and I couldn’t be happier. They look so natural, and people still ask me who did my smile.
              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800" style={{fontSize: '16px'}}>
              Tanvi K.
              </p>

            
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 relative " style={{width: '294px', height: '200px'}}>
              {/* Stars */}
              <div className="mb-4 mt-3">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed" style={{fontSize: '11px', lineHeight: '1.8'}}>
              After a root canal, I needed a crown that wouldn’t stand out. Sasha Luxe recommended a 10-year zirconia crown and it’s perfect. No pain, no awkwardness just a perfect tooth.
              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800" style={{fontSize: '16px'}}>
              Ankit S.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="md:col-span-4 relative">
            {/* Video Thumbnail */}
            <div className="relative rounded-lg overflow-hidden ">
              <img 
                src={ClientVideo} 
                alt="Client testimonial video" 
                style={{width: '460px', height: '270px'}}
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{backgroundColor: '#E3B077'}}
                >
                  <svg className="w-8 h-8 ml-1" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Closing Quotes */}
            <div className="absolute -bottom-5 -right-0.5">
              <img src={ClosingQuotes} alt="Closing quotes" className="w-18 h-18" />
            </div>
            
          </div>
        </div>

        {/* Click More Button */}
        <div className="flex  ">
          <button className="py-2.5 px-7 rounded-lg font-semibold transition-colors hover:opacity-90" style={{backgroundColor: '#0267AC', fontSize: '17px', color: '#FFFFFF'}}>
            Click More
          </button>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import dentalCrownImage from '../../components/assets/Page2/Dental Crown_.svg';

const ContentSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-16">
      {/* Introductory Paragraph */}
      <div className="mb-3 md:mb-16 -mt-3 ml-0 md:ml-2">
        <p className="text-xs text-left md:text-lg lg:text-[25px] text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif',lineHeight: '1.8',letterSpacing: '1.0px' }}>
          At <strong>Sasha Luxe</strong>, we specialize in premium dental crowns and veneers that combine cutting-edge technology with aesthetic excellence. Whether you're restoring damaged teeth, strengthening weakened ones, or upgrading your smile, our custom-fit solutions are durable, natural-looking, and luxuriously comfortable.
        </p>
      </div>

      {/* What Is a Dental Crown Section */}
      <div className="bg-white-50 py-6 md:py-8 lg:py-12">
        {/* Heading */}
        <h2 className="font-bold text-[#0067AC] text-center mb-3 md:mb-12 text-md md:text-3xl lg:text-[41px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          What Is a Dental Crown?
        </h2>

        {/* Content with Image */}
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-12 ml-0 md:ml-3">
          {/* Text Content */}
          <div className="flex-1 w-full">
            <p className="text-xs text-left md:text-base lg:text-[23px] text-gray-700 font-small font-Montserrat" style={{ letterSpacing: '0.9px',fontFamily: 'Montserrat, sans-serif',lineHeight: '1.8' }}>
              A <strong>dental crown</strong> is a custom-made cap that covers a damaged, decayed, or weakened tooth restoring its strength, shape, and appearance. Crowns are ideal after root canal treatments, for cracked or broken teeth, or to replace old metal caps with natural-looking alternatives.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 mt-0 md:mt-0.5 w-full lg:w-auto">
            <img 
              src={dentalCrownImage} 
              alt="Dental Crown Consultation" 
              className="rounded-2xl md:rounded-3xl w-full max-w-full md:w-auto lg:w-[520px] lg:h-[290px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

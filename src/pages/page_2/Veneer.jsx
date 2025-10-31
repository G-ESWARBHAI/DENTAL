import React from 'react';

const Veneer = () => {
  return (
    <div className="max-w-7xl mx-auto -mt-20 px-6 md:px-12 ">
      {/* What Is a Veneer Section */}
      <div className="bg-white-50 py-8 md:py-12">
        {/* Heading */}
        <h2 className="font-bold text-[#0067AC] text-center mb-7" style={{ fontSize: '41px' }}>
          What Is a Veneer?
        </h2>

        {/* Content */}
        <div className="flex ">
          <div className="max-w-[1150px] ">
            <p className="text-[23px] text-gray-700 font-small font-Montserrat mx-auto" style={{ letterSpacing: '0.9px',lineHeight: '1.8' }}>
              A <strong>dental veneer</strong> is a thin, custom-crafted shell bonded to the front of the tooth to enhance color, shape, alignment, or size. It's a minimally invasive option for a smile makeover.
            </p>
          </div>
        </div>
      </div>

      {/* Our Veneers for Smile Perfection Section */}
      <div className="py-16 -mt-10">
        {/* Heading */}
        <h2 className="font-bold text-[#0067AC] text-center mb-8" style={{ fontSize: '41px' }}>
          Our Veneers for Smile Perfection
        </h2>

        {/* Veneer Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-[1150px] mx-auto">
          {/* Zirconium Veneer Card */}
          <div className="p-16 rounded-3xl shadow-lg" style={{width: '515px', height: '316px', background: 'linear-gradient(180deg,rgb(186, 213, 234)  0%, #FFFFFF 100%)'}}>
            <h3 className="text-3xl font-bold text-gray-800 mb-3" >
              Zirconium Veneer
            </h3>
            <p className=" text-gray-700"style={{letterSpacing: '0.5px',fontSize: '21px'}} >
              Durable, stain-resistant, and ideal for long-term corrections without compromising strength.
            </p>
          </div>

          {/* Emax Veneer Card */}
          <div className="p-16 rounded-3xl shadow-lg" style={{width: '515px', height: '316px', background: 'linear-gradient(180deg,rgb(186, 213, 234) 0%, #FFFFFF 100%)'}}>
            <h3 className="text-3xl font-bold text-gray-800 mb-3" >
              Emax Veneer
            </h3>
            <p className=" text-gray-700"style={{letterSpacing: '0.5px',fontSize: '21px'}} >
              The gold standard in cosmetic dentistry. Ultra-thin and luminous ideal for reshaping, whitening, or closing gaps without bulk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veneer;


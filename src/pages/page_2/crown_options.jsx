import React from 'react';
import StainlessSteelCrownIcon from '../../components/assets/Page2/Stainless.svg';

const CrownOptions = () => {
  const crownOptions = [
    {
      id: 1,
      title: "Stainless Steel Crown",
      icon: "stainless-steel-crown-icon",
      description: "Durable Protection for Young Smiles. Often used in pediatric dentistry, stainless steel crowns are cost-effective, pre-fabricated solutions ideal for restoring baby teeth.",
      features: [
        "Budget-friendly",
        "Quick placement", 
        "Primarily for temporary use in children"
      ]
    },
    {
      id: 2,
      title: "DMLS (Metal-Ceramic) Crown - 10-Year Warranty",
      icon: "dmls-crown-icon",
      description: "Strength Meets Aesthetics. This crown combines a strong metal base with a ceramic exterior for a natural appearance and lasting durability.",
      features: [
        "Strong and reliable",
        "Ideal for molars and back teeth",
        "Backed by a 10-year warranty"
      ]
    },
    {
      id: 3,
      title: "Zirconium Crowns 5, 10, & 15-Year Warranty",
      icon: "zirconium-crown-icon",
      description: "Our Most Popular Premium Option. Zirconia crowns offer exceptional strength and longevity with a natural appearance that blends seamlessly with your smile.",
      features: [
        "Metal-free and biocompatible",
        "Superior aesthetics",
        "Multiple warranty options available"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-5 ">
      <div className="w-full max-w-[1150px] mx-auto">
        <h1 className="text-[42px] font-bold text-[#0267AC] text-center mb-6 relative" style={{fontFamily: 'Montserrat, sans-serif',}}>
          Our Crown Options
         
        </h1>
        
        <div className="flex flex-col gap-8">
          {/* Stainless Steel Crown */}
          <div className="p-16 mb-0 relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-5 flex items-center gap-4 ">
              <img 
                src={StainlessSteelCrownIcon} 
                alt="stainless-steel-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="font-bold text-black leading-tight text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '29px'}}>
                Stainless Steel Crown
              </h2>
            </div>
            
            <div className="flex gap-12 ">
              {/* Left side - Content/Description */}
                <div className="flex-1 ">
                  <p className="text-gray-700 leading-relaxed font-bold text-[#0392D44] mb-2" style={{fontSize: '22px'}}>
                    Durable Protection for Young Smiles.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[#0267AC]" style={{fontSize: '20px',letterSpacing: '0.6px'}}>
                    Often used in pediatric dentistry, stainless steel crowns are cost-effective, pre-fabricated solutions ideal for restoring baby teeth.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1  -mt-6 -mr-6">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Budget-friendly
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700  text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif' ,fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Quick placement
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700  text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif' ,fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Primarily for temporary use in children
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DMLS Crown */}
          <div className="p-16 mb-0 relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-6 flex items-center gap-4">
              <img 
                src="/src/components/assets/Page2/DMLS.svg" 
                alt="dmls-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="font-bold text-black  text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '29px', lineHeight: '1.1'}}>
                DMLS (Metal-Ceramic)<br />Crown - 10-Year Warranty
              </h2>
            </div>
            
            <div className="flex gap-12">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-bold text-[#0392D44] mb-2" style={{fontSize: '22px'}}>
                    Strength Meets Aesthetics.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[#0267AC]" style={{fontSize: '20px',letterSpacing: '0.6px'}}>
                    This crown combines a strong metal base with a ceramic exterior for a natural appearance and lasting durability.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1 -mt-11 -mr-6">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Strong and reliable
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Ideal for molars and back teeth
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Backed by a 10-year warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zirconium Crown */}
          <div className="p-16 mb-0 relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-6 flex items-center gap-4">
              <img 
                src="/src/components/assets/Page2/Zirconium.svg" 
                alt="zirconium-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="font-bold text-black  text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '29px', lineHeight: '1.1'}}>
              Zirconium Crowns<br />5, 10, & 15-Year Warranty
              </h2>
            </div>
            
            <div className="flex gap-12">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-bold text-[#0392D44] mb-2" style={{fontSize: '22px'}}>
                    Our Most Popular Premium Option.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[#0267AC] mb-4" style={{fontSize: '20px',letterSpacing: '0.6px'}}>
                    Zirconia crowns offer exceptional strength and longevity with a natural appearance that blends seamlessly with your smile.
                  </p>
                  
              
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1 -mt-11 -mr-6">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Metal-free and biocompatible
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Superior aesthetics
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Multiple warranty options available
                  </li>
                </ul>
              </div>
            </div>
                {/* Warranty Options Section */}
                <div className="mt-6 ml-8">
                    <ul className="list-none p-0 m-0">
                      <li className="flex items-start mb-4 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '22px',letterSpacing: '0.6px'}}>
                        <span className="flex items-start justify-start mr-3 flex-shrink-0 ">
                          <img src="/src/components/assets/Page2/checkmark (1) 1.svg" alt="checkmark" className="w-7 h-7" />
                        </span>
                        <span><strong>5-Year Zirconia:</strong> Durable and aesthetic for mid-term use</span>
                      </li>
                      <li className="flex items-start mb-4 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '22px',letterSpacing: '0.6px'}}>
                        <span className="flex items-start justify-start mr-3 flex-shrink-0 ">
                          <img src="/src/components/assets/Page2/checkmark (1) 1.svg" alt="checkmark" className="w-7 h-7" />
                        </span>
                        <span><strong>10-Year Zirconia:</strong> Enhanced longevity with natural appearance</span>
                      </li>
                      <li className="flex items-start mb-0 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '22px',letterSpacing: '0.6px'}}>
                        <span className="flex items-start justify-start mr-3 flex-shrink-0 ">
                          <img src="/src/components/assets/Page2/checkmark (1) 1.svg" alt="checkmark" className="w-7 h-7" />
                        </span>
                        <span><strong>15-Year Zirconia:</strong> Elite-grade, ultra-durable, and highly aesthetic</span>
                      </li>
                    </ul>
                  </div>
          </div>

          {/* Emax Crowns */}
          <div className="p-16 mb-0 relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-4 flex items-center gap-4">
              <img 
                src="/src/components/assets/Page2/Emax Crowns.svg" 
                alt="emax-crown-icon"
                className="w-18 h-18"
              />
              <h2 className="font-bold text-black text-[#392D44] -ml-1" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '29px'}}>
                Emax Crowns
              </h2>
            </div>
            
            <div className="flex gap-12">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-bold text-[#0392D44] mb-2" style={{fontSize: '22px'}}>
                    The Crown of Choice for Smile Makeovers.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[#0267AC] mb-4" style={{fontSize: '20px',letterSpacing: '0.6px'}}>
                    Made from lithium disilicate ceramic, Emax crowns offer unmatched translucency perfect for visible teeth.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1 -mt-11 -mr-6">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Ultra-natural appearance
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Strong and metal-free
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Ideal for cosmetic upgrades
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Post and Core */}
          <div className="p-16 mb-0 relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-5 flex items-center gap-4">
              <img 
                src="/src/components/assets/Page2/POST AND CORE.svg" 
                alt="post-core-icon"
                className="w-18 h-18"
              />
              <h2 className="font-bold text-black text-[#392D44] -ml-2" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '29px'}}>
                Post and Core (Per Tooth)
              </h2>
            </div>
            
            <div className="flex gap-12">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-bold text-[#0392D44] mb-2" style={{fontSize: '22px'}}>
                    Structural Reinforcement for Damaged Teeth.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[#0267AC] mb-4" style={{fontSize: '20px',letterSpacing: '0.6px'}}>
                    For severely damaged or root canal-treated teeth, a post and core provides internal support before crown placement.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1 -mt-11 -mr-6">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Rebuilds and reinforces tooth structure
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Provides strong base for crown
                  </li>
                  <li className="flex items-center mb-6 text-base font-bold text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif',fontSize: '19px'}}>
                    <span className=" text-white rounded-full w-27 h-27 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src="/src/components/assets/Page2/TICK.svg" alt="tick" className="w-27 h-27" />
                    </span>
                    Custom-fitted for maximum stability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrownOptions;

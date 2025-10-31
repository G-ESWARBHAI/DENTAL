import React from 'react';
import GICImage from '../../components/assets/GIC.svg';
import CompositeFillingsImage from '../../components/assets/Composite Fillings.svg';
import CompositeVeneersImage from '../../components/assets/Composite Veneers.svg';
import Benefits from './Benifits';
import WhyChoose from './WhyChoose';
import Frequently from './Frequently';

export default function Restorations() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 -mt-8">
      <div className="max-w-4xl mx-auto mb-60">
        {/* Main Heading */}
        <h2 className="font-bold text-center mb-10" style={{color: '#0267AC', fontSize: '36px'}}>
          What Are Dental Restorations?
        </h2>
        
        {/* Content */}
        <div className="space-y-12 -ml-24" style={{width: '1105px', height: '90px'}}>
          {/* First Paragraph */}
          <p className="text-lg lg:text-2xl mb-4" style={{color: '#392D44', letterSpacing: '1px', fontSize: '22px', lineHeight: '1.8'}}>
            Dental restorations, also known as fillings, are used to repair teeth that have been damaged by decay, fractures, or wear. At Sasha Luxe, we offer advanced restorative solutions that not only restore the function of your teeth but also enhance their appearance.
          </p>
          
          {/* Second Paragraph */}
          <p className="text-lg lg:text-2xl space-y-8" style={{color: '#392D44', letterSpacing: '1px', fontSize: '22px', lineHeight: '1.8'}}>
            We use modern materials like Composite Resin, GIC (Glass Ionomer Cement), and Composite Veneers to deliver durable, aesthetic, and minimally invasive treatments tailored to your needs.
          </p>
        </div>
      </div>
      
      {/* Types of Restorations Section */}
      <div className="mt-16">
        <h1 className="font-bold text-center mb-12" style={{color: '#0267AC', fontSize: '38px'}}>
          Types of Restorations We Offer
        </h1>
        
        {/* GIC Fillings Card */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-8 mx-auto" style={{maxWidth: '910px'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
            {/* Left Side - Image */}
            <div className="flex justify-start h-full">
              <img 
                src={GICImage} 
                alt="Dental patient with GIC filling procedure"
                className="w-60 h-full rounded-l-2xl object-cover"
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="space-y-4 -ml-40 p-2">
              <h3 className="text-2xl font-bold" style={{color: '#0267AC',fontSize: '28px'}}>
                GIC (Glass Ionomer Cement) Fillings
              </h3>
              <p className="text-base leading-relaxed" style={{color: '#392D44', letterSpacing: '1.5px', fontSize: '18px', lineHeight: '1.6'}}>
                GIC is a tooth-colored restorative material that chemically bonds to the tooth structure and releases fluoride over time—helping to protect against further decay.
              </p>
            </div>
          </div>
        </div>
        
      
        
        {/* Best For and Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto mb-12">
          {/* Best For Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Best For:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Pediatric (children's) fillings</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Non-load bearing areas (e.g., near the gumline)</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Patients with high caries (cavity) risk</span>
              </li>
            </ul>
          </div>
          
          {/* Advantages Section */}
          <div className="space-y-3 ml-10">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Advantages:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Fluoride-releasing for added protection</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Strong adhesion to enamel and dentin</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Gentle on the tooth structure</span>
              </li>
            </ul>
          </div>
        </div>
          {/* Composite Fillings Card */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-8 mx-auto" style={{maxWidth: '910px'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-start h-full">
              <img 
                src={CompositeFillingsImage} 
                alt="Dental patient with composite filling procedure"
                className="w-60 h-full rounded-l-2xl object-cover"
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="space-y-4 -ml-40 p-2">
              <h3 className="text-2xl font-bold" style={{color: '#0267AC', fontSize: '28px'}}>
                Composite Fillings
              </h3>
              <p className="text-base leading-relaxed" style={{color: '#392D44', letterSpacing: '1.5px', fontSize: '18px', lineHeight: '1.6'}}>
                Composite (tooth-colored) fillings are made of a resin-based material that is both strong and highly aesthetic. They are ideal for repairing small to moderate cavities, chips, or worn edges while blending seamlessly with your natural tooth.
              </p>
            </div>
          </div>
        </div>
        {/* Composite Fillings - Ideal For and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mb-12 mx-auto">
          {/* Ideal For Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Ideal For:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Front and back teeth</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Replacing old silver (amalgam) fillings</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Repairing chipped or fractured enamel</span>
              </li>
            </ul>
          </div>
          
          {/* Benefits Section */}
          <div className="space-y-3 ml-10">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Benefits:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Excellent aesthetic match to natural teeth</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Preserves more of the original tooth</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Durable and long-lasting with proper care</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Composite Veneers Card */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-8 mx-auto" style={{maxWidth: '910px'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-start h-full">
              <img 
                src={CompositeVeneersImage} 
                alt="Dental patient with composite veneer procedure"
                className="w-60 h-full rounded-l-2xl object-cover"
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="space-y-4 -ml-40 p-2">
              <h3 className="text-2xl font-bold" style={{color: '#0267AC', fontSize: '28px'}}>
                Composite Veneers
              </h3>
              <p className="text-base leading-relaxed" style={{color: '#392D44', letterSpacing: '1.5px', fontSize: '18px', lineHeight: '1.6'}}>
                A Composite Veneer is a thin layer of tooth-colored resin applied to the front surface of a tooth to improve its shape, color, or alignment. Unlike porcelain veneers, composite veneers are applied directly and sculpted chairside in a single visit.
              </p>
            </div>
          </div>
        </div>
        
        {/* Composite Veneers - Perfect For and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          {/* Perfect For Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Perfect For:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Discolored, chipped, or slightly misaligned teeth</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Closing small gaps</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Patients seeking affordable smile makeovers</span>
              </li>
            </ul>
          </div>
          
          {/* Benefits Section */}
          <div className="space-y-3 ml-10">
            <h4 className="text-lg font-bold mb-4" style={{color: '#0267AC', fontSize: '29px'}}>
              Benefits:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Immediate results in one appointment</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Cost-effective alternative to porcelain veneers</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 mr-3 text-xl font-bold">✓</span>
                <span style={{color: '#392D44', fontSize: '18px'}}>Can be repaired or modified easily</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Why Choose Sasha Luxe Section */}
      {/* <WhyChoose /> */}
      
      {/* Frequently Asked Questions Section */}
    </div>
  );
}

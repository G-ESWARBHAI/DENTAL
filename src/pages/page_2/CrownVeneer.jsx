import React from 'react';
import ScheduleIcon from '../../components/assets/Page2/SCHEDULE.svg';
import AvoidHardIcon from '../../components/assets/Page2/AVOID HARD.svg';
import BrushFlossIcon from '../../components/assets/Page2/BRUSH AND FLOSS.svg';
import UseNonIcon from '../../components/assets/Page2/USE NON.svg';

export default function CrownVeneerCareTips() {
  return (
    <div className="py-16 px-4" style={{backgroundColor: '#EBF7FF'}}>
      <div className="max-w-[1180px] -mt-5 mx-auto">
        {/* Main Heading */}
        <h2 className="text-center mb-12 font-bold" style={{color: '#0267AC', fontSize: '40px'}}>
          Crown & Veneer Care Tips
        </h2>
        
        {/* Care Tips Grid - 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 1: Brush and Floss */}
          <div className="flex flex-col  bg-white rounded-3xl p-8  shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img 
                src={BrushFlossIcon} 
                alt="Brush and floss icon"
                className="w-16 h-16 ml-1"
              />
            </div>
            <h3 className="ml-1" style={{color: '#392D44', fontSize: '19px',letterSpacing: '0.5px'}}>
              Brush and floss daily with care
            </h3>
          </div>

          {/* Card 2: Avoid Hard */}
          <div className="flex flex-col  bg-white rounded-3xl p-8  shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img 
                src={AvoidHardIcon} 
                alt="Avoid hard bites icon"
                className="w-16 h-16 ml-1"
              />
            </div>
            <h3 className="ml-1" style={{color: '#392D44', fontSize: '19px',letterSpacing: '0.5px'}}>
              Avoid hard bites and staining foods
            </h3>
          </div>

          {/* Card 3: Schedule */}
          <div className="flex flex-col  bg-white rounded-3xl p-8  shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img 
                src={ScheduleIcon} 
                alt="Schedule checkup icon"
                className="w-16 h-16 ml-1"
              />
            </div>
            <h3 className="ml-1" style={{color: '#392D44', fontSize: '19px',letterSpacing: '0.5px'}}>
              Schedule check-ups every 6 months
            </h3>
          </div>

          {/* Card 4: Use Non */}
          <div className="flex flex-col  bg-white rounded-3xl p-8  shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img 
                src={UseNonIcon} 
                alt="Use non-abrasive toothpaste icon"
                className="w-16 h-16 ml-1"
              />
            </div>
            <h3 className="ml-1" style={{color: '#392D44', fontSize: '19px',letterSpacing: '0.5px'}}>
              Use non-abrasive toothpaste for veneers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}


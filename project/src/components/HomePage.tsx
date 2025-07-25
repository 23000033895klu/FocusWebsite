import React from 'react';
import Herosection from '../page/Herosection';
import MissionSection from '../page/MissionSection';
import PlanSection from '../page/PlanSection';
import CallToActionMain from '../page/CallToActionMain';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen  text-[#0D1B2A]">
      <Herosection />
      <MissionSection />
      <PlanSection />
      <CallToActionMain />
    </div>
  );
};

export default HomePage;

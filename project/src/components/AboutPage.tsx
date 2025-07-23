import React from 'react';

import AboutTitle from '../page/AboutTitle';
import MainDescription from '../page/MainDescription';
import MetricsSection from '../page/MetricsSection';
import WingsSection from '../page/WingsSection';
import HierarchySection from '../page/HierarchySection';
import LeadershipSection from '../page/LeadershipSection';

const AboutPage: React.FC = () => {
  return (
      <div>
        <AboutTitle />
        <MainDescription />
        <MetricsSection />
        <WingsSection />
        <HierarchySection />
        <LeadershipSection />
      </div>
  );
};

export default AboutPage;

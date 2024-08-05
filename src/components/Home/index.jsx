import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WorkFlow from './WorkFlow';
import Pricing from './Pricing';

const index = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <FeaturesSection />
        <WorkFlow />
        <Pricing />
      </div>
    </div>
  );
};

export default index;

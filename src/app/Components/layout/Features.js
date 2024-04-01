import React from 'react';
import FeatureCard from './FeatureCard';

function Features() {
  return (<>
        <div className='text-white text-4xl text-center font-bold mb-10'>Our Features</div>

    <div className="flex justify-center gap-8">
        
      <div className="flex">
        <FeatureCard
          title="Feature 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          buttonText="Learn More"
        />
      </div>
      <div className="flex">
        <FeatureCard
          title="Feature 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Explore"
        />
      </div>
      <div className="flex">
        <FeatureCard
          title="Feature 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          buttonText="Try Now"
        />
      </div>
    </div> </>
  );
}

export default Features;

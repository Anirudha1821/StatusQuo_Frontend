import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <>
      <div className="text-white text-4xl text-center font-bold mb-10">
        Our Features
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex-1">
          <FeatureCard
            title="Analysis and Reporting"
            description="Feature description goes here."
            buttonText="Learn More"
            photoSrc="./f1.png"
          />
        </div>
        <div className="flex-1">
          <FeatureCard
            title="User Friendly"
            description="Feature description goes here."
            buttonText="Learn More"
            photoSrc="./f2.png"
          />
        </div>
        <div className="flex-1">
          <FeatureCard
            title="Suitable for all Organizations"
            description="Feature description goes here."
            buttonText="Learn More"
            photoSrc="./f3.png"
          />
        </div>
      </div>{" "}
    </>
  );
}

export default Features;

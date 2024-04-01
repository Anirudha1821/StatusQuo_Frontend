import React from 'react';

function FeatureCard({ title, description, buttonText }) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-gradient-to-br from-neonPink to-neonBlue p-6">
      <div className="text-white font-bold text-xl mb-2">{title}</div>
      <p className="text-white text-base">{description}</p>
      {buttonText && (
        <button className="mt-4 bg-white text-neonPink font-semibold py-2 px-4 rounded-lg border border-neonPink hover:bg-transparent hover:text-white transition duration-300">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default FeatureCard;

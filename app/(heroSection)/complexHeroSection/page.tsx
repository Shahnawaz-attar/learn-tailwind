// components/Layouts/ComplexHeroSection.tsx
import React from "react";

const ComplexHeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-green-800 text-white  p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold">
          Discover a New World of Possibilities
        </h1>
        <p className="mt-4 text-xl">
          Elevate your experience with our cutting-edge solutions and innovative
          features.
        </p>
        <div className="mt-8">
          <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexHeroSection;

import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="mt-3 relative flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="relative z-10 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={assets.seacucumber} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Overlay Text */}
      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white z-10 px-4 sm:px-6 max-w-md sm:max-w-3xl">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Innovative Solutions for Sustainable Sea Cucumber Farming
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Pioneering responsible aquaculture practices to ensure top-quality
          seafood for global markets
        </p>
      </div>
    </div>
  );
};

export default Banner;

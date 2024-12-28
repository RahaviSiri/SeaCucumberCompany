import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source src={assets.seacucumber} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>

      {/* Overlay Text */}
      <div className="absolute left-4 sm:left-8 md:left-10 top-1/2 transform -translate-y-1/2 text-black z-10 px-4 sm:px-6 max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Innovative Solutions for <br /> Sustainable Sea Cucumber Farming
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Pioneering responsible aquaculture practices to ensure top-quality
          seafood for global markets
        </p>
      </div>
    </div>
  );
};

export default Banner;

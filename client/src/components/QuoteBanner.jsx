import React from 'react';
import { assets } from "../assets/assets";

const QuoteBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center rouned-xl shadow-xl my-3 p-3 text-center">
      {/* Image */}
      <div className="">
        <img 
          src={assets.Cucumber_5} 
          alt="Sea Cucumber" 
          className="sm:w-80 w-32 h-auto"
        />
      </div>
      {/* Quote Text */}
      <div className="text-xl sm:text-5xl font-semibold text-amber-950 leading-relaxed ">
        Sea Cucumber Farming and Nursary
      </div>
    </div>
  );
};

export default QuoteBanner;

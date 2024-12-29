import React from 'react';
import { assets } from '../assets/assets';

const Body = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white p-6 bg-cover bg-center min-h-full sm:h-3/4 mt-3"
      style={{ backgroundImage: `url(${assets.Cucumber_3})` }}
    >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
      
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold m-3">
                Sustainable Seafood Solutions for International Trade
            </h1>
            <p className="text-lg md:text-xl">
            Indo Ocean Holding Pvt. Ltd. began its journey in 2022, driven by a
            vision to revolutionize international trade and foster sustainable
            aquaculture. With a focus on innovation and growth, we established our
            state-of-the-art sea cucumber farming and processing facility to meet
            the rising demand for responsibly sourced aquaculture products. Our
            commitment to sustainability and excellence underscores everything we
            do, ensuring that we deliver value to both our clients and the
            environment. As we progress, Indo Ocean Holding Pvt. Ltd. continues to
            expand its horizons, offering a range of services that harmonize global
            trade with environmentally conscious aquaculture practices.
            </p>
        </div>
    </div>
  );
};

export default Body;

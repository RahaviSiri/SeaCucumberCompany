import React from 'react';
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div className='flex flex-col gap-6'>
      {/* Main Section */}
      <div className='flex flex-col sm:flex-row bg-sky-100 mt-2 p-6 rounded-lg shadow-lg sm:gap-6'>
        {/* Text Section */}
        <div className='sm:w-2/3 w-full'>
          <h1 className='text-4xl sm:text-5xl text-sky-800 font-semibold'>
            Pioneering Agricultural Innovation in Jaffna, Sri Lanka
          </h1>
          <p className='text-lg sm:text-xl mt-4'>
            We are thrilled to announce that Indo Ocean Holding Pvt Ltd. has been honored for its exceptional contribution to the Agriculture Sector Modernization Project under the Ministry of Plantation and Community Infrastructure, with support from The World Bank Group. Our project, titled "Revitalizing the Sea Cucumber Industry in Jaffna," has played a pivotal role in advancing agricultural innovation, adding value to the sea cucumber sector, and fostering substantial socioeconomic growth in Sri Lanka.
            <br /><br />
            Mr. M. Thivagaran, Chairman of Indo Ocean Holding Pvt Ltd., proudly accepted this prestigious Project Completion Certificate in recognition of our team's tireless efforts in transforming the sea cucumber industry. This accomplishment marks a key milestone in our continuous commitment to sustainable aquaculture practices and community-driven initiatives.
            <br />
            <p className='mt-3 font-light'>
              <span className='italic'>
                As leaders in the sea cucumber farming industry, this recognition motivates us to further strengthen our focus on creating economic opportunities for local coastal communities while promoting environmental sustainability.
              </span>
            </p>
          </p>
        </div>

        {/* Image Section */}
        <div className='sm:w-1/3 w-full flex items-center justify-center mt-4 sm:mt-0'>
          <img
            src={assets.Marketing}
            alt="Sea Cucumber Industry"
            className='rounded-xl sm:max-w-full object-cover'
          />
        </div>
      </div>

      {/* Secondary Sections */}
      <div className='flex flex-col gap-6 m-5'>
        {/* Title and Description */}
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-semibold text-sky-700'>Sea Cucumber Industry Revitalization</h2>
          <p className='text-lg sm:text-xl mt-2 text-gray-700'>
            Transforming Jaffna's Sea Cucumber Sector for Socioeconomic Progress.
          </p>
        </div>

        {/* Project Completion and Award Recognition */}
        <div className='flex flex-col gap-7'>
          {/* Project Completion Section */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
            <img
              src={assets.Farming}
              alt="Farming"
              className='rounded-lg shadow-lg w-full sm:w-72 object-cover'
            />
            <div className='flex flex-col items-start justify-center'>
              <h3 className='text-lg sm:text-xl font-semibold mt-4'>Project Completion</h3>
              <p className='text-md sm:text-lg mt-2'>
                Our initiative has revolutionized the agricultural landscape, boosting innovation and value addition in Sri Lanka's sea cucumber industry.
              </p>
            </div>
          </div>

          {/* Award Recognition Section */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
            <div className='flex flex-col items-start justify-center text-left'>
              <h3 className='text-lg sm:text-xl font-semibold'>Award Recognition</h3>
              <p className='text-md sm:text-lg mt-2'>
                Indo Ocean Holding Pvt Ltd. was honored with a certificate from The World Bank Group for exceptional contributions to agricultural modernization.
              </p>
            </div>
            <img
              src={assets.Gallery_3}
              alt="Award Recognition"
              className='rounded-lg shadow-lg w-full sm:w-72 object-cover mt-4 sm:mt-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

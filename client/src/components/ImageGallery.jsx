import React from 'react';
import { assets } from '../assets/assets';
import "./ImageGallery.css"

const ImageGallery = () => {
  return (
    <div className="overflow-x-hidden my-8 bg-sky-800 p-7">
      <h1 className="text-center text-4xl text-sky-300">Nurturing Marine Ecosystems</h1>
      <p className="text-center text-white mt-3 sm:mt-1 sm:text-lg">
        Discover how our innovative sea cucumber farming supports biodiversity while meeting global seafood demands responsibly
      </p>
      <div className="flex gap-4 p-4 animate-marquee">
        <img
          src={assets.Gallery_1}
          alt="Gallery Image 1"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_2}
          alt="Gallery Image 2"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_3}
          alt="Gallery Image 3"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_4}
          alt="Gallery Image 4"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_5}
          alt="Gallery Image 5"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_6}
          alt="Gallery Image 6"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
        <img
          src={assets.Gallery_7}
          alt="Gallery Image 7"
          className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ImageGallery;

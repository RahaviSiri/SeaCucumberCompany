import React from 'react';
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img 
          src={assets.logo} 
          alt="Company Logo" 
          className="w-20 sm:w-28 md:w-32 lg:w-40" 
        />
      </Link>
      
      {/* Social Icons */}
      <div className="flex space-x-4">
        <i className="fa-brands fa-facebook text-2xl sm:text-3xl lg:text-4xl text-blue-700"></i>
        <i className="fa-brands fa-twitter text-2xl sm:text-3xl lg:text-4xl text-blue-500"></i>
        <i className="fa-brands fa-instagram text-2xl sm:text-3xl lg:text-4xl text-pink-600"></i>
      </div>
    </div>
  );
};

export default Header;

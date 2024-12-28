import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <nav className="bg-white shadow-xl">
      <div className="mx-auto px-4 flex justify-between items-center py-2">
        {/* Hamburger Icon */}
        <div className="lg:hidden flex flex-col items-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? (
              " " 
            ) : (
              <i className="fa-solid fa-bars"></i> 
            )}
          </button>
        </div>

        {/* Nav Items for large screens */}
        <ul
          className={`left-0 w-full bg-white lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent lg:flex-row lg:gap-6 transition-transform duration-300 text-xl ${
            isMenuOpen ? 'block' : 'hidden lg:flex'
          }`}
        >
          <li className="p-2 font-medium text-blue-gray-700">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center rounded hover:bg-blue-200 p-2 transition-colors"
            >
              Home
            </button>
          </li>
          <li className="p-2 font-medium text-blue-gray-700">
            <button
              onClick={() => handleNavigation('/about')}
              className="flex items-center rounded hover:bg-blue-200 p-2 transition-colors"
            >
              About Us
            </button>
          </li>
          <li className="p-2 font-medium text-blue-gray-700">
            <button
              onClick={() => handleNavigation('/seacucumber')}
              className="flex items-center rounded hover:bg-blue-200 p-2 transition-colors"
            >
              Sea Cucumber
            </button>
          </li>
          <li className="p-2 font-medium text-blue-gray-700">
            <button
              onClick={() => handleNavigation('/services')}
              className="flex items-center rounded hover:bg-blue-200 p-2 transition-colors"
            >
              Services
            </button>
          </li>
          <li className="p-2 font-medium text-blue-gray-700">
            <button
              onClick={() => handleNavigation('/contact')}
              className="flex items-center rounded hover:bg-blue-200 p-2 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

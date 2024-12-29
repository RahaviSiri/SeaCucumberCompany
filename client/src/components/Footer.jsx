import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6 my-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start gap-6">
        {/* Company Info */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
            Indo ocean holding Pvt ltd
          </h3>
          <p className="text-sm sm:text-base mb-4">
            Committed to responsible aquaculture and quality export.
          </p>
          <div className="flex space-x-4">
            <i className="fa-brands fa-facebook text-2xl sm:text-3xl lg:text-4xl text-blue-700 hover:text-blue-500"></i>
            <i className="fa-brands fa-twitter text-2xl sm:text-3xl lg:text-4xl text-blue-500 hover:text-blue-300"></i>
            <i className="fa-brands fa-instagram text-2xl sm:text-3xl lg:text-4xl text-pink-600 hover:text-pink-400"></i>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-semibold mb-2">Contact</p>
          <p className="text-sm sm:text-base mb-1 flex items-center">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <span className="ml-2">Address: 687/13, Beach Road, Jaffna</span>
          </p>
          <p className="text-sm sm:text-base mb-1 flex items-center">
            <i className="fa-solid fa-phone"></i>
            <span className="ml-2">Telephone: +94 71 5555 552</span>
          </p>
          <p className="text-sm sm:text-base flex items-center">
            <i className="fa-solid fa-envelope"></i>
            <span className="ml-2">Email: ealstevenson@gmail.com</span>
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-semibold mb-2">
            For More Information
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-400">
            Call Us
          </button>
        </div>
      </div>
      <div className='mt-3'>
        <hr />
        <p className='text-center mt-2'>Indo ocean holding Pvt ltd <span className='text-sky-400'>©</span> 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

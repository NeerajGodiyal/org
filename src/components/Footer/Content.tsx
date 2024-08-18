import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 font-sans dark:bg-gray-900 text-white py-12 h-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">

          {/* Newsletter Subscription Section */}
          <div className="lg:w-1/3 w-full">
            <h1 className="text-xl lg:text-2xl font-semibold mb-4">Subscribe to our newsletter to get updates.</h1>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-3 lg:space-y-0">
              <input
                id="email"
                type="text"
                className="px-4 py-3 text-gray-700 bg-white border-none rounded-md focus:ring focus:ring-opacity-40 focus:ring-blue-300 w-full lg:w-auto"
                placeholder="Email Address"
              />
              <button className="px-6 py-3 text-sm font-medium tracking-wider transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80 mt-3 lg:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row lg:w-2/3 w-full lg:space-x-16 space-y-10 lg:space-y-0">
            <div className="flex-1 space-y-5">
              <p className="text-lg font-semibold">Quick Links</p>
              <div className="space-y-2">
                <p className="text-white/80 hover:text-white hover:underline cursor-pointer">Home</p>
                <p className="text-white/80 hover:text-white hover:underline cursor-pointer">Who We Are</p>
                <p className="text-white/80 hover:text-white hover:underline cursor-pointer">Our Events</p>
              </div>
            </div>
            
          </div>
        </div>

        <hr className="my-10 border-white/50" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0 w-full lg:w-auto">
            <p className="text-sm lg:text-base font-light">
              © 2024 All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 lg:gap-6 w-full lg:w-auto justify-center lg:justify-end">
            <FaFacebookF className="text-white hover:text-blue-500 transition-colors duration-300" size={24} />
            <AiOutlineTwitter className="text-white hover:text-blue-400 transition-colors duration-300" size={24} />
            <AiFillYoutube className="text-white hover:text-red-500 transition-colors duration-300" size={24} />
            <BiLogoPinterestAlt className="text-white hover:text-red-400 transition-colors duration-300" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

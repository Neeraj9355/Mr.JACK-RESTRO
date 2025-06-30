import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-4 md:px-8 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright and Brand Info */}
        <div className="mb-6 md:mb-0">
          <p className="text-lg font-semibold">&copy; {currentYear} Swiggy Clone</p>
          <p className="text-sm opacity-90">Crafted with ❤️ by Your Neeraj Sharma</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-6 md:mb-0">
          <Link to="/about" className="hover:text-purple-200 transition-colors duration-200 text-sm md:text-base font-medium">About Us</Link>
          <Link to="/contact" className="hover:text-purple-200 transition-colors duration-200 text-sm md:text-base font-medium">Contact</Link>
          <Link to="/privacy" className="hover:text-purple-200 transition-colors duration-200 text-sm md:text-base font-medium">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-purple-200 transition-colors duration-200 text-sm md:text-base font-medium">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
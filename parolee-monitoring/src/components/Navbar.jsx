import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from './logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-50 text-black py-3 px-6 md:px-12 flex justify-between items-center shadow-md rounded-b-2xl z-50">
      {/* Logo + Title */}
      <div className="flex items-center">
        <img src={logo} alt="Parolee Monitoring Logo" className="h-10 w-auto mr-3" />
        <span className="text-xl font-bold text-gray-800">
          <span className="text-blue-500">Parolee</span> Monitoring
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="hover:text-blue-600 transition duration-200">Home</a>
        <a href="/about" className="hover:text-blue-600 transition duration-200">About Us</a>
        <a href="/contact" className="hover:text-blue-600 transition duration-200">Contact Us</a>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-lg shadow-sm transition">
          Login
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-2 right-2 mt-2 bg-white shadow-lg rounded-xl py-4 md:hidden transition-all duration-300 z-40">
          <div className="flex flex-col items-center space-y-4">
            <a href="/" className="text-black hover:text-blue-600 transition">Home</a>
            <a href="/about" className="text-black hover:text-blue-600 transition">About Us</a>
            <a href="/contact" className="text-black hover:text-blue-600 transition">Contact Us</a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}








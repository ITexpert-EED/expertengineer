import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import './Navbar.css';
 import company_logo from '../../assets/expert-logo.png'
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleService=()=>{
    setDropdownService(!dropdownService);
  }

  return (
    <header className="bg-white shadow-lg h-24 flex items-center justify-between px-6 md:px-10">
      {/* Logo Section */}
      <a href="/" className="flex items-center">
        <img src={company_logo } alt="Logo"  />
      </a>

      {/* Links Section */}
      <nav className="hidden md:flex space-x-6 font-semibold text-lg">
        <a href="/" className="hover:text-gray-700">Home</a>
        
        <div className="relative">
          <span  onClick={toggleService} className="flex items-center hover:text-gray-700 focus:outline-none">
            Services<FiChevronDown className="ml-2" />
          </span>
          {dropdownService && (
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-10">
              <li><a href="/page1" className="block px-4 py-2 hover:bg-gray-100">Retrofitting Works</a></li>
              <li><a href="/page2" className="block px-4 py-2 hover:bg-gray-100">Audits</a></li>
              <li><a href="/page3" className="block px-4 py-2 hover:bg-gray-100">Testing</a></li>
             <li><a href="/page2" className="block px-4 py-2 hover:bg-gray-100">AMC</a></li>
              <li><a href="/page3" className="block px-4 py-2 hover:bg-gray-100">MISC Service</a></li>
            </ul>
          )}
        </div>
        <a href="/about" className="hover:text-gray-700">About</a>
        <a href="/projects" className="hover:text-gray-700">Projects</a>
        {/* <a href="/skills" className="hover:text-gray-700">Skills</a> */}
        <a href="/contacts" className="hover:text-gray-700">Contact</a>

        {/* Dropdown for Pages */}
        <div className="relative">
          <span onClick={toggleDropdown} className="flex items-center hover:text-gray-700 focus:outline-none">
            Products <FiChevronDown className="ml-2" />
          </span>
          {dropdownOpen && (
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-32 z-10">
              <li><a href="/page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
              <li><a href="/page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
              <li><a href="/page3" className="block px-4 py-2 hover:bg-gray-100">Page 3</a></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Social Media Icons and Contact Button */}
      <div className="flex items-center space-x-4">
        {/* Social Media Icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 hover:text-blue-700 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-blue-600 hover:text-blue-800 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-blue-800 hover:text-blue-900 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 hover:text-pink-700 h-6" />
        </a>

        {/* Search Icon */}
        <a href="/search" className="text-gray-500 hover:text-black">
          <FiSearch className="h-6" />
        </a>

        {/* Contact Button */}
        <button className="bg-black hover:bg-gray-800 text-white font-bold px-4 py-2 rounded">
          Contact Me
        </button>
      </div>
    </header>
  );
}

export default Navbar;

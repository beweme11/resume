import React from 'react';
import DarkModeToggle from './Darkmodetoggle'; // Import the DarkModeToggle component

const Navbar = () => {
  return (
    <nav className="transparent shadow-lg rounded hover-bg-gradient">
      <div className="max-w-7xl mx-auto px-4">
      
        <div className="flex justify-between">
          
          <div className="flex space-x-4">
            <DarkModeToggle />
            <a href="/" className="py-4 px-2 hover:underline">Home</a>
            <a href="/services" className="py-4 px-2 hover:underline">Services</a>
            <a href="/about" className="py-4 px-2 hover:underline">About</a>
            <a href="/contact" className="py-4 px-2 hover:underline">Contact</a>
            
             
          </div>
          <div className="hidden md:flex items-center">
            <a href="/login" className="py-4 px-2">Login</a>
            <a href="/signup" className="py-4 px-2">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

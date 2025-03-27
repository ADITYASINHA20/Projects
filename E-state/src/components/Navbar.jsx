import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-50 backdrop-blur-0'>
      {/* Logo */}
      <img src={assets.logo} alt='Logo' className='h-12' />

      {/* Nav Links */}
      <ul className='flex gap-6 text-white flex-nowrap'>
        <li className='hover:text-blue-300 cursor-pointer' onClick={() => handleScroll('Home')}>Home</li>
        <li className='hover:text-blue-300 cursor-pointer' onClick={() => handleScroll('About')}>About</li>
        <li className='hover:text-blue-300 cursor-pointer' onClick={() => handleScroll('Projects')}>Projects</li>
        <li className='hover:text-blue-300 cursor-pointer' onClick={() => handleScroll('Testimonials')}>Testimonials</li>
        <li className='hover:text-blue-300 cursor-pointer' onClick={() => handleScroll('Contact')}>Contact</li>
      </ul>

      {/* Signup Button */}
      <button className='px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 whitespace-nowrap'>
        Signup
      </button>
    </div>
  );
};

export default Navbar;

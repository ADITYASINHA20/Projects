import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black text-white py-10 px-6 md:px-20 lg:px-32'>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        {/* Logo & Description */}
        <div className='w-full md:w-1/3'>
          <img src={assets.logo_dark} alt='Logo' className='mb-4'/>
          <p className='text-gray-400'>Discover your dream property with us. Providing exceptional service and premium listings tailored to your needs.</p>
        </div>

        {/* Links */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-xl mb-4 font-semibold'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><a href='#Home' className='text-gray-400 hover:text-white transition'>Home</a></li>
            <li><a href='#About' className='text-gray-400 hover:text-white transition'>About</a></li>
            <li><a href='#Projects' className='text-gray-400 hover:text-white transition'>Projects</a></li>
            <li><a href='#Testimonials' className='text-gray-400 hover:text-white transition'>Testimonials</a></li>
            <li><a href='#Contact' className='text-gray-400 hover:text-white transition'>Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-xl mb-4 font-semibold'>Subscribe to Our Newsletter</h3>
          <p className='text-gray-400 mb-4'>Get the latest news, articles, and resources sent straight to your inbox.</p>
          <form className='flex flex-col gap-4'>
            <input type='email' placeholder='Your Email' className='p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none' required />
            <button type='submit' className='bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition'>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-gray-500 mt-10'>
        &copy; 2025 YourCompanyName. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;

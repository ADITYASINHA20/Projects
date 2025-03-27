import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      
      <div className='flex flex-col md:flex-row items-center md:item-start md:gap-20'>
        <img src={assets.brand_img} alt='Brand' className='w-full sm:w-1/2 max-w-lg' />
        
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. sq. ft Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className='my-10 max-w-lg text-center md:text-left'>
            Welcome to <strong>DreamNest Estates</strong>, your trusted partner in finding the perfect home. <br />
            Whether you're looking to buy, sell, or rent, we offer a wide range of properties <br />
            that suit every lifestyle and budget. Our platform ensures a seamless experience,<br />
            offering detailed listings, virtual tours, and expert guidance at every step.<br />
            Discover homes, apartments, and commercial spaces in prime locations with us.<br />
            Start your journey towards your dream home today!
          </p>

          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>

        </div>
      </div>
    </div>
  )
}

export default About

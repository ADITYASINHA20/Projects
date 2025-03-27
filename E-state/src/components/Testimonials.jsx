import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        stars.push(<span key={i} className='text-yellow-400'>★</span>);
      } else {
        stars.push(<span key={i} className='text-gray-300'>★</span>);
      }
    }
    return stars;
  };

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
      </h1>
      <p className='mb-6'>Real stories from those who found Home with Us</p>

      {/* Testimonials Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='border rounded-lg shadow-md p-6 bg-white'>
            <p className='text-gray-700 mb-4 italic'>" {testimonial.feedback} "</p>
            <div className='flex items-center mb-4'>
              <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full mr-4'/>
              <div>
                <h3 className='font-semibold'>{testimonial.name}</h3>
                <p className='text-gray-500 text-sm'>{testimonial.location}</p>
                {testimonial.title && <p className='text-gray-400 text-sm'>{testimonial.title}</p>}
                {/* Rating */}
                <div className='mt-2'>{renderStars(testimonial.rating)}</div>
              </div>
            </div>
            {/* Description */}
            {testimonial.description && (
              <p className='text-gray-600 mb-2'>{testimonial.description}</p>
            )}
            {/* Detailed Experience */}
            {testimonial.detailedExperience && (
              <p className='text-gray-500 text-sm'>{testimonial.detailedExperience}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

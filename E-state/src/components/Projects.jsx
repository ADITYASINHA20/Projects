import React, { useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  const projectsPerPage = 3; // how many projects to show at once
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projectsData.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const currentProjects = projectsData.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='mb-6'>Crafting Spaces, Building Legacies - Explore our Portfolio</p>
      
      {/* Arrow Buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button 
          className={`p-2 bg-gray-200 rounded mr-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
          aria-label='Previous Project'
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button 
          className={`p-2 bg-gray-200 rounded ${currentIndex + projectsPerPage >= projectsData.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
          aria-label='Next Project'
          onClick={handleNext}
          disabled={currentIndex + projectsPerPage >= projectsData.length}
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentProjects.map((project, index) => (
          <div key={index} className='border rounded-lg shadow-md overflow-hidden'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-1'>{project.title}</h2>
              <p className='text-gray-500 mb-2'>{project.location}</p> 
              <p className='text-gray-800 font-medium mb-3'>₹ {project.price}</p> 
              <p className='text-gray-600 mb-4'>{project.description}</p>
              <a href={project.link} className='text-blue-600 underline'>View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

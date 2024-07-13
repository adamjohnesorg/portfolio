import React from 'react'
import grad_hat from '../imgs/grad-hat.AVIF'
import laptop from '../imgs/laptop.AVIF'
import stl_seal from '../imgs/city-of-st-louis-seal.png'

const Experience = () =>
{
  return (
    <div id='experienceDiv'
         className='content-div flex flex-col items-center'>
      <div>
        <h1 className='text-primary text-4xl mb-2'>Experience</h1>
      </div>
      <div className='flex flex-col items-center w-10/12 sm:w-11/12'>
        <div className='flex flex-row w-full justify-center gap-5'>
          <div className='flex flex-col w-5/12 bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col'>
              <h1 className='text-primary text-3xl text-center sm:leading-5 sm:text-lg'>Bachelors of Computer Science</h1>
              <span className='text-secondary text-lg text-center sm:text-xs italic'>Southern Illinois University Edwardsville (SIUE)</span>
              <p className='text-secondary text-center sm:text-sm'>
                Graduated from SIUE in the winter with a bachelors in
                computer science
              </p>
            </div>
          </div>
          <div className='separator flex flex-col items-center justify-evenly sm:ml-1
                          sm:mr-1'>
            <div className='flex flex-col items-center justify-center w-12 h-12 
                            rounded-full bg-white border-2 border-black'>
              <img alt='grad-cap' className='opacity-60 w-9/12' src={ grad_hat }></img>
            </div>
          </div>
          <div className='flex flex-col w-5/12 justify-center'>
            <div className='bg-white bg-opacity-20 border border-white
                              border-opacity-10 rounded-xl p-3 justify-center items-center
                              w-6/12 sm:w-10/12 shadow-sm shadow-gray-400'>
              <div className='flex flex-col'>
                <p className='text-secondary text-center'>2019-2022</p>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className='flex flex-row w-full justify-center gap-5'>
          <div className='flex flex-col w-5/12 justify-center items-end'>
            <div className='bg-white bg-opacity-20 border border-white
                              border-opacity-10 rounded-xl p-3 justify-center items-center
                              w-6/12 sm:w-11/12 shadow-sm shadow-gray-400'>
              <div className='flex flex-col'>
                <p className='text-secondary text-center'>2021 - 2024</p>
              </div>
            </div>
          </div>
          <div className='separator flex flex-col items-center justify-evenly sm:ml-1
                          sm:mr-1'>
            <div className='flex flex-col items-center justify-center w-12 h-12 
                            rounded-full bg-white border-2 border-black'>
              <img alt='laptop' className='opacity-60 w-9/12' src={ laptop }></img>
            </div>
          </div>
          <div className='flex flex-col w-5/12 bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col'>
              <h1 className='text-primary text-3xl text-center sm:text-xl sm:leading-5'>Software Coordinator</h1>
              <span className='text-secondary text-lg text-center italic sm:text-xs'>Alfapet Inc.</span>
              <p className='text-secondary text-center sm:text-sm'>
                Increased overall sales by creating a website that analyzes
                cat pan liner data.
              </p>
              <p className='text-secondary text-center sm:text-sm'>
                Maintained software systems with upper management when necessary.
              </p>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className='flex flex-row w-full justify-center gap-5'>
          <div className='flex flex-col w-5/12 bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col'>
              <h1 className='text-primary text-3xl text-center sm:leading-5 sm:text-lg'>Programming Analyst</h1>
              <span className='text-secondary text-lg text-center sm:text-xs italic'>City of St. Louis</span>
              <p className='text-secondary text-center sm:text-sm'>
                Use t-SQL to analyze and make data reports.
              </p>
              <p className='text-secondary text-center sm:text-sm'>
                Work in conjunction with other departments' clients on resolving problems within our cityworks system.
              </p>
            </div>
          </div>
          <div className='separator flex flex-col items-center justify-evenly sm:ml-1
                          sm:mr-1'>
            <div className='flex flex-col items-center justify-center w-12 h-12 
                            rounded-full bg-white border-2 border-black'>
              <img alt='grad-cap' className='opacity-60 w-9/12' src={ stl_seal }></img>
            </div>
          </div>
          <div className='flex flex-col w-5/12 justify-center'>
            <div className='bg-white bg-opacity-20 border border-white
                              border-opacity-10 rounded-xl p-3 justify-center items-center
                              w-6/12 lg:w-8/12 sm:w-10/12 shadow-sm shadow-gray-400'>
              <div className='flex flex-col'>
                <p className='text-secondary text-center'>2024 - present</p>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
      </div>
    </div>
  )
}

export default Experience
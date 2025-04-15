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
          <div className='flex flex-col w-5/12 items-center bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col w-10/12'>
              <h1 className='text-primary text-3xl text-center sm:leading-5 sm:text-lg'>Bachelors of Computer Science</h1>
              <span className='text-secondary text-lg text-center sm:text-xs italic'>Southern Illinois University Edwardsville (SIUE)</span>
              <p className='text-secondary text-center sm:text-sm'>
                Graduated from SIUE in the winter with a bachelors in
                computer science
              </p>
            </div>
          </div>
          <div className='separator flex flex-col items-center justify-evenly rounded-t-full sm:ml-1
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
                <p className='text-secondary text-center'>2022 - 2024</p>
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
          <div className='flex flex-col w-5/12 items-center bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col w-10/12'>
              <h1 className='text-primary text-3xl text-center sm:text-xl sm:leading-5'>Software Engineer Intern</h1>
              <span className='text-secondary text-lg text-center italic sm:text-xs'>Alfapet Inc.</span>
              <p className='text-secondary text-center sm:hidden'>
                Increased overall sales by creating a website that analyzes
                cat pan liner data.
              </p>
              <p className='text-secondary text-center sm:hidden'>
                Maintained software systems with upper management when necessary.
              </p>
              <p className='text-secondary text-center sm:text-[10px]'>
                Saved hundreds of labor hours effectively working with upper management to create an application that sorts and organizes shipping orders on the warehouse floor
              </p>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className='flex flex-row w-full justify-center gap-5'>
          <div className='flex flex-col w-5/12 items-center bg-white bg-opacity-20
                          border border-white border-opacity-10 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
            <div className='flex flex-col w-10/12 items-center'>
              <h1 className='text-primary text-3xl text-center sm:leading-5 sm:text-lg'>Programming Analyst</h1>
              <span className='text-secondary text-lg text-center sm:text-xs italic'>City of St. Louis</span>
              <p className='text-secondary text-center sm:text-[10px]'>
                Develop and maintain CLI tools and scripts to automate daily operations, including sending emails, and executing API calls and webhooks.
              </p>
              <p className='text-secondary text-center sm:hidden'>
                Integrate internal systems with PayIT to ingest, organize, and process payee data for internal use allowing stakeholders to move from paper payment records to online.
              </p>
              <p className='text-secondary text-center sm:hidden'>
                Build complex SQL queries that helps reduce server processing time, generate dynamic data reports and improve the departments overall efficiency.
              </p>
              <p className='text-secondary text-center sm:hidden'>
                Collaborate with internal stakeholders to meet project deadlines and assist with software issues
              </p>
            </div>
          </div>
          <div className='separator flex flex-col items-center justify-evenly rounded-b-full sm:ml-1
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
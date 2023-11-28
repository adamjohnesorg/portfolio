import React from 'react'
import grad_hat from '../imgs/grad-hat.AVIF'
import laptop from '../imgs/laptop.AVIF'

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
              <h1 className='text-primary text-3xl sm:text-xl'>Graduated from SIUE</h1>
              <span className='text-secondary text-2xl sm:text-base'>Edwardsville, IL</span>
              <p className='text-secondary'>
                Studied computer science and graduated in the winter with a bachelors
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
                              w-5/12 sm:w-8/12 shadow-sm shadow-gray-400'>
              <div className='flex flex-col'>
                <p className='text-secondary text-2xl text-center'>2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full justify-center gap-5'>
          <div className='flex flex-col w-5/12 justify-center items-end'>
            <div className='bg-white bg-opacity-20 border border-white
                              border-opacity-10 rounded-xl p-3 justify-center items-center
                              w-8/12 shadow-sm shadow-gray-400'>
              <div className='flex flex-col'>
                <p className='text-secondary text-center'>2021 - present</p>
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
              <h1 className='text-primary text-3xl sm:text-xl'>Software Coordinator</h1>
              <span className='text-secondary text-2xl sm:text-base'>Alfapet Inc.</span>
              <p className='text-secondary'>
                Responsible for maintaining the software systems, built multiple company 
                applications and a website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
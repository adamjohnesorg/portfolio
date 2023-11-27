import React from 'react'
import football_draftboard from '../imgs/footballdraftboard.AVIF'

const Projects = () =>
{
  return (
    <div id='projectDiv'
         className='content-div flex flex-col items-center'>
      <div>
        <h1 className='text-primary text-4xl mb-2'>Projects</h1>
      </div>
      <div className='flex flex-col w-8/12 sm:w-11/12'>
        <div className='flex flex-row sm:flex-col sm:items-center bg-white bg-opacity-20
                          border border-white border-opacity-20 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
          <div className='flex flex-col justify-between w-6/12 sm:w-full'>
            <div>
              <h1 className='text-primary sm:text-center'>Some project #1</h1>
            </div>
            <div>
              <p className='text-secondary sm:text-center'>
                a description giving the text of describing a project and some other things
                that could be useful for someone who is looking at the website and wondering
                how a project has been made
              </p>
            </div>
            <div className='flex flex-row sm:flex-col'>
              <div className='flex flex-row gap-2'>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>loloololo</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>loloololo</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                              border border-white border-opacity-50 p-1 shadow-sm
                            shadow-black'>
                  <span className='text-secondary text-black text-sm'>loloololo</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-6/12 sm:w-full sm:mt-2'>
            <div className=''>
              <img alt='footballdraftboard.com' 
                   className='rounded-2xl shadow-lg shadow-slate-800' 
                   src={ football_draftboard }></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
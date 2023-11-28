import React from 'react'

const Skills = () =>
{
  return (
    <div id='skillsDiv'
         className='content-div flex flex-col items-center'>
         <div>
            <h1 className='text-primary text-4xl mb-2'>
              Skills
            </h1>
          </div>
          <div className='flex flex-col gap-2 w-full xl:w-auto xl:flex-row'>
            <div className='flex flex-row gap-8 2xl:gap-3 xl:gap-1 justify-evenly items-center xl:flex-wrap'>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  ReactJS
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Tailwind
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Java
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Python
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Git
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Node
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  Some Linux Systems
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  C
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  C++
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  MongoDB
                </span>
              </div>
              <div className='bg-white bg-opacity-20
                            border border-white border-opacity-10 rounded-xl p-3
                            shadow-sm shadow-gray-400'>
                <span className='text-secondary'>
                  SQL
                </span>
              </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-1 xl:gap-2'>
              <div className='flex flex-row'>
                <div className='w-full xl:w-6 h-4 xl:h-full bg-gradient-to-r 
                              xl:bg-gradient-to-b from-green-500 to-red-100
                              rounded-xl p-3 shadow-sm shadow-gray-400'></div>
              </div>
              <div className='flex flex-row xl:flex-col justify-between'>
                <div>
                  <span className='text-secondary'>Proficient</span>
                </div>
                <div>
                  <span className='text-secondary'>Comfortable</span>
                </div>
                <div>
                  <span className='text-secondary'>Familiar</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Skills
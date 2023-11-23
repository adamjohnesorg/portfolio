import React from 'react'

const Experience = () =>
{
  return (
    <div id='experienceDiv' 
         className='flex flex-col w-10/12'>
      <div className='border-to-black w-full fadeInElement'></div>
      <div className='flex flex-row'>
        <div className='mr-4'>
          <h1 className='txt-header-white text-4xl p-4 bg-gradient-to-b
                        from-black to-50% font-normal
                        shadow-md shadow-gray-500'>Experience</h1>
        </div>
        <div className='flex flex-row items-center 2xl:flex-col'>
          <div className='flex flex-row gap-2 border border-white border-opacity-30'>
            <p className='txt-body-white p-2 w-4/12 font-extralight bg-gray-500 bg-opacity-10'>
              Alfapet Inc.
            </p>
            <p className='txt-body-white p-2 w-4/12 font-extralight bg-gray-500 bg-opacity-10'>
              2021 - present
            </p>
            <p className='txt-body-white text-base p-2 w-4/12 font-extralight bg-gray-500 
                          bg-opacity-10 2xl:text-2xl'>
              Software Coordinator
            </p>
          </div>
          <div className='p-4'>
            <p className='txt-body-white bg-white bg-opacity-5 w-6/12 text-2xl p-2
                          font-extralight m-auto'>
              Responsible for maintaining the software systems, built multiple company 
              applications and a website.
            </p>
          </div>
          <div className='flex flex-row justify-around bg-white bg-opacity-10
                          border-2 border-opacity-70 gap-8 p-2 mb-2 mr-2 max-w-full h-auto'>
            <div className='w-3/12'>
              <h1 className='txt-header-white text-center text-xl'>Proficient</h1>
              <ul>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>ReactJS</li>
                <li>Python</li>
                <li>Java</li>
                <li>Git</li>
              </ul>
            </div>
            <div className='w-3/12'>
              <h1 className='txt-header-white text-xl'>Comfortable</h1>
                <ul>
                  <li>MongoDB</li>
                  <li>C/C++</li>
                  <li>Aseprite</li>
                  <li>NodeJS</li>
                  <li>SQL</li>
                </ul>
            </div>
            <div className='w-3/12'>
              <h1 className='txt-header-white text-xl'>Familiar</h1>
                <ul>
                  <li>Unity</li>
                  <li>Emacs</li>
                  <li>Linux</li>
                  <li>C#</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
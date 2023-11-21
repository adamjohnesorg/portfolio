import React from 'react'
import githublogo from '../imgs/github-logo.AVIF'

const Projects = () =>
{
  return (
    <div id='projectDiv' className='flex flex-col items-center content-txt-div body-white'>
        <h1 className='txt-header-black'>Projects</h1>
        <p className='txt-body-black m-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
        </p>
        <div className='flex flex-col items-center w-11/12 mb-10 border-8 border-solid
                        border-blue-700 border-opacity-10 bg-blue-300 
                        bg-opacity-20 rounded-3xl p-8'>
          <h1>https://footballdraftboard.net</h1>
          <img src= { githublogo }></img>
          <p className='txt-body-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
          </p>
          <img src= { githublogo }></img>
        </div>
        <div className='flex flex-col items-center w-11/12 mb-10 border-8 border-solid
                        border-orange-500 border-opacity-10 bg-orange-400 bg-opacity-20
                        rounded-3xl p-8'>
          <h1>https://catlitterboxlinercalculator.com</h1>
          <img src= { githublogo }></img>
          <p className='txt-body-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
          </p>
          <img src= { githublogo }></img>
        </div>
    </div>
  )
}

export default Projects
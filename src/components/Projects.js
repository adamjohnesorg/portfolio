import React from 'react'
import githublogo from '../imgs/github-logo.AVIF'
import fb_draftboard_img from '../imgs/footballdraftboard.AVIF'
import cat_calc from '../imgs/catcalc.AVIF'

const Projects = () =>
{
  return (
    <div id='projectDiv' className='flex flex-row content-txt-div body-white'>
        <h1 className='txt-header-black pl-4 pr-4 bg-gradient-to-b
                     from-white to-50% bg-opacity-60 font-normal
                       shadow-lg'>Projects</h1>
        <div className='flex flex-col items-center w-11/12 border-8 border-solid
                        border-blue-700 border-opacity-10 bg-blue-300 
                        bg-opacity-20 rounded-3xl p-8 mt-4 mb-4 ml-4'>
          <span className=' text-3xl font-extralight underline mb-4'>
            <a href='https://footballdraftboard.net'>https://footballdraftboard.net</a>
          </span>
          <img alt='img of https://footballdraftboard.net' src= { fb_draftboard_img }
               className='border-2 border-black'>
          </img>
          <p className='txt-body-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <img alt='github shortcut' src= { githublogo }
               className='w-12 rounded-full border-2 border-white'>
          </img>
        </div>
        <div className='flex flex-col items-center w-11/12 border-8 border-solid
                        border-orange-500 border-opacity-10 bg-orange-400 bg-opacity-20
                        rounded-3xl p-8 mt-4 mb-4 mr-4'>
          <span className=' text-3xl font-extralight underline mb-4'>
            <a href='https://catlitterboxlinercalculator.com/'>https://catlitterboxlinercalculator.com</a>
          </span>
          <img alt='img of https://catlitterboxlinercalculator.com/' src= { cat_calc }
               className='border-2 border-black'>
          </img>
          <p className='txt-body-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <img alt='github shortcut' src= { githublogo }
               className='w-12 rounded-full border-2 border-white'>
          </img>
        </div>
    </div>
  )
}

export default Projects
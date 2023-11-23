import React from 'react'
import githublogo from '../imgs/github-logo.AVIF'
import fb_draftboard_img from '../imgs/footballdraftboard.AVIF'
import cat_calc from '../imgs/catcalc.AVIF'

const Projects = () =>
{
  return (
    <div id='projectDiv' 
         className='flex flex-col w-10/12 body-white'>
      <div className='border-to-white w-full fadeInElement'></div>
      <div className='flex flex-row'>
        <div className='mr-4'>
          <h1 className='txt-header-black text-4xl p-4 bg-gradient-to-b
                      from-white to-90% font-normal
                        shadow-lg'>Projects</h1>
        </div>
        <div className='flex flex-row flex-wrap p-4 gap-2'>
          <div className='flex flex-col items-center border-8 border-solid
                          border-blue-700 border-opacity-10 bg-blue-300 
                          bg-opacity-20 rounded-3xl
                          hover:border-2
                          hover:border-blue-900
                          hover:p-2'>
            <span className=' text-3xl font-extralight underline mb-4'>
              <a href='https://footballdraftboard.net'>https://footballdraftboard.net</a>
            </span>
            <img alt='img of https://footballdraftboard.net' src= { fb_draftboard_img }
                className=''>
            </img>
            <p className='txt-body-black p-4 font-medium'>
              https://footballdraftboard.net was my first project built using ReactJS, NodeJS and 
              SCSS. From the table on the left, users may add players to the table on the right where they
              can properly rank them accordingly.
            </p>
            <img alt='github shortcut' src= { githublogo }
                className='w-12 rounded-full border-2 border-white'>
            </img>
          </div>
          <div className='flex flex-col items-center border-8 border-solid
                          border-orange-500 border-opacity-10 bg-orange-400 bg-opacity-20
                          rounded-3xl'>
            <span className=' text-3xl font-extralight underline mb-4'>
              <a href='https://catlitterboxlinercalculator.com/'>https://catlitterboxlinercalculator.com</a>
            </span>
            <img alt='img of https://catlitterboxlinercalculator.com/' src= { cat_calc }
                className=''>
            </img>
            <p className='txt-body-black p-4 font-medium'>
            https://catlitterboxlinercalculator.com was my first website I have ever created.
            I made it using HTML, CSS and Javascript. The user inputs measurement values into
            the 'calculator' and it determines which cat pan liner is the appropriate size 
            to match their litterbox.
            </p>
            <img alt='github shortcut' src= { githublogo }
                className='w-12 rounded-full border-2 border-white'>
            </img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
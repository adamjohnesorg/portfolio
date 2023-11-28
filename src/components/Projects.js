import React from 'react'
import football_draftboard from '../imgs/footballdraftboard.AVIF'
import catCalc from '../imgs/catcalc.AVIF'
import github_logo from '../imgs/github-logo.AVIF'

const Projects = () =>
{
  return (
    <div id='projectDiv'
         className='content-div flex flex-col items-center'>
      <div>
        <h1 className='text-primary text-4xl mb-2'>Projects</h1>
      </div>
      <div className='flex flex-col w-8/12 sm:w-11/12'>
        <div className='flex flex-row 2xl:flex-col 2xl:items-center bg-blue-200 bg-opacity-20
                          border border-white border-opacity-20 rounded-xl p-3
                          shadow-sm shadow-gray-400'>
          <div className='flex flex-col justify-between w-6/12 2xl:w-full'>
            <div>
              <h1 className='text-primary text-blue-200 text-3xl sm:text-center'>NFL Draftboard</h1>
            </div>
            <div>
              <p className='text-secondary sm:text-center'>
                NFL Draftboard was my first website I created using ReactJS and the
                MERN stack (<em>MongoDB, Express, React, Node</em>). In development, I 
                used a MongoDB server to load the players' data; however upon production, 
                I decided it would be best to move their stats to a local JSON file.
              </p>
            </div>
            <div>
              <p className='text-secondary sm:text-center'>
                The objective of the website is for users to be able to rank NFL players.
                The user adds players from the table database from the left,
                and ranks them in the table to the right.
                This particular idea is very beneficial for fantasy drafts, hence the name.
              </p>
            </div>
            <div className='flex flex-row justify-start 2xl:flex-col xl:items-center'>
              <div className='flex flex-row gap-2 2xl:gap-0 w-6/12 2xl:w-full justify-evenly'>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>ReactJS</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>SCSS</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                              border border-white border-opacity-50 p-1 shadow-sm
                            shadow-black'>
                  <span className='text-secondary text-black text-sm'>NodeJS</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 w-6/12 2xl:w-11/12 p-2'>
            <div className=''>
              <a href='https://footballdraftboard.net'>
                <img alt='footballdraftboard.net' 
                    className='rounded-2xl shadow-lg shadow-slate-800 border border-white
                                border-opacity-60 p-1' 
                    src={ football_draftboard }>
                </img>
              </a>
            </div>
            <div>
              <a href='https://github.com/adamjohnesorg/draftboard'>
                <img src={ github_logo }
                    alt='github logo'
                    className='w-12 sm:w-8 rounded-2xl shadow-lg shadow-slate-800 
                    border border-white border-opacity-20 sm:border-opacity-50'>
                </img>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-row 2xl:flex-col 2xl:items-center bg-orange-200 bg-opacity-20
                          border border-white border-opacity-20 rounded-xl p-3
                          shadow-sm shadow-gray-400 sm:mt-2'>
          <div className='flex flex-col justify-between w-6/12 2xl:w-full'>
            <div>
              <h1 className='text-primary text-orange-400 text-3xl sm:text-center'>Cat Pan Liner Calculator</h1>
            </div>
            <div>
              <p className='text-secondary sm:text-center'>
                Although the cat pan liner calculator, or 'catculator' is the first website I ever
                created, it is certainly not in its first iteration. I created this project
                using HTML, CSS and Javascript.
              </p>
            </div>
            <div>
              <p className='text-secondary sm:text-center'>
                The idea of the cat pan liner calculator is for the client to measure their own
                litterbox at home and input those measurements into the online calculator. The
                calculator will then output the properly sized liner that will fit their
                appropriately sized litterbox.
              </p>
            </div>
            <div className='flex flex-row justify-start 2xl:flex-col xl:items-center'>
              <div className='flex flex-row gap-2 2xl:gap-0 w-6/12 2xl:w-full justify-evenly'>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>HTML</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                                border border-white border-opacity-50 p-1 shadow-sm
                              shadow-black'>
                  <span className='text-secondary text-black text-sm'>CSS</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-50 rounded-full
                              border border-white border-opacity-50 p-1 shadow-sm
                            shadow-black'>
                  <span className='text-secondary text-black text-sm'>Javascript</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 w-6/12 2xl:w-11/12 p-2'>
            <div className=''>
              <a href='https://catlitterboxlinercalculator.com'>
                <img alt='catlitterboxlinercalculator.com' 
                    className='rounded-2xl shadow-lg shadow-slate-800 border border-orange-300
                    border-opacity-60 p-1' 
                    src={ catCalc }>
                </img>
              </a>
            </div>
            <div>
              <a href='https://github.com/adamjohnes/adamjohnes.github.io'>
                <img src={ github_logo }
                    alt='github logo'
                    className='w-12 sm:w-8 rounded-2xl shadow-lg shadow-slate-800 
                    border border-white border-opacity-20 sm:border-opacity-50'>
                </img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
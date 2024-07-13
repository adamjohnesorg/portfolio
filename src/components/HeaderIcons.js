import React from 'react'
import xLogo from '../imgs/x-logo.AVIF'
import linkedinLogo from '../imgs/linkedin-logo.AVIF'
import githubLogo from '../imgs/github-logo.AVIF'

const HeaderIcons = () => 
{
  return (
    <div className='flex flex-col justify-center items-center'>
      <a className='w-4/12 sm:w-3/12' href='https://twitter.com/AdamJohnes_'>
        <img className='p-1 border border-transparent min-w-50
                            hover:rounded-full
                          hover:border-white'
             alt='x logo' src={ xLogo }></img>
      </a>
      <a className='w-4/12 sm:w-3/12' href='https://www.linkedin.com/in/adam-johnes/'>
        <img className='p-1 border border-transparent min-w-50
                            hover:rounded-full
                          hover:border-white'
             alt='linkedin logo' src={ linkedinLogo }></img>
      </a>
      <a className='w-4/12 sm:w-3/12' href='https://github.com/adamjohnes'>
        <img className='p-1 border border-transparent min-w-50
                            hover:rounded-full
                          hover:border-white'
             alt='github logo' src={ githubLogo }></img>
      </a>
    </div>
  )
}

export default HeaderIcons
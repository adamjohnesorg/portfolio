import React from 'react'
import xLogo from '../imgs/x-logo.AVIF'
import linkedinLogo from '../imgs/linkedin-logo.AVIF'
import githubLogo from '../imgs/github-logo.AVIF'

const HeaderIcons = () => 
{
  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <a className='w-3/12' href='https://twitter.com/AdamJohnes_'>
        <img className='p-1 hover:bg-slate-800' alt='x logo' src={ xLogo }></img>
      </a>
      <a className='w-3/12' href='https://www.linkedin.com/in/adam-johnes/'>
        <img className='p-1' alt='linkedin logo' src={ linkedinLogo }></img>
      </a>
      <a className='w-3/12' href='https://github.com/adamjohnes'>
        <img className='p-1' alt='github logo' src={ githubLogo }></img>
      </a>
    </div>
  )
}

export default HeaderIcons
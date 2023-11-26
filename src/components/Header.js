import React from 'react'
import NameAndLogo from './NameAndLogo'
import HeaderIcons from './HeaderIcons'
import Titles from './Titles'

const Header = () => 
{
  return (
    <div id='og-header-div' className='w-11/12'>
      <header className='w-full'>
        <div id='headerDiv'
             className='flex flex-col justify-center items-center bg-slate-950 
             bg-opacity-30'>
          <div className='border-header fadeInElement rotate-180'></div>
          <div className='flex flex-row justify-between items-center w-9/12 p-3 sm:flex-col'>
            <div>
              <NameAndLogo />
            </div>
            <div>
              <Titles />
            </div>
            <div className='flex flex-col'>
              <HeaderIcons />
            </div>
            <button id='cv-button' 
                    className='bg-white bg-opacity-90 p-1 w-2/12 sm:w-4/12 rounded-full
                               border border-transparent min-w-100 sm:bg-opacity-80
                               hover:bg-transparent
                               hover:text-white
                               hover:border
                               hover:border-white
                               hover:border-opacity-25'>View CV</button>
          </div>
          <div className='border-header fadeInElement'></div>
        </div>
      </header>
    </div>
  )
}

export default Header
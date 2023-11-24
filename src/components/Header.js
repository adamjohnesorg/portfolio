import React from 'react'
import NameAndLogo from './NameAndLogo'
import HeaderIcons from './HeaderIcons'
import Titles from './Titles'

const Header = () => 
{
  return (
    <div className='w-11/12'>
      <header className='w-full'>
        <div id='headerDiv'
             className='flex flex-col justify-center items-center w-full bg-slate-950 bg-opacity-30
                        '>
          <div className='border-header fadeInElement rotate-180'></div>
          <div className='flex flex-row justify-between items-center w-9/12 p-3'>
            <div>
              <NameAndLogo />
            </div>
            <div>
              <Titles />
            </div>
            <div>
              <HeaderIcons />
            </div>
          </div>
          <div className='border-header fadeInElement'></div>
        </div>
      </header>
    </div>
  )
}

export default Header
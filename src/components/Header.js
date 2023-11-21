import React from 'react'
import NameAndLogo from './NameAndLogo'
import HeaderIcons from './HeaderIcons'
import Titles from './Titles'

const Header = () => 
{
  return (
    <header className='w-11/12'>
      <div id='headerDiv'
           className='flex flex-row justify-around p-2 bg-opacity-30'>
        <NameAndLogo />
        <Titles />
        <HeaderIcons />
      </div>
    </header>
  )
}

export default Header
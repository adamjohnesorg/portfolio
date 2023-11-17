import React from 'react'
import NameAndLogo from './NameAndLogo'
import HeaderIcons from './HeaderIcons'
import Titles from './Titles'

const Header = () => 
{
  return (
    <div id='headerDiv'
         className='flex flex-row justify-around w-9/12 p-2 border-b-8 border-b-slate-800
                    bg-opacity-30'>
      <NameAndLogo />
      <div></div>
      <div></div>
      <Titles />
      <HeaderIcons />
    </div>
  )
}

export default Header
import React from 'react'
import portLogo from '../imgs/logo-simple.png'

const NameAndLogo = () => 
{
  return (
    <div id='nameAndLogoDiv'
         className='flex flex-row items-center sm:w-full sm:justify-center'>
      <img className='min-w-50 sm:w-5/12 sm:h-auto sm:max-w-full' alt='logo' src={ portLogo }></img>
      <div className='flex flex-col items-center'>
        <p className='text-primary font-extralight text-6xl p-2 sm:text-5xl'>Adam Johnes</p>
      </div>
    </div>
  )
}

export default NameAndLogo
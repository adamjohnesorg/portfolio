import React from 'react'

const NameAndLogo = () => 
{
  return (
    <div id='nameAndLogoDiv'
         className='flex flex-row items-center'>
      <img alt='logo' src='../logo192.png'></img>
      <div className='w-28 overflow-visible'>
        <p className='txt-primary font-extralight text-6xl p-2'>Adam Johnes</p>
      </div>
    </div>
  )
}

export default NameAndLogo
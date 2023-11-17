import React from 'react'

const HeaderIcons = () => 
{
  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <a href='https://twitter.com/AdamJohnes_'>
        <img className='w-3/12 p-1' alt='x logo' src='../x-logo.AVIF'></img>
      </a>
      <a href='https://www.linkedin.com/in/adam-johnes/'>
        <img className='w-3/12 p-1' alt='linkedin logo' src='../linkedin-logo.AVIF'></img>
      </a>
      <a href='https://github.com/adamjohnes'>
        <img className='w-3/12 p-1' alt='github logo' src='../github-logo.AVIF'></img>
      </a>
    </div>
  )
}

export default HeaderIcons
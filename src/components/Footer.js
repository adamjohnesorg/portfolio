import React from 'react'

function Footer() {
  return (
    <div id='footer-div'
         className='flex flex-col w-full'>
        <div className='h-10 sm:h-16'></div>
        <div>
            <h1 className='text-primary text-center'>
                Contact Me
            </h1>
        </div>
        <div className='text-center'>
            <span className='text-secondary'>
                adam_johnes@outlook.com
            </span>
        </div>
        <div className='h-5 sm:h-8'></div>
        <div className='text-center'>
            <span className='text-primary text-sm font-light text-shadow-white'>
                Created using ReactJS and Tailwind
            </span>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'

const NavBar = () => 
{
  return (
    <div id='navbarDiv' 
         className='mt-16 mb-16 bg-white bg-opacity-5 rounded-2xl border border-white
         border-opacity-20 shadow-sm shadow-gray-400'>
        <nav>
            <div className='flex flex-col items-center pt-3 pb-3 pl-10 pr-10'>
                <h1 className='text-primary text-4xl mb-6'>Content</h1>
                <span id='navSelect' className='text-nav'>I | Education</span>
                <span id='navSelect' className='text-nav'>II | Experience</span>
                <span id='navSelect' className='text-nav'>III | Projects</span>
                <span id='navSelect' className='text-nav'>IV | Description</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
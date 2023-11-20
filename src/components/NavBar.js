import React from 'react'

const NavBar = () => 
{
  return (
    <div id='navbarDiv' className='mt-16 mb-16'>
        <nav>
            <div className='flex flex-col items-center pt-3 pb-3 pl-10 pr-10'>
                <h1 className='txt-primary text-4xl'>Content</h1>
                <span id='navSelect' className='txt-nav'>I | About Me</span>
                <span id='navSelect' className='txt-nav'>II | Education</span>
                <span id='navSelect' className='txt-nav'>III | Experience</span>
                <span id='navSelect' className='txt-nav'>IV | Projects</span>
                <span id='navSelect' className='txt-nav'>V | Description</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
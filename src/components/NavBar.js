import React from 'react'

const NavBar = () => 
{
  return (
    <div id='navbarDiv' className='mb-16'>
        <nav>
            <div className='flex flex-col items-center pt-3 pb-3 pl-10 pr-10'>
                <h1 className='txt-primary text-4xl'>Content</h1>
                <span id='navSelect' className='txt-primary'>I | About Me</span>
                <span id='navSelect' className='txt-primary'>II | Education</span>
                <span id='navSelect' className='txt-primary'>III | Experience</span>
                <span id='navSelect' className='txt-primary'>IV | Projects</span>
                <span id='navSelect' className='txt-primary'>V | Description</span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
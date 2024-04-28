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
                <a href='/'
                   onClick={ e => {
                    let about = document.getElementById('descriptionDiv')
                    e.preventDefault()
                    about && about.scrollIntoView({behavior: 'smooth'})
                   }}>
                  <span id='navSelect' className='text-nav hover:underline'>I | About</span>
                </a>
                <a href='/'
                   onClick={ e => {
                    let experience = document.getElementById('experienceDiv')
                    e.preventDefault()
                    experience && experience.scrollIntoView({behavior: 'smooth'})
                   }}>
                  <span id='navSelect' className='text-nav hover:underline'>II | Experience</span>
                </a>
                <a href='/'
                   onClick={ e => {
                    let project = document.getElementById('projectDiv')
                    e.preventDefault()
                    project && project.scrollIntoView({behavior: 'smooth'})
                   }}>
                  <span id='navSelect' className='text-nav hover:underline'>III | Projects</span>
                </a>
                <a href='/'
                   onClick={ e => {
                    let skills = document.getElementById('skillsDiv')
                    e.preventDefault()
                    skills && skills.scrollIntoView({behavior: 'smooth'})
                   }}>
                  <span id='navSelect' className='text-nav hover:underline'>IV | Skills</span>
                </a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Description from './Description'

const ContentBody = () => 
{
  return (
    <div className='flex flex-col items-center'>
      <div className='border-to-white fadeInElement'></div>
        <Education />
      <div className='border-to-black fadeInElement'></div>
        <Experience />
      <div className='border-to-white fadeInElement'></div>
        <Projects />
      <div className='border-to-black fadeInElement'></div>
        <Description />
    </div>
  )
}

export default ContentBody
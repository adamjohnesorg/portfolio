import React from 'react'
import Experience from './Experience'
import Projects from './Projects'
import Description from './Description'
import Skills from './Skills'

const ContentBody = () => 
{
  return (
    <div className='flex flex-col items-center'>
      <Description />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

export default ContentBody
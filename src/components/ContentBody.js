import React from 'react'
import Experience from './Experience'
import Projects from './Projects'
import Description from './Description'

const ContentBody = () => 
{
  return (
    <div className='flex flex-col items-center'>
      <Description />
      <Experience />
      <Projects />
    </div>
  )
}

export default ContentBody
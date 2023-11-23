import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Description from './Description'

const ContentBody = () => 
{
  return (
    <div className='flex flex-col items-center'>
        <Education />
        <Experience />
        <Projects />
        <Description />
    </div>
  )
}

export default ContentBody
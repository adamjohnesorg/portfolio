import React from 'react'

const Experience = () =>
{
  return (
    <div id='experienceDiv' className='flex flex-col items-center content-txt-div'>
        <h1 className='txt-header-white'>Experience</h1>
        <p className='txt-body-white mb-10'>
        Sed id semper risus in hendrerit gravida rutrum quisque. 
            Tincidunt augue interdum velit euismod in pellentesque massa placerat. 
            Diam ut venenatis tellus in metus. Adipiscing elit ut aliquam purus sit amet 
            luctus venenatis lectus. 
        </p>
        <div className='flex flex-row justify-center w-6/12 bg-white bg-opacity-10 p-4
                        border-2 border-white border-opacity-70'>
          <div className='w-4/12'>
            <h1 className='txt-header-white text-2xl'>Profencies</h1>
            <ul>
              <li>HTML / CSS</li>
              <li>Javascript</li>
              <li>Tailwind</li>
              <li>ReactJS</li>
              <li>Python</li>
              <li>Java</li>
              <li>Git</li>
            </ul>
          </div>
          <div className='w-4/12'>
            <h1 className='txt-header-white text-2xl'>Comfortable</h1>
              <ul>
                <li>MongoDB</li>
                <li>C / C++</li>
                <li>Aseprite</li>
                <li>NodeJS</li>
                <li>SQL</li>
              </ul>
          </div>
          <div className='w-4/12'>
            <h1 className='txt-header-white text-2xl'>Some Familiarity</h1>
              <ul>
                <li>Unity</li>
                <li>Emacs</li>
                <li>Linux</li>
                <li>C#</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Experience
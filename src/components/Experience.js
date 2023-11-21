import React from 'react'

const Experience = () =>
{
  return (
    <div id='experienceDiv' 
         className='flex flex-row content-txt-div body-black'>
        <h1 className='txt-header-white pl-4 pr-4 bg-gradient-to-b
                       from-black bg-opacity-60 font-normal
                       shadow-lg'>Experience</h1>
        <p className='txt-body-white mt-2 font-normal'>
        Sed id semper risus in hendrerit gravida rutrum quisque. 
            Tincidunt augue interdum velit euismod in pellentesque massa placerat. 
            Diam ut venenatis tellus in metus. Adipiscing elit ut aliquam purus sit amet 
            luctus venenatis lectus. 
        </p>
        <div className='flex flex-row justify-center w-10/12 bg-white bg-opacity-10 p-4
                        mt-4 ml-4 mb-4 border-2 border-white border-opacity-70'>
          <div className='w-4/12'>
            <h1 className='txt-header-white text-2xl'>Proficiencies</h1>
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
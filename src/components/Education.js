import React from 'react'
import siueLogo from '../imgs/siue-logo.AVIF'

const Education = () =>
{
  return (
    <div id='educationDiv' className='flex flex-col items-center content-txt-div'>
        <h2 className='txt-primary content-txt-header'>Education</h2>
        <p className='txt-primary content-txt w-7/12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
        </p>
        <img id='siuePic' alt='siue logo' className='bg-teal-200 bg-opacity-5 pt-4
                 pb-4 pr-16 mt-2 ml-16'
             src={ siueLogo }>
        </img>
    </div>
  )
}

export default Education
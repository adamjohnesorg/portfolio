import React from 'react'
import siueLogo from '../imgs/siue-logo.AVIF'

const Education = () =>
{
  return (
    <div id='educationDiv' className='flex flex-col items-center content-txt-div'>
        <h1 className='txt-header'>Education</h1>
        <p className='txt-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
        </p>
        <img id='siuePic' alt='siue logo' className='bg-teal-200 bg-opacity-5 pt-4
                 pb-4 pr-16 mt-2 ml-16 mb-10'
             src={ siueLogo }>
        </img>
    </div>
  )
}

export default Education
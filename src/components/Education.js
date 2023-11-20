import React from 'react'
import siueLogo from '../imgs/siue-logo.AVIF'

const Education = () =>
{
  return (
    <div id='educationDiv' className='flex flex-col items-center content-txt-div body-white'>
        <h1 className='txt-header-black'>Education</h1>
        <p className='txt-body-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
        </p>
        <img id='siuePic' alt='siue logo' className='bg-neutral-800 opacity-80 pt-8
                 pb-8 pr-24 pl-6 mt-2 ml-16 mb-10'
             src={ siueLogo }>
        </img>
    </div>
  )
}

export default Education
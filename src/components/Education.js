import React from 'react'

const Education = () =>
{
  return (
    <div id='educationDiv' className='flex flex-row content-txt-div body-white'>
        <h1 className='txt-header-black pl-4 pr-4 bg-gradient-to-b
                       from-white to-50% bg-opacity-60 font-normal
                       shadow-lg'>Education</h1>
        <div className='flex flex-row items-center justify-around h-96 content-txt-div'>
          <p className='txt-body-black text-4xl font-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non 
          </p>
          <iframe defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6219.367418668964!2d-90.00563875496346!3d38.793884636985176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f8759c8a6365%3A0x7b43439fa62e2836!2sSouthern%20Illinois%20University%20Edwardsville!5e0!3m2!1sen!2sus!4v1700523355487!5m2!1sen!2sus"
                  allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                  title='SIUEapi001' className='h-80 mb-4 border-2 border-black'>
          </iframe>
        </div>
    </div>
  )
}

export default Education
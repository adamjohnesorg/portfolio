import React from 'react'

const Education = () =>
{
  return (
    <div id='educationDiv'
         className='flex flex-col w-10/12 sm:w-full 2xl:h-max'>
      <div className='border-to-white w-full fadeInElement'></div>
      <div className='flex flex-row'>
        <div className='mr-4'>
          <h1 className='txt-header-black text-4xl p-4 bg-gradient-to-b
                        from-white to-90% font-normal
                        shadow-lg'>Education</h1>
        </div>
        <div className='flex flex-row 2xl:flex-col items-center'>
          <div className='flex flex-col justify-center p-3'>
            <p className='txt-body-black text-3xl font-extralight'>
              I attended Southern Illinois University Edwardsville (SIUE).
            </p>
            <p className='txt-body-black text-3xl'>
              I graduated with a Bachelor of Arts in Computer Science along with a minor
              in psychology.
            </p>
          </div>
          <div className='mr-2 mb-2'>
            <iframe defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6219.367418668964!2d-90.00563875496346!3d38.793884636985176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f8759c8a6365%3A0x7b43439fa62e2836!2sSouthern%20Illinois%20University%20Edwardsville!5e0!3m2!1sen!2sus!4v1700523355487!5m2!1sen!2sus"
                    allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"
                    title='Southern Illinois University Edwardsville'
                    className='max-w-full h-auto border-2 border-black'>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
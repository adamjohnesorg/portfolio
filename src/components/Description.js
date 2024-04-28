import React from 'react'
import detroit_lions_logo from '../imgs/detroit_lions.AVIF'
import indiana_pacers_logo from '../imgs/indiana_pacers.AVIF'

const Description = () =>
{
  return (
    <div id='descriptionDiv'
         className='content-div sm:border-l sm:border-l-white sm:border-opacity-40
         sm:border-r sm:border-r-white'>
      <div className='flex flex-col items-center m-auto w-5/12 sm:w-9/12'>
        <div>
          <h1 className='text-primary text-4xl'>About</h1>
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-secondary text-center'>
            Originally attending Saint Louis University (SLU) as a student in their
            prestigious Physical Therapy doctorate program, I switched majors 
            and schools to pursue Computer Science at Southern Illinois University 
            Edwardsville (SIUE). I am now a graduate with a Bachelor of Arts in Computer 
            Science in conjunction with a minor in psychology.
          </p>
          <p className='text-secondary text-center'>
            My favorite part of working with software is that it allows me to fully express
            my creativity. I highly value creative thinking, problem solving and the ability
            to think outside the box.<br></br> I strive to create in a way so that my
            software reflects that.
          </p>
          <p className='text-secondary text-center'>
            My core stack currently is ReactJS, Tailwind and some
            NodeJS. I am also proficient with Java and Python and I am comfortable with most 
            Object-Oriented-Programming languages.
          </p>
          <p className='text-secondary text-center'>
            When I am not sitting in front of my computer, I like to play and study chess, 
            learn about history (WWII in particular) and heavily involve myself in being a
            fan of both the NFL and NBA.
          </p>
        </div>
      </div>
      <p className='text-secondary flex flex-row justify-center items-center'>
        (
          #OnePride<img className='w-8 h-6'
                        alt='detroit lions logo'
                        src={ detroit_lions_logo }>
                    </img>
          #BoomBaby<img className='w-4 h-4 ml-2'
                        alt='indiana pacers logo'
                        src={ indiana_pacers_logo }>
                    </img>
        )
      </p>
    </div>
  )
}

export default Description
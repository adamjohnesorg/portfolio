import React from 'react'
import chesspawn from '../imgs/pawn.AVIF'

const Description = () =>
{
  return (
    <div id='descriptionDiv'
         className='flex flex-col w-10/12'>
      <div id='borderBelowProjects' className='border-to-black fadeInElement'></div>
      <div className='flex flex-row'>
      <h1 className='txt-header-white text-4xl p-4 bg-gradient-to-b
                      from-black to-50% font-normal
                        shadow-lg'>About</h1>
        <div className='flex flex-col items-center content-txt-div'>
          <div className='mb-10 p-4 w-8/12'>
            <p className='txt-body-white'>My name is Adam Johnes. <br></br> I pride myself on creativity
            and aspire to bring my imaginations to life. The characteristics that I value the highest
            in myself are creative thinking, problem solving and my ability and willingness to
            learn. If you want to know more about me, reach out to me.
            </p>
          </div>
          <div className='flex flex-col w-8/12'>
            <div>
              <p className='txt-body-white'>
                Here are a few of my favorite interests:
              </p>
            </div>
            <div className='flex flex-row p-3 justify-between'>
              <h1 className='text-4xl font-extralight text-white'>Chess</h1>
              <img className='max-w-full h-auto aspect-auto w-20' alt='pawn in chess' src={ chesspawn }></img>
            </div>
          </div>
          nfl / nba
          history ww2
        </div>
      </div>
    </div>
  )
}

export default Description
import React from 'react'

import './Skills.scss'

const skills = () => {
  return (
    <div id='skills'className='app__combo app__flex'>
      <div className='app__about'>
        <h1>
          About
        </h1>
        <div className='text__container'> 
            <p>I am a full stack developer who specializes the MERN stack, but am always excited of new tech and other technology stacks that may pop up. </p>
        </div>
      </div>
      <div className='app__skills'>
        <h1>
          Skills
        </h1>
      </div>
    </div>
  )
}

export default skills
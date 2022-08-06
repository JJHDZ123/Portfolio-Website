import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function socialmedia() {
  return (
    <div className='app__social'>
        <div>
          <a 
            className='social__linkedin'
            href='https://www.linkedin.com/in/Juan-Hernandez-Dev' 
            target='_blank' 
            rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a 
            className='social__github'
            href='https://github.com/JJHDZ123' 
            target='_blank' 
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
    </div>
  )
}
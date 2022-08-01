import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function socialmedia() {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
    </div>
  )
}
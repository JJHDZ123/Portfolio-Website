import { React, useState }from 'react'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'

import './Footer.scss'

const footer = () => {

  const name=[];
  function handleChangeInput() {
    console.log('was typed in')
  }

  
  return (
    <motion.div className='app__footer'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <h2> Feel free to contact me! </h2>

      <div className='app__footer-cards app__flex'>
        <div className='app__footer-card'>
          <img alt='email'/ >
        </div>
        <div className='app__footer-card'>
          <img alt='phone'/ >
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div>
          <input type='text' placeholder='Your Name' value={name} onChange={handleChangeInput} required/>
        </div>
        <div>
          <input type='text' placeholder='Email id' required/>
        </div>
        <div>
          <input type='text' placeholder='Phone number' required/>
        </div>
        <div>
          <textarea type='text' placeholder='Send me a message!' required/>
        </div>
        <button type='submit'>Send</button>
      </div>
    </motion.div>
  )
}

export default AppWrapp(footer, 'contact');
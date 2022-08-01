import React from 'react'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'

import './Footer.scss'

const footer = () => {
  return (
    <motion.div className='app__footer'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <h2> Feel free to contact me! </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img alt='email'/ >
        </div>
      </div>
    </motion.div>
  )
}

export default AppWrapp(footer, 'contact');
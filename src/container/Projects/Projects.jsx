import React from 'react'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'

import './Projects.scss'

const projects = () => {
  return (
    <motion.div className='app__flex projects-list'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <div>
      <h2>Projects!</h2>
      </div>
      <div>
        <div className='app__flex projects-container'>
          <h2>PlaceHolder for work</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default AppWrapp( projects, 'projects');
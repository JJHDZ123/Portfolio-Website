import { React } from 'react'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'
import { images } from '../../constants/index';
import Icon from './Icon'

import './Skills.scss'

const Skills = () => {

  const allImageNames = Object.keys(images);
  const allImageUrl = Object.values(images);

  const  usableImageData = allImageNames.map((val1, index) => {
    return {
      meta:val1,
      value: allImageUrl[index]
    }
  })

  const imageElements = usableImageData.map(item => {
    return (
      <Icon 
        key = {item.meta}
        name = {item.meta}
        url = {item.value}
      />
    )
  })

  return (
    <motion.div className='app__combo app__flex'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <div className='app__about'>
        <h1>
          About
        </h1>
        <div className='text__container'> 
            <p>I am a full stack developer who specializes on the MERN stack. I am always excited of new tech and other technology stacks that may pop up, so what are we building?</p>
        </div>
        <div className='btn__container'>
          <motion.div
            whileHover={{
              scale: [1,1.2,1.1],
            }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 1 }}
          >
            <a href={`#home`}>Resume</a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [1,1.2,1.1],
            }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 1}}
          >
            <a href={`#home`}>Contact me</a>
          </motion.div>
        </div>
      </div>
      <div className='app__skills app__flex'>
        <h1>
          Skills
        </h1>
        <div className='app__skills-container'>
          {imageElements}
        </div>
      </div>
    </motion.div>
  )
}

export default AppWrapp( Skills, 'skills');
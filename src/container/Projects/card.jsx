import React from 'react'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

export default function Card(props) {

  return (
    <motion.div className='projects__card'
        whileHover={{
        scale: 1.1
      }}
    >
        <div className='projects__card-imagecontainer'>
            <img src={props.projectImageUrl} alt={props.name}/>
            <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={props.liveUrl} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={props.repoUrl} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
        </div>
        <div className='projects__work-content'>
            <h4 className='bold-text'>{props.name}</h4>
            <p className='p-text'>{props.desc}</p>
        </div>
    </motion.div>
  )
}

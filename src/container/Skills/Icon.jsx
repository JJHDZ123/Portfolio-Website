import React from 'react'
import { motion } from 'framer-motion'

export default function Icon(props) {

  return (
    <motion.div className='app__skills-item app__flex'
        whileHover={{
        scale: 1.1
      }}
    >
        <div>
            <img src={props.url} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    </motion.div>
  )
}

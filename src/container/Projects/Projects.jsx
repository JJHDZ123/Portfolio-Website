import { React } from 'react'
import { motion } from 'framer-motion'
import { AppWrapp } from '../../wrapper'

import './Projects.scss'
import Card from './card'
import { projectData } from '../../constants'

const Projects = () => {

  //const work = projectData;

  const workElements = projectData.map(item => {
    return (
      <Card 
        key={item.name}
        name= {item.name}
        liveUrl={item.liveUrl}
        repoUrl={item.repoUrl}
        projectImageUrl={item.projectImageUrl}
        desc={item.description}
      />
    )
  })

  return (
    <motion.div className='app__flex projects-list'
      whileInView = {{y: [100,50,0], opacity: [0,0,1]}}
      transition={{duration: .5}}
    >
      <h1>Projects!</h1>

      <div className='app__flex projects__container'>
        {workElements}
      </div>
    </motion.div>
  )
}

export default AppWrapp( Projects, 'projects');
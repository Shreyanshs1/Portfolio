import React from 'react'
import Arrow from '../assets/Logos/arrow.svg'
import { motion } from 'framer-motion';

function ProjectsCard({project}) {
  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      key={project.id}
      id={project.id}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    className='project-wrap'>
      <div className='project-img-wrap'>
        <div className='project-img-cont'>
        <img className='project-img' src={project.image}/>
        <div className='project-overlay-left'>
    <ul className='tech-stack-list'>
      {project.techStack.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  </div>
        </div>
      </div>
      <div className='project-title-wrap'>
      <p className='project-title'>{project.name}</p>
      </div>
      <div className='both-links'>
      <div className='project-link'>
        <a className='project-link-a' href={project.github} target='_blank'>github</a>
      </div>
      <div className='project-link'>
        <a className={project.demo?'project-link-a demo-link':'hidden'} href={project.demo} target='_blank'>demo
        <img src={Arrow} className='project-arrow'/></a>
      </div>
      </div>
    </motion.div>
    </>
  )
}

export default ProjectsCard
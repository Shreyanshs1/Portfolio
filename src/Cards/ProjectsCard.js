import React from 'react'
import Arrow from '../assets/Logos/arrow.svg'

function ProjectsCard({project}) {
  return (
    <>
    <div className='project-wrap'>
      <div className='project-img-wrap'>
        <div className='project-img-cont'>
        <img className='project-img' src={project.image}/>
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
    </div>
    </>
  )
}

export default ProjectsCard
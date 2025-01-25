import React from 'react'
import ProjectsCard from '../Cards/ProjectsCard'

function Projects() {
  
  return (
    <>
    <div className='conatiner-projects'>
        <h1 className='about-page-heading'>Projects</h1>
        <p className='about-page-subheading'>My Recent Works</p>
      <div className='main-projects'>
        <ProjectsCard/>
      </div>
    </div>
    </>
  )
}

export default Projects
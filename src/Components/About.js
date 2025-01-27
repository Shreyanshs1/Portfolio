import React from 'react'
import avatar from '../assets/avatar.png'
import '../StyleSheets/About.css'
import AboutCard from '../Cards/AboutCard'
import Work from '../assets/Logos/work.svg'
import Experience from '../assets/Logos/experience.svg'
import Github from '../assets/Logos/github.svg'
import Resume from '../assets/resume.docx'
import File from '../assets/Logos/file.svg'
import line from '../assets/Line-Design.svg'

function About() {
  return (
    <>
    <div className='container-about' id='about'>
        <h1 className='about-page-heading'>About Me</h1>
        <p className='about-page-subheading'>My Introduction</p>
        <div className='main-about'>
        <div className='left-about'>
          <img src={avatar} className='avatar-img about-img'/>
        </div>
        <div className='right-about'>
          <div className='about-cards'>
            <AboutCard logo={Experience} heading="Experience" details="Fresher"/>
            <AboutCard logo={Work} heading="Completed" details="8+ Projects"/>
            <AboutCard logo={Github} heading="Github" details="9 Repos"/>
          </div>
          <div className='my-intro-about'>
            <p className='my-intro-about-para'>Software Developer with knowledge of C++, Java and web development technologies (HTML, CSS, Javascript, React, Node.Js, Express.Js). Eager to learn and contribute to innovative projects.</p>
          </div>
            <a href={Resume} download className='about-resume-btn'>
              Download CV
              <img src={File} className='dwnld-file-logo'/>
            </a>
        </div>
      </div>
      <div className='line-design'>
        <img src={line}/>
      </div>
    </div>
    </>
  )
}

export default About
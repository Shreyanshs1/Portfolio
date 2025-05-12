import React from 'react'
import avatar from '../assets/avatar2.png'
import '../StyleSheets/About.css'
import AboutCard from '../Cards/AboutCard'
import Work from '../assets/Logos/work.svg'
import Experience from '../assets/Logos/experience.svg'
import Github from '../assets/Logos/github.svg'
import Resume from '../assets/resume.docx'
import File from '../assets/Logos/file.svg'
import line from '../assets/Line-Design.svg'
import { motion } from 'framer-motion';

function About() {
  return (
    <>
    <div className='container-about' id='about'>
        <motion.h1 
        className='about-page-heading'
        initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
        >About Me</motion.h1>
        <p className='about-page-subheading'>My Introduction</p>
        <div className='main-about'>
        <div className='left-about'>
          <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
           src={avatar} className='avatar-img about-img'/>
        </div>
        <div className='right-about'>
          <div className='about-cards'>
            <AboutCard logo={Experience} heading="Experience" details="Fresher"/>
            <AboutCard logo={Work} heading="Completed" details="8+ Projects"/>
            <AboutCard logo={Github} heading="Github" details="9 Repos"/>
          </div>
          <div className='my-intro-about'>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
             className='my-intro-about-para'>Software Developer with knowledge of C++, Java and web development technologies (HTML, CSS, Javascript, React, Node.Js, Express.Js). Eager to learn and contribute to innovative projects.</motion.p>
          </div>
            <motion.a
            whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.8 }}
             href={Resume} download className='about-resume-btn'>
              Download CV
              <img src={File} className='dwnld-file-logo'/>
            </motion.a>
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
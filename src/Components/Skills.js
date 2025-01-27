import React from 'react'
import '../StyleSheets/Skills.css'
import SkillsCard from '../Cards/SkillsCard'
import line from '../assets/Line-Design.svg'

function Skills() {
  let frontendList=["HTML","CSS","React"];
  let backendList =["Nodejs","Express.js","Restful API"]
  let languages = ["C++","C","Java","JavaScript"];
  let databases = ["MongoDB","MySQL"];

  return (
    <>
    <div className='container-skills' id='skills'>
    <h1 className='about-page-heading'>Skills</h1>
    <p className='about-page-subheading'>My Skills</p>
      <div className='main-skills'>
      <SkillsCard heading="Frontend" list={frontendList}/>
      <SkillsCard heading="Backend" list={backendList}/>
      <SkillsCard heading="Languages" list={languages}/>
      <SkillsCard heading="Databases" list={databases}/>
      </div>
      <div className='line-design'>
        <img src={line}/>
      </div>
    </div>
    </>
  )
}

export default Skills
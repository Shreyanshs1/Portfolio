import React from 'react'
import '../StyleSheets/Skills.css'
import SkillsCard from '../Cards/SkillsCard'
import line from '../assets/Line-Design.svg'

function Skills() {
  let frontendList=["HTML","CSS","Reactjs","Svelte","Next.js","Tailwind CSS"];
  let backendList =["Nodejs","Express.js","Restful API","ASP.NET","JWT","Prisma ORM","Mongoose"];
  let languages = ["C/C++","C#","Java","JavaScript"];
  let databases = ["MongoDB","MySQL","SQL Server", "NeonDB","PostgreSQL","Supabase"];
  let other = ["Git","Docker","AWS","GitHub","Postman","Cron Jobs"];
  let skills = ["Full-Stack","REST","Auth","RBAC","MVC"]

  return (
    <>
    <div className='container-skills' id='skills'>
    <h1 className='about-page-heading'>Skills</h1>
    <p className='about-page-subheading'>My Skills</p>
      <div className='main-skills'>
      <SkillsCard heading="Frontend" list={frontendList} slideDirection="left"/>
      <SkillsCard heading="Backend" list={backendList} slideDirection="right"/>
      <SkillsCard heading="Languages" list={languages} slideDirection="left"/>
      <SkillsCard heading="Databases" list={databases} slideDirection="right"/>
      <SkillsCard heading="Other" list={other} slideDirection="left"/>
      <SkillsCard heading="Skills" list={skills} slideDirection="right"/>
      </div>
      <div className='line-design'>
        <img src={line}/>
      </div>
    </div>
    </>
  )
}

export default Skills
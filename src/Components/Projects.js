import React from 'react'
import ProjectsCard from '../Cards/ProjectsCard'
import Visualizer from '../assets/Screenshot/visualizer.jpeg'
import Todo from '../assets/Screenshot/todo.jpeg'
import Dictionary from '../assets/Screenshot/dictionary.jpg'
import Currency from '../assets/Screenshot/currency.jpeg'
import Weather from '../assets/Screenshot/weather.jpeg'
import Calculator from '../assets/Screenshot/reactCalc.jpeg'
import Expense from '../assets/Screenshot/expense.jpeg'
import Career from '../assets/Screenshot/Career.png'
import '../StyleSheets/Projects.css'
import line from '../assets/Line-Design.svg'

function Projects() {
  const projects = [
    {
      id:1,
      name:"CareerArcade",
      image:Career,
      github:"https://github.com/Shreyanshs1/CareerArcade",
      demo:"https://careerarcade.vercel.app/",
      techStack: ["React", "ASP.NET Web API", "SQL Server"]
    },
    {
      id:2,
      name:"Expense Tracker",
      image:Expense,
      github:"https://github.com/Shreyanshs1/ExpenseTracker",
      demo:"https://expensetracker-eta-fawn.vercel.app/login",
      techStack: ["React", "Node.js","Express", "MongoDB"]
    },
    {
      id:3,
      name:"Sorting Visualizer",
      image:Visualizer,
      github:"https://github.com/Shreyanshs1/Sorting-Visualizer.git",
      demo:"https://shreyanshs1.github.io/Sorting-Visualizer/",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      id:4,
      name:"Full Stack Todo",
      image:Todo,
      github:"https://github.com/Shreyanshs1/todo.git",
      demo:null,
      techStack: ["React", "Node.js","Express", "MongoDB"]
    },
    {
      id:5,
      name:"Dictionary",
      image:Dictionary,
      github:"https://github.com/Shreyanshs1/Dictionary",
      demo:"https://shreyanshs1.github.io/Dictionary/",
      techStack: ["HTML", "CSS", "JavaScript"]
    }
    ,{
      id:6,
      name:"Currency Converter",
      image:Currency,
      github:"https://github.com/Shreyanshs1/Currency-Converter",
      demo:"https://shreyanshs1.github.io/Currency-Converter/",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      id:7,
      name:"Weather App",
      image:Weather,
      github:"https://github.com/Shreyanshs1/react-weather-app/tree/main",
      demo:null,
      techStack: ["React","Weather API"]
    },
    {
      id:8,
      name:"React Calculator",
      image:Calculator,
      github:"https://replit.com/@Shreyansh1807/React-Calculator",
      demo:null,
      techStack: ["React"]
    }
  ]
  return (
    <>
    <div className='container-projects' id='projects'>
        <h1 className='about-page-heading'>Projects</h1>
        <p className='about-page-subheading'>My Recent Works</p>
      <div className='main-projects'>
        {
          projects.map((project)=>(
            <ProjectsCard key={project.id} project={project}/>
          ))
        }
        
      </div>
      <div className='line-design'>
        <img src={line}/>
      </div>
    </div>
    </>
  )
}

export default Projects
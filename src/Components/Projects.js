import React, { useState } from 'react'
import ProjectsCard from '../Cards/ProjectsCard'
import Visualizer from '../assets/Screenshot/visualizer.jpeg'
import Todo from '../assets/Screenshot/todo.jpeg'
import Dictionary from '../assets/Screenshot/dictionary.jpeg'
import Currency from '../assets/Screenshot/currency.jpeg'
import Weather from '../assets/Screenshot/weather.jpeg'
import Calculator from '../assets/Screenshot/reactCalc.jpeg'
import Expense from '../assets/Screenshot/expense.jpeg'
import Career from '../assets/Screenshot/Career.png'
import SoftSell from '../assets/Screenshot/SoftSell.png'
import Discord from '../assets/Screenshot/Discord.jfif'
import '../StyleSheets/Projects.css'
import line from '../assets/Line-Design.svg'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id:0,
      name:"WalkieTalkie(Discord)",
      image:Discord,
      github:"https://github.com/Shreyanshs1/Discord",
      demo:null,
      techStack: ["C#", "WPF", "XAML","Socket"],
      type: "Desktop"
    },
    {
      id:1,
      name:"CareerArcade",
      image:Career,
      github:"https://github.com/Shreyanshs1/CareerArcade",
      demo:"https://careerarcade.vercel.app/",
      techStack: ["React", "ASP.NET Web API", "SQL Server"],
      type: "Web"
    },
    {
      id:2,
      name:"Expense Tracker",
      image:Expense,
      github:"https://github.com/Shreyanshs1/ExpenseTracker",
      demo:"https://expensetracker-eta-fawn.vercel.app/login",
      techStack: ["React", "Node.js","Express", "MongoDB"],
      type: "Web"
    },
    {
      id:3,
      name:"Sorting Visualizer",
      image:Visualizer,
      github:"https://github.com/Shreyanshs1/Sorting-Visualizer.git",
      demo:"https://shreyanshs1.github.io/Sorting-Visualizer/",
      techStack: ["HTML", "CSS", "JavaScript"],
      type: "Web"
    },
    {
      id:4,
      name:"Full Stack Todo",
      image:Todo,
      github:"https://github.com/Shreyanshs1/todo.git",
      demo:null,
      techStack: ["React", "Node.js","Express", "MongoDB"],
      type: "Web"
    },
    {
      id:5,
      name:"Dictionary",
      image:Dictionary,
      github:"https://github.com/Shreyanshs1/Dictionary",
      demo:"https://shreyanshs1.github.io/Dictionary/",
      techStack: ["HTML", "CSS", "JavaScript"],
      type: "Web"
    }
    ,{
      id:6,
      name:"Currency Converter",
      image:Currency,
      github:"https://github.com/Shreyanshs1/Currency-Converter",
      demo:"https://shreyanshs1.github.io/Currency-Converter/",
      techStack: ["HTML", "CSS", "JavaScript"],
      type: "Web"
    },
    {
      id:7,
      name:"Weather App",
      image:Weather,
      github:"https://github.com/Shreyanshs1/react-weather-app/tree/main",
      demo:null,
      techStack: ["React","Weather API"],
      type: "Web"
    },
    {
      id:8,
      name:"React Calculator",
      image:Calculator,
      github:"https://replit.com/@Shreyansh1807/React-Calculator",
      demo:null,
      techStack: ["React"],
      type: "Web"
    },
    {
      id:9,
      name:"SoftSell",
      image:SoftSell,
      github:"https://github.com/Shreyanshs1/softsell",
      demo:"https://softsell-phi-three.vercel.app/",
      techStack: ["HTML", "CSS", "JavaScript"],
      type: "Web"
    }
  ]

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.type.toLowerCase() === activeTab)

  return (
    <>
    <div className='container-projects' id='projects'>
        <h1 className='about-page-heading'>Projects</h1>
        <p className='about-page-subheading'>My Recent Works</p>
        <div className='projects-tabs'>
          <button
            className={`projects-tab-btn${activeTab === 'all' ? ' active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`projects-tab-btn${activeTab === 'web' ? ' active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Web
          </button>
          <button
            className={`projects-tab-btn${activeTab === 'desktop' ? ' active' : ''}`}
            onClick={() => setActiveTab('desktop')}
          >
            Desktop
          </button>
        </div>
      <div className='main-projects'>
        {
          filteredProjects.map((project)=>(
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
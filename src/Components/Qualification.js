import React from 'react'
import '../StyleSheets/Qualification.css'
import QualificationCard from '../Cards/QualificationCard'
import line from '../assets/Line-Design.svg'

function Qualification() {
const qualificationObject = [
  {
    id:1,
    degree:"BCA",
    year:"2022-2025",
    college:"IGNOU"
  },
  {
    id:2,
    degree:"Diploma",
    year:"2020-2023",
    college:"BTEUP"
  },
  {
    id:3,
    degree:"Intermediate",
    year:"2019-2020",
    college:"CBSE"
  },{
    id:4,
    degree:"High School",
    year:"2017-2018",
    college:"CBSE"
  }
]
  return (
    <>
    <div className='container-qualification' id='qualification'>
    <h1 className='about-page-heading'>Qualification</h1>
    <p className='about-page-subheading'>My Qualifications</p>
    <div className='timeline'>
        {
          qualificationObject.map((user)=>(
            <div>
              <QualificationCard degree={user.degree} year={user.year} college={user.college}
              id={user.id}/>
              </div>
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

export default Qualification
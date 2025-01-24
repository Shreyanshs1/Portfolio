import React from 'react'
import circle from '../assets/Logos/circle.svg'

function QualificationCard({degree,year,college,id}) {
  return (
    <>
    <div className={id % 2 ?'timeline-container left-container':'timeline-container right-container'}>
    <img src={circle}/>
    <div className={id % 2 ?'qualify-text-box left-qualify-text-box':'qualify-text-box right-qualify-text-box'}>
        <h4><strong>{degree}</strong></h4>
        <small>{year}</small>
        <p>{college}</p>
    </div>
    </div>
    </>
  )
}

export default QualificationCard
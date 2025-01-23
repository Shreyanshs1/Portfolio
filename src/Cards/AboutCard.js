import React from 'react'
import './AboutCard.css'

function AboutCard({logo,heading,details}) {
  return (
    <>
    <div className='about-card'>
        <img className='topic-logo' src={logo}/>
        <p className='topic-heading'>{heading}</p>
        <p className='topic-details'>{details}</p>
    </div>
    </>
  )
}

export default AboutCard
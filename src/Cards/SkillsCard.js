import React from 'react';
import './SkillsCard.css'
import verified from '../assets/Logos/verified.svg'

function SkillsCard({ heading, list }) {
  const items = [];
  list.forEach((item, index) => {
    items.push(
      <div className='skills-list-card'>
      <img className='verified-logo' src={verified}/>
    <li key={index} className='technologies'>{item}</li>
    </div>);
  });

  return (
    <>
    <div className='skillscard-box'>
      <h2 className='skills-heading'>{heading}</h2>
      <ul className='ul-skills'>
        {items}
      </ul>
    </div>
    </>
  );
}

export default SkillsCard;

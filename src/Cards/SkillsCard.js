import React from 'react';
import './SkillsCard.css'
import verified from '../assets/Logos/verified.svg'
import { motion } from 'framer-motion';

function SkillsCard({ heading, list,slideDirection }) {
  const items = [];
  const initialX = slideDirection === 'left' ? -100 : 100;
  list.forEach((item, index) => {
    items.push(
      <div className='skills-list-card'>
      <img className='verified-logo' src={verified}/>
    <li key={index} className='technologies'>{item}</li>
    </div>);
  });

  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
     className='skillscard-box'>
      <h2 className='skills-heading'>{heading}</h2>
      <ul className='ul-skills'>
        {items}
      </ul>
    </motion.div>
    </>
  );
}

export default SkillsCard;

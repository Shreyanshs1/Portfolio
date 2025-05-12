import React from 'react'
import './AboutCard.css'
import { motion } from 'framer-motion';

function AboutCard({ logo, heading, details }) {
  return (
    <>
      <motion.div
        className='about-card'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className='topic-logo' src={logo} />
        <p className='topic-heading'>{heading}</p>
        <p className='topic-details'>{details}</p>
      </motion.div>
    </>
  )
}

export default AboutCard
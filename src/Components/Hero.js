import React from 'react'
import '../StyleSheets/Hero.css'
import image from'../assets/avatar.png'
import github from '../assets/Logos/github.svg'
import instagram from '../assets/Logos/instagram.svg'
import twitter from '../assets/Logos/twitter.svg'

function Hero() {
  return (
    <>
    <div className='main'>
      <div className='left'>
        <p className='heading'>Shreyansh Srivastava👋</p>
        <p className='subheading'>Software Engineer</p>
        <p className='description'>I'm a creative developer based in Lucknow, India and I'm very passionate to my work</p>
        <div className='socials'>
          <a href='https://github.com/Shreyanshs1'><img src={github} className='logos' target='_blank'/></a>
          <a href='https://github.com/Shreyanshs1'><img src={instagram} className='logos' target='_blank'/></a>
          <a href='https://github.com/Shreyanshs1'><img src={twitter} className='logos' target='_blank'/></a>
        </div>
      </div>
      <div className='right'>
        <img className='avatar-img' src={image} alt='image here'/>
      </div>
    </div>
    </>
  )
}

export default Hero
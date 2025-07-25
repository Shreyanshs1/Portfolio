import React, { useEffect, useRef } from 'react'
import '../StyleSheets/Hero.css'
import image from '../assets/avatar.png'
import github from '../assets/Logos/github.svg'
import instagram from '../assets/Logos/instagram.svg'
import twitter from '../assets/Logos/twitter.svg'
import line from '../assets/Line-Design.svg'
import linkedin from '../assets/Logos/linkedin.svg'
import { motion } from 'framer-motion';
import { annotate } from 'rough-notation';

function Hero() {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const handleLoad = () => {
      const a1 = annotate(ref1.current, { type: 'highlight', color: '#FFD54F', animationDuration: 1000 });
      const a2 = annotate(ref2.current, { type: 'box', color: '#f472b6', animationDuration: 1000 });

      a1.show();
      setTimeout(() => a2.show(), 900);
    };

    // Attach on load
    window.addEventListener('load', handleLoad);

    // Clean up
    return () => window.removeEventListener('load', handleLoad); 
  }, []);
  return (
    <>
      <div className='container' id='home'>
        <div className='main'>
          <div className='left'>
            <p className='heading'>Shreyansh Srivastava👋</p>
            <p className='subheading'>Software Engineer</p>
            <p className='description'>I'm a <span ref={ref1}>full-stack developer</span> based in <span ref={ref2}>Lucknow, India</span>, deeply passionate about what I do.<br/>
            Email: shreyanshsri1807@gmail.com
            </p>
            <div className='socials'>
              <a href='https://github.com/Shreyanshs1'><img src={github} className='logos' target='_blank' /></a>
              <a href='https://www.instagram.com/shreyanshs18/#'><img src={instagram} className='logos' target='_blank' /></a>
              <a href='https://x.com/Shreyanshs1807'><img src={twitter} className='logos' target='_blank' /></a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                href='https://www.linkedin.com/in/shreyansh-srivastava-09b604226/' className='linkedin-btn' target='_blank'>
                Connect
                <img src={linkedin} className='linkedin-logo' />
              </motion.a>
            </div>
          </div>
          <div className='right'>
            <img className='avatar-img' src={image} alt='image here' />
          </div>
        </div>
        <div className='line-design'>
          <img src={line} />
        </div>
      </div>
    </>
  )
}

export default Hero
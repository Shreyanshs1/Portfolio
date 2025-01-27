import React from 'react'
import github from '../assets/Logos/github.svg'
import instagram from '../assets/Logos/instagram.svg'
import twitter from '../assets/Logos/twitter.svg'
import '../StyleSheets/Footer.css'

function Footer() {
  return (
    <>
    <div className='container-footer'>
        <p className='footer-heading'>श्रेयांश श्रीवास्तव</p>
        <div className='socials'>
          <a href='https://github.com/Shreyanshs1'><img src={github} className='logos' target='_blank'/></a>
          <a href='https://www.instagram.com/shreyanshs18/#'><img src={instagram} className='logos' target='_blank'/></a>
          <a href='https://x.com/Shreyanshs1807'><img src={twitter} className='logos' target='_blank'/></a>
        </div>
        <div className='copyright-text'>
            <p>&copy;shreyansh. All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
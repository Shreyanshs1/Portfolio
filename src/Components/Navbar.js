import React from 'react'
import '../StyleSheets/Navbar.css'

function Navbar() {
  return (
    <>
    <div className='Navbar' id='sticky'>
    <div className='logo'>{'<Shreyansh/>'}</div>
    <div className='links'>
        <a className='nav-link' href='#home'>home</a>
        <a className='nav-link' href='#about'>about</a>
        <a className='nav-link' href='#skills'>skills</a>
        <a className='nav-link' href='#projects'>projects</a>
        <a className='nav-link' href='#qualification'>qualification</a>
        <a className='nav-link' href='#contact'>contact</a>
    </div>
    </div>
    </>
  )
}

export default Navbar
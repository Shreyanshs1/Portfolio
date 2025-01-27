import React from 'react'
import '../StyleSheets/Navbar.css'

function Navbar() {
  return (
    <>
    <div className='Navbar' id='sticky'>
    <div className='logo'>{'<Shreyansh/>'}</div>
    <div className='links'>
        <a>home</a>
        <a>about</a>
        <a>skills</a>
        <a>portfolio</a>
        <a>contact</a>
    </div>
    </div>
    </>
  )
}

export default Navbar
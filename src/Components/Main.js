import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Qualification from './Qualification'
import '../StyleSheets/Main.css'
import Contact from './Contact'
import Footer from './Footer'

function Main() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Qualification/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Main
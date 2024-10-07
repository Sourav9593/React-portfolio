import React from 'react'
import Navbar from './components/Navbar2/Navbar'
import Intro from './components/Intro2/Intro'
import Contact from './components/Contact/Contact'
import Footer from './components/Contact/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div className='mainContainer'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

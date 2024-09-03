import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/bg.png'
import btnImg from '../../assets/hireme.png'
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Sourav</span></span>
        <h1><ReactTyped strings={["MERN stack developer", "Frontend developer (ReactJs)", "Responsive web designer"]} typeSpeed={100} loop backSpeed={20}  showCursor={true}/></h1>
        <p className="introPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae?</p>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button className="btn">Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
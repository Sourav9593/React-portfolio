import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/my_img.jpg'
import btnImg from '../../assets/hireme.png'
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <img src={bg} alt="Profile" className='bg' />
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Sourav</span></span>
        <h1><ReactTyped strings={["MERN stack developer", "Frontend developer (ReactJs)", "Responsive web designer"]} typeSpeed={100} loop backSpeed={20} showCursor={true} /></h1>
        <p className="introPara">I'm a React developer passionate about creating clean, responsive, and dynamic web applications. With strong expertise in front-end development.<span>I have hands-on experience with React.js and am expanding my knowledge of backend development with Node.js and Express to grow as a full-stack developer.</span></p>
        <div className="btns">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button className="btn">Hire me<FaArrowRight /></button></Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button className="btn">My Resume<FaDownload /></button></Link>
        </div>
      </div>
    </section>
  )
}

export default Intro
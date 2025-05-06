import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/my_img.jpg'
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import {motion} from "framer-motion"


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <motion.img
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{
          type:"spring",
          stiffness:60,
          damping:10,
          duration:0.8
        }}
        src={bg} alt="Profile" className='bg' />
        <span className="hello">Hello,</span>
        <motion.span
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          duration:0.8
        }}
        className="introText">I'm <span className="introName">Sourav</span></motion.span>
        <h1><ReactTyped strings={["MERN stack developer", "Frontend developer (ReactJs)", "Responsive web designer"]} typeSpeed={100} loop backSpeed={20} showCursor={true} /></h1>
        <p className="introPara">I'm a React developer passionate about creating clean, responsive, and dynamic web applications. With strong expertise in front-end development.<span>I have hands-on experience with React.js and am expanding my knowledge of backend development with Node.js and Express to grow as a full-stack developer.</span></p>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          duration:0.8
        }}
        className="btns">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button className="btn">Hire me<FaArrowRight /></button></Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button className="btn">My Resume<FaDownload /></button></Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
import React from 'react'
import './about.css'
import {Link} from 'react-scroll'
import Me from '../../assets/my_img.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import {motion} from "framer-motion"

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <motion.div
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              duration:0.8
            }}
            className="about_me">
                <div className="about_me-image">
                    <img src={Me} alt="About image" />
                </div>
            </motion.div>

            <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              duration:0.8
            }}
            className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>1+ Years</small>
                    </article>
                    <article className="about_card">
                        <VscFolderLibrary className='about_icon'/>
                        <h5>Projects</h5>
                        <small>5+</small>
                    </article>
                </div>
                <p>I am a passionate React developer with a strong focus on building dynamic, responsive web applications. My expertise lies in creating seamless user interfaces with React.js, and I have a growing knowledge of backend development using Node.js and Express. I am always eager to learn and enhance my skills, with a keen interest in exploring full-stack development.</p>
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Let's Talk</Link>
            </motion.div>
        </div>
    </section>
  )
}

export default About
import React from 'react'
import './about.css'
import {Link} from 'react-scroll'
import Me from '../../assets/my_img.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Me} alt="About image" />
                </div>
            </div>

            <div className="about_content">
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
            </div>
        </div>
    </section>
  )
}

export default About
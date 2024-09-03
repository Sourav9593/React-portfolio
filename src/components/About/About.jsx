import React from 'react'
import './about.css'
import {Link} from 'react-scroll'
import Me from '../../assets/my_img copy.jpg'
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
                            <small>1+ Years</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro exercitationem animi saepe error laborum repudiandae neque magnam. Vero architecto voluptates totam atque odio cum saepe nulla quaerat pariatur. Vitae rem eligendi aut blanditiis?</p>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Let's Talk</Link>
            </div>
        </div>
    </section>
  )
}

export default About
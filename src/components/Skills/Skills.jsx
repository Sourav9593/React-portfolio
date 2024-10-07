import React from 'react';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa6";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb, SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import './skills.css';
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Experience = () => {
    return (
        <section id="skills">
            <h5>The Skills I Have</h5>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <RiReactjsLine className="experience__details-icon" />
                            <h4>React JS</h4>
                        </article>
                        <article className="experience__details">
                            {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                            <FaHtml5 className="experience__details-icon" />
                            <h4> HTML</h4>
                        </article>
                        <article className="experience__details">
                            <FaCss3Alt className="experience__details-icon" />
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                            <RiJavascriptFill className="experience__details-icon" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <TbBrandTailwind className="experience__details-icon" />
                            <h4>Tailwind</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Back-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <IoLogoNodejs className="experience__details-icon" />
                            <h4>Node JS</h4>
                        </article>
                        <article className="experience__details">
                            <SiExpress className="experience__details-icon" />
                            <h4>Express JS</h4>
                        </article>
                        <article className="experience__details">
                            <SiMongodb className="experience__details-icon" />
                            <h4>MongoDB</h4>
                        </article>
                        <article className="experience__details">
                            <TbBrandNextjs className="experience__details-icon" />
                            <h4>Next JS</h4>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icon" />
                            <h4>MySQL</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__languages">
                    <h3>Others</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaJava className="experience__details-icon" />
                            <h4>Java</h4>
                        </article>
                        <article className="experience__details">
                            <SiPython className="experience__details-icon" />
                            <h4>Python</h4>
                        </article>
                        <article className="experience__details">
                            <FaGithub className="experience__details-icon" />
                            <h4>Git</h4>
                        </article>
                        {/* <!-- Add more languages as needed --> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll'
import { GoArrowUpRight } from "react-icons/go";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaRegMoon, FaRegSun } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply the styles to the body when the mode changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#070F2B';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
        }
    }, [isDarkMode]);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const navRef = useRef()

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY >= 80) {
    //             navRef.current.classList.add('nav-after-scroll')
    //         } else {
    //             navRef.current.classList.remove('nav-after-scroll')
    //         }
    //     })
    // }, [])

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false); // Optional: Close navbar on link click in mobile view
    };

    return (
        <div className={isDarkMode ? "dark-navSection" :"navSection"} >
            <nav className="navbar">
                <div className="navbar-logo">
                    <h2>SOURAV.</h2>
                </div>
                <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="menu">
                    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                        <li><Link className={`navLink ${activeLink === "#home" ? "active" : ""}`} onClick={() => handleLinkClick("#home")} to="intro" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
                        <li><Link className={`navLink ${activeLink === "#about" ? "active" : ""}`} onClick={() => handleLinkClick("#about")} to="about" spy={true} smooth={true} offset={-65} duration={500} >About</Link></li>
                        <li><Link className={`navLink ${activeLink === "#skills" ? "active" : ""}`} onClick={() => handleLinkClick("#skills")} to="skills" spy={true} smooth={true} offset={-65} duration={500} >Skills</Link></li>
                        <li><Link className={`navLink ${activeLink === "#projects" ? "active" : ""}`} onClick={() => handleLinkClick("#projects")} to="projects" spy={true} smooth={true} offset={-65} duration={500} >Projects</Link></li>
                        <li><Link className={`navLink ${activeLink === "#contact" ? "active" : ""}`} onClick={() => handleLinkClick("#contact")} to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
                    </ul>
                </div>

                <div className={click ? "mobile-menu-active" : "mobile-menu-hide"}>
                    <ul>
                        <li><Link className={`navLink ${activeLink === "#home" ? "active" : ""}`} onClick={() => handleLinkClick("#home")} to="intro" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
                        <li><Link className={`navLink ${activeLink === "#about" ? "active" : ""}`} onClick={() => handleLinkClick("#about")} to="about" spy={true} smooth={true} offset={-65} duration={500} >About</Link></li>
                        <li><Link className={`navLink ${activeLink === "#skills" ? "active" : ""}`} onClick={() => handleLinkClick("#skills")} to="skills" spy={true} smooth={true} offset={-65} duration={500} >Skills</Link></li>
                        <li><Link className={`navLink ${activeLink === "#projects" ? "active" : ""}`} onClick={() => handleLinkClick("#projects")} to="projects" spy={true} smooth={true} offset={-65} duration={500} >Projects</Link></li>
                        <li><Link className={`navLink ${activeLink === "#contact" ? "active" : ""}`} onClick={() => handleLinkClick("#contact")} to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
                    </ul>
                </div>

                <div className="right">
                    <button onClick={toggleMode}>{isDarkMode ? <FaRegSun /> : <FaRegMoon />}</button>
                    
                    <div className="contact">
                        <button><Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></button>
                        <GoArrowUpRight />
                    </div>
                </div>

                <div className='nav-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

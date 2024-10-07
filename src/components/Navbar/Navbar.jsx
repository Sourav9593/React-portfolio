// import React from 'react'
// import './navbar.css'
// import { IoHomeOutline } from "react-icons/io5";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import {Link} from 'react-scroll'

// const Navbar = () => {

//   const handleSetActive = (to) => {
//     console.log(to);
//   };

//   return (
//     <nav>
//       <Link className='navLink' to="intro" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}><IoHomeOutline /></Link>
//       <Link className='navLink'to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}><BiBook /></Link>
//       <Link className='navLink'to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}><RiServiceLine /></Link>
//       <Link className='navLink'to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}><BiMessageSquareDetail /></Link>
//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import "./navbar2.css"; // Link to the CSS file for styling
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Optional: Close navbar on link click in mobile view
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Logo</h2>
      </div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link className={`navLink ${activeLink === "#home" ? "active" : ""}`} onClick={() => handleLinkClick("#home")} to="intro" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link className={`navLink ${activeLink === "#about" ? "active" : ""}`} onClick={() => handleLinkClick("#about")} to="about" spy={true} smooth={true} offset={-65} duration={500} >About</Link></li>
        <li><Link className={`navLink ${activeLink === "#skills" ? "active" : ""}`} onClick={() => handleLinkClick("#skills")} to="skills" spy={true} smooth={true} offset={-65} duration={500} >Skills</Link></li>
        <li><Link className={`navLink ${activeLink === "#projects" ? "active" : ""}`} onClick={() => handleLinkClick("#projects")} to="projects" spy={true} smooth={true} offset={-65} duration={500} >Projects</Link></li>
        <li><Link className={`navLink ${activeLink === "#contact" ? "active" : ""}`} onClick={() => handleLinkClick("#contact")} to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

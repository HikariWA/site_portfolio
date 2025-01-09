import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import des icônes

import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // pour ouvrir menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/expertise">Expertise</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/members">Members</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
            </ul>
            <div className="social-icons">
                <a href="hikari-web-agency@gmail.com"><FaEnvelope size={24} /></a>
                <a href="tel:123456789"><FaPhoneAlt size={24} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

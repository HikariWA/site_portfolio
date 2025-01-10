import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css'

const About = () => {
  const [hovered, setHovered] = useState(false)
  const images = [
    "/assets/s.jpg",
    "/assets/s2.jpg",
    "/assets/aura.jpg"
  ]
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleHover = (index) => {
    setHovered(index)
    setCurrentImage(images[index])
  };

  return (
    <div className="about-container">
      <div className="about-left-section">
        <div 
          className="about-top-left"
          onMouseEnter={() => handleHover(0)}
        >
          <motion.div
            className="about-content"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: hovered === 0 ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Titre wshwhs</h2>
            <p>Cos tam cos ale nie wiem co</p>
          </motion.div>
        </div>
        <div 
          className="about-bottom-left"
          onMouseEnter={() => handleHover(1)}
        >
          <motion.div
            className="about-content"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: hovered === 1 ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Titre2 wshhhh</h2>
            <p>Druga czesc cos tam cos</p>
          </motion.div>
        </div>
      </div>
      <div className="about-right-section">
        <motion.img
          src={currentImage}
          alt="Current"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default About

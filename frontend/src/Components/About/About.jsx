import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css'

const About = () => {
  const [hovered, setHovered] = useState(null)
  const images = [
    "/assets/s.jpg",
    "/assets/s2.jpg",
    "/assets/aura.jpg"
  ]
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleHover = (index) => {
    setHovered(index)
    setCurrentImage(images[index])
  }

  return (
    <div className="about-container">
      <div className="about-left-section">
        <div 
          className="about-top-left"
          onMouseEnter={() => handleHover(0)}
        >
          <motion.div
            className="about-content"
            initial={{ rotateX: 0, backgroundColor: "#fff" }}
            animate={{ 
              rotateX: hovered === 0 ? 180 : 0,
              backgroundColor: hovered === 0 ? "transparent" : "#fff"  
            }}
            transition={{ duration: 0.8 }}
          >
            <div className={`front ${hovered === 0 ? 'hidden' : ''}`}>
                <div className='front-content-first'>
                    <h2>Titre Front wshwhs</h2>
                    <p>Cos tam cos ale nie wiem co</p>
                </div>
                <div className='front-content-second'>
                    <p>hey</p>
                </div>
            </div>
            <div className={`back ${hovered === 0 ? 'visible' : ''}`}>
              <h2>Tritre Back pshhh</h2>
              <p>okokokokokokokok</p>
            </div>
          </motion.div>
        </div>
        <div 
          className="about-bottom-left"
          onMouseEnter={() => handleHover(1)}
        >
          <motion.div
            className="about-content"
            initial={{ rotateX: 0, backgroundColor: "#fff" }}
            animate={{ 
              rotateX: hovered === 1 ? 180 : 0,
              backgroundColor: hovered === 1 ? "transparent" : "#fff"  
            }}
            transition={{ duration: 0.8 }}
          >
            <div className={`front ${hovered === 1 ? 'hidden' : ''}`}>
              <h2>Titre2 wshhhh</h2>
              <p>Druga czesc cos tam cos</p>
            </div>
            <div className={`back ${hovered === 1 ? 'visible' : ''}`}>
                <div className='back-content-first'>
                    <p>hey back</p>
                </div>
                <div className='back-content-second'>
                    <h2>Titre Back wshwhs</h2>
                    <p>Cos tam cos ale nie wiem co baaack</p>
                </div>
            </div>
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


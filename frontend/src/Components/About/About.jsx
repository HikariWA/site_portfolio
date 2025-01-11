import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css'

const About = () => {
    const [hovered, setHovered] = useState(null)
    const images = [
        "/assets/s2.jpg",
        "/assets/aura.jpg"
    ]
    const [currentImage, setCurrentImage] = useState(images[0])
    const title = "About us"

    const handleHover = (index) => {
        setHovered(index)
        setCurrentImage(images[index])
    }

    // animations pour chaque lettre
    const letterAnimations = {
        A: {
            scale: [1, 1.5, 1],
            color: ["#000", "#ff0000", "#fff"], 
            transition: { duration: 1, repeatType: 'loop' },
        },
        B: {
            rotate: [0, 45, -45, 0],  
            transition: { duration: 1, repeatType: 'loop' },
        },
        O: {
            rotate: [0, 360],
            transition: { duration: 2, repeatType: 'loop' },
        },
        T: {
            y: [0, -20, 0],  
            transition: { duration: 0.5, repeatType: 'loop' },
        },
        U2: {
            scale: [1, 1.3, 0.7, 1], 
            skew: ["0deg", "15deg", "-15deg", "0deg"],
            transition: { duration: 2, repeatType: 'loop' },
        },
        U1: { 
            scale: [1, 1.2, 1],
            color: ["#000", "#00ff00", "#fff"],
            transition: { duration: 1.2, repeatType: 'loop' },
        },
        S: {
            scale: [1, 1.5, 1],
            transition: { duration: 1, repeatType: 'loop' },
        },
    };

    const defaultLetterAnimation = {
        scale: [1, 1.05, 1],
        transition: { duration: 0.6, repeat: Infinity, repeatType: 'loop' }
    };

    return (
        <div className='about-container-all'>
            <div className="about-title">
                <h2>
                    {title.split("").map((letter, index) => {
                        let animation
                        if (letter.toUpperCase() === 'U') {
                            if (index === 3) {
                                animation = letterAnimations['U1']
                            } else if (index === 6) {
                                animation = letterAnimations['U2']
                            }
                        } else {
                            animation = letterAnimations[letter.toUpperCase()] || defaultLetterAnimation
                        }
                        return (
                            <motion.span
                                key={index}
                                style={{ display: 'inline-block' }}
                                animate={animation}
                            >
                                {letter}
                                {index === 4 && <span>&nbsp;</span>} 

                            </motion.span>
                        );
                    })}
                </h2>
            </div>
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
                            <div className={`up-front front ${hovered === 0 ? 'hidden' : ''}`}>
                                <h2>HIKARI</h2>
                                <p>Une histoire de passion, de savoir-faire.</p>
                            </div>
                            <div className={`up-back back ${hovered === 0 ? 'visible' : ''}`}>
                                <div className='up-back-content-first'>
                                    <img src='/assets/picture.png' alt='image-about'/>
                                </div>
                                <div className='up-back-content-second'>
                                    <h2>Qui sommes-nous?</h2>
                                    <p>Hikari est né d'une rencontre entre passion et détermination. Dans un monde où le code occupe souvent plus de place que nos moments partagés avec nos proches, deux visionnaires ont décidé de créer ce concept unique. Hikari incarne l'union de leurs aspirations et de leur engagement à donner vie à un projet qui reflète leurs valeurs et leur créativité.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div
                        className="about-bottom-left"
                        onMouseEnter={() => handleHover(1)}
                    >
                        <motion.div
                            className="down-about-content"
                            initial={{ rotateX: 0, backgroundColor: "#fff" }}
                            animate={{
                                rotateX: hovered === 0 ? 180 : 0,
                                backgroundColor: hovered === 0 ? "transparent" : "#fff"
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={`down-front front ${hovered === 0 ? 'hidden' : ''}`}>
                                <div className='down-back-content-first'>
                                    <img src='/assets/color.png' alt='image-about'/>
                                </div>
                                <div className='down-back-content-second'>
                                    <h2>Titre Back wshwhs</h2>
                                    <p>Cos tam cos ale nie wiem co baaack</p>
                                </div>
                            </div>
                            <div className={`down-back back ${hovered === 0 ? 'visible' : ''}`}>
                                <h2>Titre Front wshwhs ABS</h2>
                                <p>Cos tam cos ale nie wiem co</p>
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
        </div>
    )
}

export default About

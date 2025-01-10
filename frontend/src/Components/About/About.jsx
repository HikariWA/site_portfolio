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
            color: ["#000", "#ff0000", "#000"], 
            transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
        },
        B: {
            rotate: [0, 45, -45, 0],  
            transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
        },
        O: {
            rotate: [0, 360],
            transition: { duration: 2, repeat: Infinity, repeatType: 'loop' },
        },
        T: {
            y: [0, -20, 0],  
            transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
        },
        U: {
            scale: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
        },
        S: {
            scale: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
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
                        const animation = letterAnimations[letter.toUpperCase()] || defaultLetterAnimation
                        return (
                            <motion.span
                                key={index}
                                style={{ display: 'inline-block' }}
                                animate={animation}
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                </h2>



                {/* {title.split("").map((letter, index) => {
                    console.log(`Letter: ${letter}`);
                    if (letter === " ") return <span key={index}>{letter}</span>;

                    const letterKey = letter.toUpperCase();
                    const animation = letterAnimations[letterKey] || defaultLetterAnimation;
                    
                    return (
                        <motion.span
                            key={index}
                            style={{ display: 'inline-block' }}
                            {...animation}
                        >
                            {letter}
                        </motion.span>
                    );
                })} */}
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
                            <div className={`front ${hovered === 0 ? 'hidden' : ''}`}>
                                <h2>Titre Front wshwhs</h2>
                                <p>Cos tam cos ale nie wiem co</p>
                            </div>
                            <div className={`back ${hovered === 0 ? 'visible' : ''}`}>
                                <div className='up-back-content-first'>
                                    <p>hey back</p>
                                </div>
                                <div className='up-back-content-second'>
                                    <h2>Titre Back wshwhs</h2>
                                    <p>Cos tam cos ale nie wiem co baaack</p>
                                </div>
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
                                <div className='down-front-content-first'>
                                    <h2>Titre Front wshwhs</h2>
                                    <p>Cos tam cos ale nie wiem co</p>
                                </div>
                                <div className='down-front-content-second'>
                                    <p>hey</p>
                                </div>
                            </div>
                            <div className={`back ${hovered === 1 ? 'visible' : ''}`}>
                                <div className='down-back-content-first'>
                                    <p>hey back</p>
                                </div>
                                <div className='down-back-content-second'>
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
        </div>
    )
}

export default About

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Members.css';

const Members = () => {
    const [members, setMembers] = useState([])
    const [hovered, setHovered] = useState(null)
    const titleText = "Team"

    const words = ["Innovation", "Idea", "Creation", "Design", "Technology", "Development", "Creativity", "Projects", "Solutions", "Collaborations", "Art", "Passion", "Pro", "Visionary", "IT", "Social Media", "Backend", "Frontend", "Culture", "Vision"];

    useEffect(() => {
        const membersData = fetch('/members.json').then(response => response.json());
        const membersImages = fetch('/images.json').then(response => response.json());

        Promise.all([membersData, membersImages])
            .then(([membersData, membersImagesData]) => {
                handleMembersWithImages(membersData, membersImagesData);
            })
            .catch(error => console.error("Error:", error));
    }, []);

    const handleMembersWithImages = (membersData, membersImagesData) => {
        const membersWithImages = membersData.map(member => {
            const memberImage = membersImagesData.find(image => image.id === member.image_id);
            return {
                ...member,
                image: memberImage ? memberImage.image : ''
            };
        });
        setMembers(membersWithImages);
    };

    useEffect(() => {
        gsap.fromTo('.member-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.3, duration: 1 });
        gsap.fromTo('.members-title span', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 1 });
    }, [members]);

    return (
        <div className='members-container-all'>
            {/* title */}
            <motion.div 
                className="members-title"
                whileHover={{
                    transition: { staggerChildren: 0.05 }
                }}
            >
                {titleText.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ rotate: 0, scale: 0, x: -50 }}
                        animate={{
                            rotate: [0, 20, -20, 10, 0],  
                            scale: [0, 1.5, 1],           
                            x: [0, -20, 20, 0],  
                        }}
                        whileHover={{
                            rotate: [0, 20, -20, 10, 0],  
                            scale: [0, 1.5, 1],           
                            x: [0, -20, 20, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeatDelay: 0.5,   
                            ease: "easeInOut",  
                        }}
                        className="letter"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Team list */}
            <div className='members-container'>
                <div>
                    {members.length > 0 ? (
                        <div className="row members">
                            {members.map((member, index) => (
                                <div className="div-indi col-md-4 col-sm-6 col-xs-12" key={index}>
                                    <div className="member-card">
                                        <div 
                                            className="cover" 
                                            style={{
                                                backgroundImage: `url(/assets/${member.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        >
                                            <div className="cover-content">
                                                <h2>{member.name}</h2>
                                                <p>{member.order}</p>
                                            </div>
                                        </div>
                                        <div className="member-card-back">
                                            <div className="social-links programs-images">
                                                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                                                {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                                                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                                                {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No members :'(</p>
                    )}
                </div>
            </div>

            {/* word animes */}
            <div className="words-container">
                {words.map((word, index) => (
                    <motion.div
                        key={index}
                        className="word"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100,
                            rotate: Math.random() * 360,
                            transition: { delay: Math.random() * 2 }
                        }}
                        whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            letterSpacing: "2px",  
                            textShadow: "5px 5px 15px rgba(0,0,0,0.3)", 
                            transition: { type: 'spring', stiffness: 300 }
                        }}
                    >
                        {word}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Members

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Members.css'

const Members = () => {
    const [members, setMembers] = useState([])

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

    const titleText = "Team"

    return (
        <div className='members-container-all'>
                <div className="members-title">
                    {titleText.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ rotate: 0, scale: 0, x: -50 }}
                            animate={{
                                rotate: [0, 20, -20, 10, 0],  
                                scale: [0, 1.5, 1],           
                                x: [0, -20, 20, 0],  
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,   
                                repeatDelay: 0.5,   
                                ease: "easeInOut",  
                            }}
                            className="letter"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
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
                                                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                                                {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                                                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                                                {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                                                {member.email && <a href={`mailto:${member.email}`}>Email</a>}
                                                {member.phone && <a href={`tel:${member.phone}`}>Phone</a>}
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
        </div>
    )
}

export default Members
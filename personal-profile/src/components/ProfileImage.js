// src/components/ProfileImage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ imageUrl, altText, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            style={{
                cursor: 'pointer',
                width: '200px',
                height: '200px',
                position: 'relative',
                margin: 'auto',
            }}
        >
            {/* Floating neon circles */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '-30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 0, 255, 0.3)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
                    filter: 'blur(2px)',
                    zIndex: 0,
                }}
                animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-25px',
                    right: '-25px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 255, 0.3)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                    filter: 'blur(2px)',
                    zIndex: 0,
                }}
                animate={{
                    y: [0, 10, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Profile Image */}
            <motion.img
                src={imageUrl}
                alt={altText}
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: isHovered
                        ? '0 0 20px rgba(0, 0, 0, 0.3)'
                        : '0 0 80px rgba(0, 0, 0, 0.1)',
                }}
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
                transition={{ duration: 0.3 }}
            />
        </div>
    );
};

export default ProfileImage;

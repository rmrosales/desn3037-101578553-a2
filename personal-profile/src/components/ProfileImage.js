// src/components/ProfileImage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ imageUrl, altText, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick} // ⬅️ Use the prop passed from parent
            className="profile-image-container"
            style={{
                cursor: 'pointer',
                maxWidth: '300px',
                margin: 'auto',
            }}
            animate={{
                scale: isHovered ? 1.2 : 1,
                filter: isHovered ? 'grayscale(10%)' : 'grayscale(100%)',
            }}
            transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            <img
                src={imageUrl}
                alt={altText}
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',      // ensures full coverage
                    objectPosition: 'center',
                    borderRadius: '100px',
                    boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                }}
            />
        </motion.div>
    );
};

export default ProfileImage;

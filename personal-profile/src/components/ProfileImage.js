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
        scale: isHovered ? 1.1 : 1,
        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '50%',
          boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
        }}
      />
    </motion.div>
  );
};

export default ProfileImage;

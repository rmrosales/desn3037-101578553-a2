// src/components/ProfileOverlay.js
import React from 'react';
import { motion } from 'framer-motion';

const ProfileOverlay = ({ name, title, bio, onClose }) => {
  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <motion.img
        src="/path/to/your/image.jpg"
        alt="Profile"
        style={{
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          marginBottom: '20px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
      />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{bio}</p>
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default ProfileOverlay;

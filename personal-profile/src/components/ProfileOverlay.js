// src/components/ProfileOverlay.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProfileOverlay = ({ name, title, bio, onClose }) => {
    const [animationState, setAnimationState] = useState({
        imgScale: 0,
        opacity: 0,
        yOffset: 30,
    });

    // Example of using useEffect to update animation state when component mounts
    useEffect(() => {
        setAnimationState({
            imgScale: 1,
            opacity: 1,
            yOffset: 0,
        });
    }, []); // Empty dependency array makes this run on mount

    return (
        <motion.div
            className="profile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationState.opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // 🟢 faster overlay fade-in/out
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: '#fff',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <motion.img
                src="hero-mini-photo.webp"
                alt="Profile"
                style={{
                    width: '150px',
                    borderRadius: '50%',
                    marginBottom: '20px',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: animationState.imgScale }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} // 🟢 snappy zoom
            />

            <motion.h2
                initial={{ y: animationState.yOffset, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                {name}
            </motion.h2>

            <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
            >
                {title}
            </motion.h3>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={{ maxWidth: '500px', textAlign: 'center', margin: '1rem 0' }}
            >
                {bio}
            </motion.p>

            {/* Container for both buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    style={{
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        padding: '0.5rem 1.25rem',
                        fontSize: '1rem',
                        fontWeight: 500,
                        border: '1px solid #dc3545',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        lineHeight: '1.5',
                        display: 'flex', // Ensure flex for consistent height
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '42px', // Set height consistently
                        width: 'auto',
                        boxSizing: 'border-box',
                        transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    }}
                    whileHover={{
                        backgroundColor: '#bb2d3b',
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                >
                    Close
                </motion.button>

                {/* Portfolio Button */}
                <motion.a
                    href="https://rmrosales.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    style={{
                        backgroundColor: '#198754',
                        color: '#fff',
                        padding: '0.5rem 1.25rem',
                        fontSize: '1rem',
                        fontWeight: 500,
                        border: '1px solid #198754',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        lineHeight: '1.5',
                        display: 'flex', // Ensure flex for consistent height
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '42px', // Set height consistently
                        width: 'auto',
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    }}
                    whileHover={{
                        backgroundColor: '#157347',
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                >
                    View Portfolio
                </motion.a>
            </div>
        </motion.div>
    );
};

export default ProfileOverlay;

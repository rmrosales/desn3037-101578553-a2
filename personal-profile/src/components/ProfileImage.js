// src/components/ProfileImage.js
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ProfileImage = ({ imageUrl, altText, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [pulse, setPulse] = useState(false);
    const orbControls = useAnimation();
    const ringControls = useAnimation();

    const handleClick = () => {
        setPulse(true);

        // Trigger pulse animation for orbs
        orbControls.start({
            scale: [1, 1.5, 1],
            opacity: [1, 0.6, 1],
            transition: { duration: 0.5 },
        });

        // Run any external click action
        if (onClick) onClick();
    };

    const neonOrbs = [
        {
            size: 20,
            color: 'rgba(255, 0, 255, 0.3)',
            shadow: 'rgba(255, 0, 255, 0.6)',
            style: { top: '-30px', left: '-30px' },
            anim: { x: [0, 10, 0], y: [0, -10, 0], duration: 4 },
        },
        {
            size: 10,
            color: 'rgba(0, 255, 255, 0.3)',
            shadow: 'rgba(0, 255, 255, 0.5)',
            style: { bottom: '-25px', right: '-25px' },
            anim: { x: [0, -10, 0], y: [0, 10, 0], duration: 5 },
        },
        {
            size: 30,
            color: 'rgba(255, 255, 0, 0.3)',
            shadow: 'rgba(255, 255, 0, 0.5)',
            style: { top: '-20px', right: '10px' },
            anim: { x: [0, -5, 0], y: [0, 5, 0], duration: 4 },
        },
        {
            size: 10,
            color: 'rgba(0, 255, 127, 0.3)',
            shadow: 'rgba(0, 255, 127, 0.5)',
            style: { bottom: '10px', left: '-20px' },
            anim: { x: [0, 6, 0], y: [0, -6, 0], duration: 7 },
        },
        {
            size: 40,
            color: 'rgba(0, 0, 255, 0.2)',
            shadow: 'rgba(0, 0, 255, 0.5)',
            style: { top: '30%', left: '-50px' },
            anim: { x: [0, 15, 0], y: [0, -15, 0], duration: 8 },
        },
        
    ];

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                ringControls.start({ rotate: 360, transition: { repeat: Infinity, duration: 10, ease: 'linear' } });
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                ringControls.stop();
            }}
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                width: '200px',
                height: '200px',
                position: 'relative',
                margin: 'auto',
            }}
        >
            {/* Aura Glow Ring */}
            <motion.div
                animate={ringControls}
                style={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    top: '-20px',
                    left: '-20px',
                    zIndex: 0,
                    filter: 'blur(2px)',
                }}
            />

            {/* Floating neon orbs */}
            {neonOrbs.map((orb, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        borderRadius: '50%',
                        background: orb.color,
                        boxShadow: `0 0 20px ${orb.shadow}`,
                        filter: 'blur(2px)',
                        zIndex: 0,
                        ...orb.style,
                    }}
                    animate={pulse ? orbControls : {
                        x: orb.anim.x,
                        y: orb.anim.y,
                    }}
                    transition={{
                        duration: orb.anim.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    onAnimationComplete={() => setPulse(false)}
                />
            ))}

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

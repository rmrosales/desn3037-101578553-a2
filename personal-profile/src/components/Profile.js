// src/components/Profile.js
import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import ProfileOverlay from './ProfileOverlay';

const Profile = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => setShowOverlay(!showOverlay);

  return (
    <div className="profile">
      <ProfileImage
        imageUrl="hero-mini-photo.webp"
        altText="Profile Headshot"
        onClick={toggleOverlay}
      />
      {showOverlay && (
        <ProfileOverlay
          name="Romeo Martin J. Rosales"
          title="UI/UX Designer"
          bio="I'm Romeo, a product designer and developer from Toronto who loves bringing ideas to life
through clean design and smooth interactions - fueled by creativity and probably too much coffee! With a focus on user-centered solutions, I combine creativity and technical expertise to craft seamless experiences that resonate with users and meet business goals."
          onClose={toggleOverlay}
        />
      )}
    </div>
  );
};

export default Profile;

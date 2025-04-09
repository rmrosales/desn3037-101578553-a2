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
        imageUrl="profile-ico.svg"
        altText="Profile Headshot"
        onClick={toggleOverlay}
      />
      {showOverlay && (
        <ProfileOverlay
          name="Romeo Martin J. Rosales"
          title="UI/UX Designer"
          bio="Passionate designer with a focus on user experience, working with diverse teams to create intuitive digital solutions."
          onClose={toggleOverlay}
        />
      )}
    </div>
  );
};

export default Profile;

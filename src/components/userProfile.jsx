import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHeader = ({ user }) => {
  return (
    <header>
      <div 
        className="flex flex-col items-center h-[35rem] p-4 bg-white shadow rounded"
        style={{ 
          backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/2331093205/display_1500/stock-photo-a-male-farmer-holding-tablet-working-in-agricultural-field-in-corn-field-inspecting-agricultural-2331093205.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img 
          src={user.profilImage ? `http://localhost:3000/${user.profilImage}` : ""} 
          alt="Profile" 
          className="w-24 h-24 rounded-full" 
        />
      </div>
      
    </header>
  );
};

export default ProfileHeader;

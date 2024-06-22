import React from 'react';

const ProfileHeader = ({ user }) => {
  return (
    <header>
      <div 
        className="flex flex-col items-center h-[35rem] p-4 bg-white shadow rounded"
        style={{ 
          backgroundImage: `url(http://localhost:3000/${user.profilImage})`,
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

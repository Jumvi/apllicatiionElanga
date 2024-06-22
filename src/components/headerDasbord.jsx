// src/components/Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeaderDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state)=>state.auth.user);
  const navigate = useNavigate();

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const hundleClick = ()=>{
    navigate('/')
  }

  return (
    <header className="bg-gray-100 text-white flex justify-between items-center p-4">
      <button onClick={()=>hundleClick()}  className="text-lg bg-green-400 w-40 h-10  font-bold">Plateforme</button>
      <div className="relative">
        <div className='flex'>
        <span className='text-green-600 text-xl'>{user.nom}</span>
        <img
          src={user.profilImage ? `http://localhost:300/${user.profileImage}`: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png'}
          alt="Profil"
          className="rounded-full cursor-pointer"
          onClick={toggleMenu}
        />
        </div>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Changer d'utilisateur</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Déconnexion</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderDashboard;

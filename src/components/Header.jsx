import React from 'react';
import { NavLink } from 'react-router-dom';
import ELaNGA from '../assets/logoEL.png';
import UserMenu from './userMenu';

export default function Header() {
  const isConnect = JSON.parse(localStorage.getItem('isConnect'));
  const user = JSON.parse(localStorage.getItem('user'))

  return (
  <nav className="flex flex-wrap justify-between items-center border-b shadow p-4">
    <div className="flex items-center">
      <NavLink to="/">
        <img src={ELaNGA} alt="logo" className="w-32 h-16 md:w-48 md:h-20" />
      </NavLink>
    </div>
    
    <div className="flex flex-grow justify-end items-center">
      <ul className="flex flex-wrap gap-4 md:gap-10 items-center">
        <li>
          <NavLink to="/projects" className="text-blue">
            <button className="bg-white text-black font-normal">Projets</button>
          </NavLink>
        </li>

        {isConnect ? (
<>
  {user && user.role.includes('admin') ? (
    <>
      <NavLink to="/contribuer" className="text-blue">
        <button className="bg-white text-black font-normal">Contribuer</button>
      </NavLink>
      <NavLink to="/creationProjets" className="text-blue">
        <button className="bg-white text-black font-normal">Créer un projet</button>
      </NavLink>
    </>
  ) : user && user.role.includes('entrepreneur') ? (
    <NavLink to="/creer-projet" className="text-blue">
      <button className="bg-white text-black font-normal">Créer un projet</button>
    </NavLink>
  ) : (
    <NavLink to="/contribuer" className="text-blue">
      <button className="bg-white text-black font-normal">Contribuer</button>
    </NavLink>
  )}
</>
) : (
<>
  <li>
    <NavLink to="/connexion" className="text-lime-400">
      <button className="rounded w-32 h-10 bg-white outline outline-offset-0 outline-lime-400 md:w-40">
        Se connecter
      </button>
    </NavLink>
  </li>
  <li>
    <NavLink to="/creationCompte" className="text-black font-semibold">
      <button className="bg-lime-400 text-white w-32 h-10 rounded md:w-40">
        Créer un compte
      </button>
    </NavLink>
  </li>
</>
)}

      </ul>

      <div className="flex items-center ml-4">
        <UserMenu />
      </div>
    </div>
  </nav>
  );
}

import React from 'react'
import { NavLink } from 'react-router-dom';
import ELaNGA from '../assets/ELaNGA2.png';

export default function Header() {
    return (
        <nav className='flex justify-between border-b shadow  p-5 '>
           <ul className='  w-1/2   self-start'>
                <li > <NavLink to='/'><img src={ELaNGA} alt="logo"   className='w-40 h-20'/></NavLink></li>
           </ul>
           <ul className=' grid grid-cols-2 gap-4 w-1/2 self-center'>
                <ul className='grid grid-cols-3 '>
                    <li> <NavLink to='/projects' className='text-black font-semibold'>Projets</NavLink></li>
                    <li> <NavLink to='/creationProjets' className='text-black font-semibold'>Créer un projet</NavLink></li>
                    <li> <NavLink to='/contribuer' className='text-black font-semibold'>Contribuer</NavLink></li>
                </ul>
                <ul className='flex gap-4  '>
                    <li> <NavLink to='connexion' className='text-black font-semibold'>SE CONNECTER</NavLink></li>
                    <li className='flex items-start'> <NavLink to='creationCompte' className='text-black font-semibold flex  '><button className='bg-indigo-700 text-white w-40 h-10 rounded'>Créer un compte</button></NavLink></li>
                </ul>
           </ul>
           <hr />
            
        </nav>
    )
}

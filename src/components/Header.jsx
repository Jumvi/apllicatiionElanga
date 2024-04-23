import React from 'react'
import { NavLink } from 'react-router-dom';
import ELaNGA from '../assets/ELaNGA2.png';

export default function Header() {
    return (
        <nav className='flex justify-between border-b shadow'>
           <ul className='  w-1/2   self-center items-end '>
                <li className='ml-20' > <NavLink to='/' ><img src={ELaNGA} alt="logo"   className='w-48 h-20'/></NavLink></li>
           </ul>
           <ul className=' flex   w-1/2 '>
                <ul className='flex gap-10 items-center self-center '>
                    <li className='flex  '> <NavLink to='/projects' className='text-blue'><button className='bg-white text-black font-normal'>Projets</button></NavLink></li>
                    <li className='flex  '> <NavLink to='/creationProjets' className='text-blue'><button className='bg-white text-black font-normal'>Créer un projet</button></NavLink></li>
                    <li className='flex  '> <NavLink to='/contribuer' className='text-blue'><button className='bg-white text-black font-normal'>Contribuer</button></NavLink></li>
                    <li className='flex  '> <NavLink to='/connexion' className='text-blue'><button className='rounded w-40 h-10  bg-white outline outline-offset-0 outline-indigo-500'>Se connecter</button></NavLink></li>
                    <li className='flex  items-center'> <NavLink to='creationCompte' className='text-black font-semibold flex  '><button className='bg-indigo-700 text-white w-40 h-10 rounded'>Créer un compte</button></NavLink></li>
                </ul>
           </ul>
        </nav>
    )
}

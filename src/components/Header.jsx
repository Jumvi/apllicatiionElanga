import React from 'react'
import { NavLink } from 'react-router-dom';
import ELaNGA from '../assets/ELaNGA.png';

export default function Header() {
    return (
        <nav>
           <ul>
              <li> <NavLink to='/'><img src={ELaNGA} alt="logo" /></NavLink></li>
              <li> <NavLink></NavLink></li>
              <li> <NavLink></NavLink></li>
              <li> <NavLink></NavLink></li>
              <li> <NavLink></NavLink></li>
              <li> <NavLink></NavLink></li>
            </ul> 
        </nav>
    )
}

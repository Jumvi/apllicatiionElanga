// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaProjectDiagram, FaDonate, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-green-700 text-white p-5 ml-5">
      <div className="p-4">
        <h1 className="text-2xl font-bold underline underline-offset-2">Crowdfunding</h1>
      </div>
      <nav className="mt-10">
      <ul>
        <li className="mb-6 flex items-center">
          <FaUser className="mr-2 text-white" />
          <Link to="/users" className="text-lg text-white hover:text-blue-600">
            Gestion des utilisateurs
          </Link>
        </li>
        <li className="mb-6 flex items-center">
          <FaProjectDiagram className="mr-2 text-white" />
          <Link to="/projets-list" className="text-lg text-white hover:text-blue-600">
            Gestion des projets
          </Link>
        </li>
        <li className="mb-6 flex items-center">
          <FaDonate className="mr-2 text-white" />
          <Link to='/contribution' className="text-lg text-white hover:text-blue-600">
            Gestion des contributions
          </Link>
        </li>
        <li className="mb-6 flex items-center">
          <FaChartBar className="mr-2 text-white" />
          <Link to="/statistics" className="text-lg text-white hover:text-blue-600">
            Statistiques
          </Link>
        </li>
      </ul>
    </nav>

    <button className="text-2xl border font-bold text-bleu ">Deconenexion</button>
    </div>
  );
};

export default Sidebar;

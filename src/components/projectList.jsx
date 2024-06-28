// src/components/UserList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addManagingUser } from '../../config/slicer';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const users = JSON.parse(localStorage.getItem('manageUser'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3000/projects';

  async function fetchProjects(){
    try {
      const response = await axios.get(apiUrl);
      setProjects(response.data);
      localStorage.setItem('projet', JSON.stringify(response.data));
    } catch (error) {
      console.log('Erreur lors de la récupération des projets', error);
    }
  }

  useEffect(() => {
    fetchProjects();
    
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((projet) =>
        projet.titre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, projects]);

  const handleClick = (id) => {
    dispatch(addManagingUser('projet', projects));
    navigate(`/details-project/${id}`);
  }

  return (
    <div className="mb-6 p-5 m-5 border border-green-600">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-[50vh] overflow-y-auto">
      <input
          type="text"
          placeholder="Rechercher un projet"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-green-600 rounded-md"
        />
        <ul>
        {filteredProjects.map((p) => {
            const user = users.find((u) => u.id === p.userId);

            return (
                <li key={p.id} className="border-b border-gray-200 p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <Link onClick={() => handleClick(p.id)}>
                          <h4 className="font-bold">{p.titre}</h4>
                        </Link>
                        <p>{p.categorie}</p>
                         {user && <p>Créé par: {user.nom}</p>} 
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Modifier
                      </button>
                    </div>
                </li>
              );
            })}

        </ul>
      </div>
    </div>
  );
};

export default ProjectList;

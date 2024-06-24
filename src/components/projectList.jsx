// src/components/UserList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addManagingUser } from '../../config/slicer';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
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

  const handleClick = (id) => {
    dispatch(addManagingUser('projet', projects));
    navigate(`/details-project/${id}`);
  }

  return (
    <div className="mb-6 p-5 m-5 border border-green-600">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-[50vh] overflow-y-auto">
        <ul>
          {projects.map(p => (
            <li key={p.id} className="border-b border-gray-200 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <Link onClick={() => handleClick(p.id)}>
                    <h4 className="font-bold">{p.titre}</h4>
                  </Link>
                  <p>{p.categorie}</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Modifier
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;

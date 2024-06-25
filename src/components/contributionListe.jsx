import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addContribution } from '../../config/slicer';

const ContributionList = () => {
  const [contributions, setContributions] = useState([]);
  const projects = useSelector((state) => state.auth.projet);
  const [filteredContributions, setFilteredContributions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3000/contribution';

  async function fetchContributions() {
    try {
      const response = await axios.get(apiUrl);
      setContributions(response.data.contribution);
      localStorage.setItem('titre', JSON.stringify(response.data.titre));
      localStorage.setItem('contribution', JSON.stringify(response.data.contribution));
    } catch (error) {
      console.log('Erreur lors de la récupération des contributions', error);
    }
  }

  useEffect(() => {
    fetchContributions();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredContributions(contributions);
    } else {
      const filteredProjects = projects.filter((p) => 
        p.titre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const filteredContributions = contributions.filter((c) =>
        filteredProjects.some((p) => p.id === c.projectId)
      );
      setFilteredContributions(filteredContributions);
    }
  }, [searchTerm, projects, contributions]);

  const handleClick = (id) => {
    localStorage.setItem('contribution', JSON.stringify(contributions));
    dispatch(addContribution(contributions));
    navigate(`/contribution/${id}`);
  };

  return (
    <div className="mb-6 border border-green p-5 m-5">
      <h3 className="text-2xl font-bold mb-4 flex flex-col items-center text-green-600 uppercase">Gestion des contributions</h3>
      <input 
        type="text"
        value={searchTerm}
        placeholder='Rechercher un projet'
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-green-600 rounded-md mb-4"
      />
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-[50vh] overflow-y-auto">
        <ul>
          {filteredContributions.map(c => {
            const projet = projects.find(p => p.id === c.projectId);
            return (
              <li key={c.id} className="border-b border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p>Titre projet : {projet ? projet.titre : "Inconnu"}</p>
                    <Link onClick={() => handleClick(c.id)}>
                      <h4 className="font-bold">Montant: {c.montant}</h4>
                    </Link>
                    <p>Echéance: {c.echeancePaiement}</p>
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

export default ContributionList;

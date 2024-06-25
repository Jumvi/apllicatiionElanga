import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addManagingUser } from '../../config/slicer';

const ContributionDetails = () => {
  const [contributions, setContributions] = useState([]);
  const users = useSelector((state) => state.auth.manageUser);
  const projets = useSelector((state) => state.auth.projet); 
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3000/contribution';

  async function fetchContributions() {
    try {
      const response = await axios.get(apiUrl);
      setContributions(response.data.contribution);
      localStorage.setItem('contributions', JSON.stringify(response.data.contribution)); 
      console.log(response.data.contribution);
      console.log('users:',users, 'projects:',projets, 'contrib:',contributions);
    } catch (error) {
      console.log('Erreur lors de la récupération des contributions', error);
    }
  }

  useEffect(() => {
    fetchContributions();
  }, []);

  const handleUserClick = (id) => {
    const user = users.find(user => user.id === id);
    localStorage.setItem('manageUser', JSON.stringify(user));
    dispatch(addManagingUser(user));
    navigation(`/show-details-users/${id}`);

   
  };

  return (
    <div className="mb-6 bg-green-100">
      <h3 className="text-xl font-bold mb-4 flex flex-col items-center uppercase text-green-600">Liste des contribution</h3>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {users.map(user => (
          <li key={user.id} className="border-b border-gray-200 p-4 shadow">
            <div className="mt-4 flex flex-col border border-green bg-green-100">
              {contributions.filter(contribution => contribution.userId === user.id).map(contribution => {
                const projet = projets.find(projet => projet.id === contribution.projectId);
                const contributeur = users.find(u => u.id === contribution.userId);
                return (
                  <div key={contribution.id} className="border-t border-gray-200 mt-2 pt-2">
                    <p><strong>Nom du Contributeur:</strong> {contributeur ? contributeur.nom : 'Contributeur inconnu'}</p>
                    <p><strong>Titre du Projet:</strong> {projet ? projet.titre : 'Projet inconnu'}</p>
                    <p><strong>Montant:</strong> {contribution.montant}</p>
                    <p><strong>Echéance Paiement:</strong> {contribution.echeancePaiement}</p>
                    <p><strong>Condition de Remboursement:</strong> {contribution.conditionRemboursement}</p>
                  </div>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributionDetails;

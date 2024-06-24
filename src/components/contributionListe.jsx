// src/components/UserList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addContribution } from '../../config/slicer';

const ContributionList = () => {
  const [contribution, setContribution] = useState([]);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3000/contribution';

  async function fetchUser(){
        try {
            const response = await axios.get(apiUrl);
            setContribution(response.data.contribution);
            localStorage.setItem('contribution',JSON.stringify(response.data.contributionn));
        } catch (error) {
            console.log('Erreur lors de la récupération des utilisateurs', error);
        }
  }

  useEffect(()=>{
    fetchUser();
  })

  const hundleClick = (id)=>{
        localStorage.setItem('contribution',JSON.stringify(contribution))
        dispatch(addContribution(contribution));
        navigation(`/contribution/${id}`);
  }

  return (
    <div className="mb-6 border boder-green p-5 m-5">
      <h3 className="text-2xl font-bold mb-4 flex flex-col items-center text-green-600  uppercase">Gestion des contributions</h3>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {contribution.map(c => (
          <li key={contribution.id} className="border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <div>
              <p>Titre projet</p>

                <Link onClick={()=>hundleClick(c.id)}>
                    <h4 className="font-bold">montant:{c.montant}</h4>
                </Link>
                <p>Echéance:{c.echeancePaiement}</p>
              </div>
              <button  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Modifier
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributionList;

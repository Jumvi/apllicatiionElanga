import React, { useEffect, useState } from 'react';
import ProfileHeader from '../components/userProfile';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Profil() {
  const user = useSelector((state) => state.auth.user);
  const apiUrl = 'http://localhost:3000/projects';
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiUrl);
      setProjects(response.data);
    }
    fetchData();
  }, []);

  

  return (
      <div className="bg-gray-100 min-h-screen p-10">
        <div className="bg-white shadow rounded-lg p-6">
          <ProfileHeader user={user} />
          <div className="flex flex-col mt-6">
            <div className="flex gap-3">
              <p className="font-bold text-lg">{user.nom}</p>
              <p className="font-bold text-lg">{user.postNom}</p>
            </div>
            <p className="mt-2 text-gray-600">Tel: {user.telephone}</p>
            <p className="mt-2 text-gray-600">Email: {user.email}</p>
          </div>
        </div>
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4"></h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div  className="bg-green-100 p-4 rounded shadow flex justify-between">
                <h3 className="text-lg font-semibold text-green-600"> Role:{user.role}</h3>
              </div>
              <div  className="bg-green-100 p-4 rounded shadow flex justify-between">
                <h3 className="text-lg font-semibold text-green-600">Date de Création du compte :{user.createdAt}</h3>
              </div>
              <div  className="bg-green-100 p-4 rounded shadow flex justify-between">
                <p className="text-gray-700 mt-2 text-green-600 font-bold">Adresse:{user.localisation ? user.localisation:null}</p>
              </div>
          </div>
        </section>
      </div>
  );
}

export default Profil;

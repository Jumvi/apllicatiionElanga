import React, { useEffect, useState } from 'react';
import ProfileHeader from '../components/userProfile';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShowProfilUser = () => {
  const { id } = useParams();
  const projets = useSelector((state) => state.auth.projet);
  const users = useSelector((state) => state.auth.manageUser);
  const [user, setUser] = useState(null);
  const [projet, setProject] = useState(null);



  useEffect(() => {
    if (users && id) {
      const selectedUser = users.filter((u) => u.id === parseInt(id));
      setUser(selectedUser[0]);
      if(projets){
        const selectProject = projets.filter((p)=>p.userId === parseInt(id));
        setProject (selectProject)

      }
    }
  }, [users, id]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3  ">
          <div className="bg-gray-200 p-4 rounded shadow bg-green-100" >
            <h3 className="text-lg font-semibold">Date de création</h3>
            <h3 className="text-lg font-semibold">{user.createdAt}</h3>
            <p className="text-gray-700 mt-2">{user.localisation ? user.localisation : null}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded shadow bg-green-100" >
            <h3 className="text-lg font-semibold">Role</h3>
            <h3 className="text-lg font-semibold">{user.role}</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded shadow bg-green-100" >
            <h3 className="text-lg font-semibold">Adresse physique</h3>
            <p className="text-gray-700 mt-2">{user.localisation ? user.localisation : null}</p>
          </div>  
        </div>
        <h2 className="py-2 px-4 text-white-600 font-bold uppercase m-10 flex flex-col items-center">Liste des projets</h2>
        {
        projet ?
        projet.length > 0 && (
          <table className="min-w-full bg-green-600 border border-white-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-white-300 text-white font-bold uppercase">Titre</th>
                <th className="py-2 px-4 border border-white-300 text-white font-bold uppercase">Budget</th>
                <th className="py-2 px-4 border border-white-300 text-white font-bold uppercase">Localisation</th>
              </tr>
            </thead>
            <tbody>
              {projet.map((projet) => (
                <tr key={projet.id}>
                  <td className="py-2 px-4 border border-white-300 text-white font-bold ">{projet.titre}</td>
                  <td className="py-2 px-4 border border-white-300 text-white font-bold ">{projet.budget}</td>
                  <td className="py-2 px-4 border border-white-300 text-white font-bold ">{projet.localisation ? projet.localisation : null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      : ''}
      </section>
    </div>
  );
};

export default ShowProfilUser;

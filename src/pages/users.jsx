// src/components/UserList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addManagingUser } from '../../config/slicer';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers,setFilterUsers] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3000/users';

  async function fetchUser(){
        try {
            const response = await axios.get(apiUrl);
            setUsers(response.data);
            localStorage.setItem('users',response.data);
        } catch (error) {
            console.log('Erreur lors de la récupération des utilisateurs', error);
        }
  }

  useEffect(()=>{
    fetchUser();
  })

  useEffect(()=>{
    setFilterUsers(
      users.filter((u) =>
        u.nom.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  },[users,searchTerm])

  const hundleClick = (id)=>{
        localStorage.setItem('manageUser',JSON.stringify(users))
        dispatch(addManagingUser(users));
        navigation(`/show-details-users/${id}`);
  }

  return (
    <div className="mb-6 bg-green-100 p-10 shadow">
      <h3 className="text-xl font-bold mb-4 flex flex-col items-center text-green-600 uppercase">Liste des utilisateurs</h3>
      <input
          type="text"
          placeholder="Rechercher un projet"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-green-600 rounded-md mb-2"
        />
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {filterUsers.map(user => (
          <li key={user.id} className="border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <div>
                <Link onClick={()=>hundleClick(user.id)}>
                    <h4 className="font-bold">{user.nom}</h4>
                </Link>
                <p>{user.email}</p>
                <p>{user.role}</p>
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

export default Users;

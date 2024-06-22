// src/components/UserManagement.js
import React, { useState } from 'react';
import EditUser from './editeUser';
import UserList from './userList';
import AddUser from './addUser';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='bg-green-100 p-5'>
      <h2 className="text-2xl font-bold mb-6 text-green-600 uppercase ">Gestion des utilisateurs</h2>
      < UserList/>
      <AddUser />
      {selectedUser && <EditUser user={selectedUser} />}
    </div>
  );
};

export default UserManagement;

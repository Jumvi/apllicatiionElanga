// src/components/UserManagement.js
import React, { useState } from 'react';
import EditUser from './editeUser';
import UserList from './userList';
import AddUser from './addUser';
import Sidebar from './sidebare';
import Users from '../pages/users';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='bg-green-100  p-5 m-5'>
     <div className='flex gap-5'>
      <div>
        <Sidebar/>
      </div>
      <div className='w-[80%]'>
      <h2 className="text-2xl font-bold mb-6 text-green-600 uppercase ">Gestion des utilisateurs</h2>
        <Users/>
        <AddUser />
        {selectedUser && <EditUser user={selectedUser} />}
      </div>
     </div>
    </div>
  );
};

export default UserManagement;

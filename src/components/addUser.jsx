// src/components/AddUser.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
 const navigation = useNavigate() ;
const hundleSubmit = ()=>{
    navigation('/creationCompte')
}
 
  return (
    <div className="mb-6">
        <button onClick={()=>hundleSubmit()} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Ajouter
        </button>
    </div>
  );
};

export default AddUser;

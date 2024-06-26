import React from 'react';

//ces deux fonctions ci dessous reçoivent un composant en paramettre, après avoir verifié si l'utilisateur est authentifié ou non, il renvoie soit le composant reçu, soit la navigation vers la page de connexion. il doivent être appeler dans main dans le routerBrowserProvider
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/connexion" />;
};

const AdminRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('token',token, 'user:',user);
  const isAdmin = user && user.role === 'admin';
  return token && isAdmin ? element : <Navigate to="/connexion" />;
};

export { ProtectedRoute, AdminRoute };

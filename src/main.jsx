import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../config/store.js';
import Home from './pages/home.jsx';
import Connexion from './pages/connexion.jsx';
import CreationProjet from './pages/creationProjet.jsx';
import Contribuer from './pages/contribuer.jsx';
import Contact from './pages/contact.jsx';
import CreationCompte from './pages/creationCompte.jsx';
import OtpVerificationPage from './pages/verificationOtp.jsx';
import ForgotPassword from './pages/forgotPassword.jsx';
import ResetPassword from './pages/resetPassword.jsx';
import Profil from './pages/profil.jsx';
import Projects from './pages/projects.jsx';
import Agricole from './pages/agricole.jsx';
import Agroalimentaire from './pages/agroalimentaire.jsx';
import ProjectDetails from './pages/projectDetails.jsx';
import Dashboard from './pages/dashboard.jsx';
import ShowProfilUser from './pages/showProfilUser.jsx';
import Users from './pages/users.jsx';
import UserManagement from './components/userManagement.jsx';
import ProjectManagement from './components/projectManagement.jsx';
import Statistics from './components/statistic.jsx';
import ContributionDetails from './pages/contributionDetails.jsx';
import { AdminRoute, ProtectedRoute } from './pages/protectedRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profil',
    element: <ProtectedRoute element={<Profil />} />  //on utilise le composant de vérification pour donner accès
  },
  {
    path: '/connexion',
    element: <Connexion />
  },
  {
    path: '/creationCompte',
    element: <CreationCompte />
  },
  {
    path: '/creationProjets',
    element: <ProtectedRoute element={<CreationProjet />} />
  },
  {
    path: '/contribuer',
    element: <ProtectedRoute element={<Contribuer />} />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/otp',
    element: <OtpVerificationPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/agricole',
    element: <Agricole />
  },
  {
    path: '/agroalimentaire',
    element: <Agroalimentaire />
  },
  {
    path: 'details-project/:id',
    element: <ProtectedRoute element={<ProjectDetails />} />
  },
  {
    path: '/dashboard',
    element: <AdminRoute element={<Dashboard />} />
  },
  {
    path: 'show-details-users/:id',
    element: <ProtectedRoute element={<ShowProfilUser />} />
  },
  {
    path: '/users',
    element: <AdminRoute element={<UserManagement />} />
  },
  {
    path: '/projets-list',
    element: <AdminRoute element={<ProjectManagement />} />
  },
  {
    path: '/statistics',
    element: <AdminRoute element={<Statistics />} />
  },
  {
    path: 'contribution/:id',
    element: <ProtectedRoute element={<ContributionDetails />} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


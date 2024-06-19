import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Connexion from './pages/connexion.jsx';
import CreationProjet from './pages/creationProjet.jsx';
import Contribuer from './pages/contribuer.jsx';
import Contact from './pages/contact.jsx';
import CreationCompte from './pages/creationCompte.jsx';
import OtpVerificationPage from './pages/verificationOtp.jsx';
import { Provider } from 'react-redux';
import { store } from '../config/store.js';
import ForgotPassword from './pages/forgotPassword.jsx';
import ResetPassword from './pages/resetPassword.jsx';
import Profil from './pages/profil.jsx';
import Projects from './pages/projects.jsx';
import Agricole from './pages/agricole.jsx';
import Agroalimentaire from './pages/agroalimentaire.jsx';
import { Path } from 'leaflet';
import ProjectDetails from './pages/projectDetails.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/profil',
    element:<Profil/>
  },
  {
    path:'/connexion',
    element:<Connexion/>
  },
  {
    path:'/creationCompte',
    element:<CreationCompte/>
  },
  {
    path:'creationProjets',
    element:<CreationProjet/>
  },
  {
    path:'/contribuer',
    element:<Contribuer/>
  },{
    
      path:'/contact',
      element:<Contact/>
    
  },{
    path:'/otp',
    element:<OtpVerificationPage/>
  },{
    path:'/forgot-password',
    element:<ForgotPassword/>
  },{
    path:'/reset-password',
    element:<ResetPassword/>
  },{
    path:'/projects',
    element:<Projects/>
  },{
    path:'/agricole',
    element:<Agricole/>
  },{
    path:'/agroalimentaire',
    element:<Agroalimentaire/>
  },{
    path:'details-project',
    children:[
      {
        path:':id',
        element:<ProjectDetails/>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}> 
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)

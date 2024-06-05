import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Connexion from './pages/connexion.jsx';
import CreationProjet from './pages/creationProjet.jsx';
import Contribuer from './pages/contribuer.jsx';
import Contact from './pages/contact.jsx';
import CreationCompte from './pages/creationCompte.jsx';
import OtpVerificationPage from './pages/verificationOtp.jsx';
import { Provider } from 'react-redux';
import { store } from '../config/store.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/projects',
    element:<Projects/>
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
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <Provider store={store}> 
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)

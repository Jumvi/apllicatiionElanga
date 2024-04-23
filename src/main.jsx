import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Connexion from './pages/connexion.jsx';
import CreationCompte from './pages/creationCompte.jsx';
import CreationProjet from './pages/creationProjet.jsx';
import Contribuer from './pages/contribuer.jsx';

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
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>,
)

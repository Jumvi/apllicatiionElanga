import React, { useEffect, useState } from 'react';
import Carroussel from './carroussel';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addprojet } from '../../config/slicer';

function Ourprojects() {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  
  const apiUrl = 'http://localhost:3000/projects';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProjects([...response.data]);
        localStorage.setItem('projet', JSON.stringify(response.data));
        dispatch(addprojet(response.data));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='p-4 md:p-10 lg:p-20'>
      <div className='text-center'>
        <h2 className='text-2xl md:text-3xl font-bold p-4 md:p-10 mb-10'>Découvrez nos différents projets coup de cœur</h2>
      </div>
      <div>
        {projects.length > 0 ? <Carroussel project={projects}/> : <p className='text-center'>Chargement...</p>}
      </div>
    </section>
  );
}

export default Ourprojects;

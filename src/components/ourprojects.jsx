import React, { useEffect, useState } from 'react'
import Carroussel from './carroussel'
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
                localStorage.setItem('projet',JSON.stringify(response.data));
                dispatch(addprojet(response.data));
                
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

  return (
    <section className='p-20'>
        <div>
            <h2 className='text-2xl font-bold  self-center text-center p-10 mb-10'>Quelques projects choisis pour vous par notre équipe</h2>
        </div>
        <div>
            {
              projects? <Carroussel project={projects}/> : <p>Chargement...</p>
            }
        </div>
    </section>
  )
}

export default Ourprojects
import React, { useEffect, useState } from 'react'
import Carroussel from '../components/carroussel';
import axios from 'axios';
import { Link } from 'react-router-dom';



 const Projects = () => {
    const [agricole,setAgricole] = useState([]);
    const [agroalimentaire,setAgroalimentaire] = useState([]);

    const apiUrlAgro = "http://localhost:3000/projects/categorie/agricole";
    const apiurlAli = "http://localhost:3000/projects/categorie/agroalimentaire";

    async function fectData (apiUrl){
        try {
            const response = await axios.get(apiUrl);
        if (apiUrl === apiUrlAgro ) {
            setAgricole(response.data.project);
            localStorage.setItem('agricole',response.data.project);
        }else if (apiUrl === apiurlAli) {
            setAgroalimentaire(response.data.project);
            localStorage.setItem('agroalimentaire',response.data.project);
        }
        } catch (error) {
        console.log('erreur lors de la récupération des projets'); 
        }
    }

    useEffect(()=>{
        fectData(apiUrlAgro);
        fectData(apiurlAli);

    },[]);

  return (
    <div>
        <h2 className='font-bold text-3xl m-2 flex flex-col items-start ml-10 mt-10'>Découvrez différents project passer par notre plateforme et lisez le détails sur chacun d'entre eux</h2>
        <div>
            <h3 className=' text-2xl m-10'>Différentes catégories :</h3>
            <div className='flex flex-col'>
                <div className='flex flex-col m-10'>
                    <h4 className='font-bold text-2xl ml-5 mb-5'>Agricole</h4>
                    <Carroussel project={agricole} />
                    <Link to = '/agricole' className='text-black font-semibold flex m-10  '><button className='bg-lime-400 text-white w-40 h-10 rounded'>Voir plus ...</button></Link>

                </div>
                <div className='flex flex-col m-10'>
                    <h4 className='font-bold text-2xl ml-5 mb-5'>Agro-alimentaire</h4>
                    <Carroussel project={agroalimentaire}/>
                    <Link to = '/agroalimentaire' className='text-black font-semibold flex m-10'><button className='bg-lime-400 text-white w-40 h-10 rounded'>Voir plus ...</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;

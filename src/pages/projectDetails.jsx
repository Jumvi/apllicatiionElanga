import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projet,setProjet]=useState();
    const {id} = useParams();
    const navigation = useNavigate();

    const apiUrl = `http://localhost:3000/projects/${id}`;

    async function fetchData(){
        const response = await axios.get(apiUrl);
        setProjet(response.data);
        localStorage.setItem('projects',response.data)
    }

    const hundleInvestir = ()=>{
        navigation('/contribuer');
    }

    useEffect(()=>{
        fetchData();
    },[id])

    if (!projet) {
        return "Chargement..."
    }


console.log(projet);
  return (
    <div >
        <section>
            <div className='flex flex-col'>
                <h2 className='font-bold flex flex-col items-center text-5xl upperCase m-10 '>{projet.titre}</h2>
                <p className='text-justify m-10'>
                    {projet.description}
                </p>
                <img src={projet.image ? `http://localhost:3000/${projet.image}`:null} alt="image du projet" className='object-cover border border-green w-full h-[30rem] flex flex-col items-center p-10' />
            </div>
            <div>
                <span>Ce projet est évalué à {projet.budget} et la somme perçu jusqu'à présent est de {projet.totalRecu}. </span> 
                <span>lire tous les détails du project dans ce pdf: </span>
                <iframe src={projet.pdfProjet ? `http://localhost:3000/${projet.pdfProjet}`:null} className='w-[90rem] h-[45rem] m-10 p-5'></iframe>
            </div>
        </section>
        <button className='bg-lime-400 text-white w-40 h-10 rounded  ml-10 mb-10' onClick={()=>hundleInvestir()}>Investir</button>
    </div>
  )
}

export default ProjectDetails;
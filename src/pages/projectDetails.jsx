import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projet, setProjet] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = `http://localhost:3000/projects/${id}`;

    async function fetchData() {
        const response = await axios.get(apiUrl);
        setProjet(response.data);
        localStorage.setItem('projects', JSON.stringify(response.data));
    }

    const handleInvestir = () => {
        navigate('/contribuer');
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!projet) {
        return "Chargement...";
    }


    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <section className="max-w-6xl mx-auto flex flex-col">
                <h1 className='text-4xl text-green-700 font-bold mb-5 items-center justify-center flex flex-col'>{projet.titre}</h1>
            <div 
        className="flex flex-col items-center h-[35rem] p-4 bg-white shadow rounded"
        style={{ 
          backgroundImage: `url(http://localhost:3000/${projet.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img 
          src={projet.profilImage ? `http://localhost:3000/${projet.image}` : ""} 
          alt="Profile" 
          className="w-24 h-24 rounded-full" 
        />
      </div>
      <section className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">details du project</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
            <div className="bg-gray-200 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{projet.title}</h3>
              <p className="text-gray-700 mt-2">{projet.description}</p>
            </div>
         
        </div>
      </section>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-10">
                    <span className="block mb-4">Ce projet est évalué à <strong>{projet.budget}</strong> et la somme perçue jusqu'à présent est de <strong>{projet.totalRecu}</strong>.</span>
                    <span className="block mb-4">Lire tous les détails du projet dans ce PDF :</span>
                    {projet.pdfProjet && (
                        <iframe 
                            src={`http://localhost:3000/${projet.pdfProjet}`} 
                            className="w-full h-96 rounded-lg border-2 border-green-300"
                            title="Détails du projet"
                        ></iframe>
                    )}
                </div>
            </section>
            <div className="flex justify-center">
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white w-60 h-20 text-2xl rounded-full shadow-lg transition duration-300"
                    onClick={handleInvestir}
                >
                    Investir
                </button>
            </div>
        </div>
    )
}

export default ProjectDetails;

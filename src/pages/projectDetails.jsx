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

    console.log(projet);

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <section className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-5xl font-bold uppercase mb-4 text-green-600">{projet.titre}</h2>
                    <p className="text-lg mb-10">
                        {projet.description}
                    </p>
                    {projet.image && (
                        <img 
                            src={`http://localhost:3000/${projet.image}`} 
                            alt="image du projet" 
                            className="w-full h-96 object-cover rounded-lg shadow-lg mb-10"
                        />
                    )}
                </div>
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
                    className="bg-green-500 hover:bg-green-600 text-white w-40 h-10 rounded-full shadow-lg transition duration-300"
                    onClick={handleInvestir}
                >
                    Investir
                </button>
            </div>
        </div>
    )
}

export default ProjectDetails;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectDetails = () => {
    const [projet, setProjet] = useState(null);
    const [showIframe, setShowIframe] = useState(false);
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

    const toggleIframe = () => {
        setShowIframe(!showIframe);
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!projet) {
        return <div className="flex justify-center items-center h-screen">Chargement...</div>;
    }

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <section className="max-w-6xl mx-auto flex flex-col">
                <h1 className='text-4xl text-green-700 font-bold mb-5 items-center justify-center flex'>{projet.titre}</h1>
                <div
                    className="flex flex-col items-center h-[35rem] p-4 bg-white shadow rounded relative overflow-hidden"
                    style={{
                        backgroundImage: `url(http://localhost:3000/${projet.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <img
                        src={projet.profilImage ? `http://localhost:3000/${projet.profilImage}` : ""}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-white z-10 mt-10"
                    />
                </div>
                <section className="mt-8 bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Détails du projet</h2>
                    <div className="">
                        <div className="bg-green-100 p-4 rounded shadow flex flex-col items-center">
                            <h3 className="text-lg font-semibold">{projet.title}</h3>
                            <p className="text-green-700 mt-2 text-2xl">{projet.description}</p>
                        </div>
                    </div>
                </section>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg my-10">
                    <span className="block mb-4">Ce projet est évalué à <strong>{projet.budget}</strong> et la somme perçue jusqu'à présent est de <strong className='text-green-600'>{projet.totalRecu} $</strong>.</span>
                    <button 
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
                        onClick={toggleIframe}
                    >
                        {showIframe ? 'Masquer le PDF' : 'Lire le PDF du projet'}
                        <span className="ml-2">{showIframe ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </button>
                    {showIframe && projet.pdfProjet && (
                        <div className="mt-4">
                            <iframe
                                src={`http://localhost:3000/${projet.pdfProjet}`}
                                className="w-full h-96 rounded-lg border-2 border-green-300"
                                title="Détails du projet"
                            ></iframe>
                        </div>
                    )}
                </div>
            </section>
            <div className="flex justify-center">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-2xl rounded-full shadow-lg transition duration-300"
                    onClick={handleInvestir}
                >
                    Investir
                </button>
            </div>
        </div>
    );
}

export default ProjectDetails;

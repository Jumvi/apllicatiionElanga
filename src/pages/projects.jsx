import React, { useEffect, useState } from 'react';
import Carroussel from '../components/carroussel';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [agricole, setAgricole] = useState([]);
    const [agroalimentaire, setAgroalimentaire] = useState([]);

    const apiUrlAgro = "http://localhost:3000/projects/categorie/agricole";
    const apiurlAli = "http://localhost:3000/projects/categorie/agroalimentaire";

    async function fetchData(apiUrl) {
        try {
            const response = await axios.get(apiUrl);
            if (apiUrl === apiUrlAgro) {
                setAgricole(response.data.project);
                localStorage.setItem('agricole', JSON.stringify(response.data.project));
            } else if (apiUrl === apiurlAli) {
                setAgroalimentaire(response.data.project);
                localStorage.setItem('agroalimentaire', JSON.stringify(response.data.project));
            }
        } catch (error) {
            console.log('Erreur lors de la récupération des projets');
        }
    }

    useEffect(() => {
        fetchData(apiUrlAgro);
        fetchData(apiurlAli);
    }, []);

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <h2 className="font-bold text-4xl text-center text-green-600 mb-12">
                Découvrez différents projets sur notre plateforme et lisez les détails sur chacun d'entre eux
            </h2>
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl text-center text-green-500 mb-10">
                    Différentes catégories :
                </h3>
                <div className="space-y-16">
                    <div>
                        <h4 className="font-bold text-2xl text-green-600 mb-6">
                            Agricole
                        </h4>
                        <Carroussel project={agricole} />
                        <div className="flex justify-center mt-6">
                            <Link to='/agricole'>
                                <button className="bg-green-500 hover:bg-green-600 text-white w-40 h-12 rounded-full shadow-lg transition duration-300">
                                    Voir plus ...
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-green-600 mb-6">
                            Agro-alimentaire
                        </h4>
                        <Carroussel project={agroalimentaire} />
                        <div className="flex justify-center mt-6">
                            <Link to='/agroalimentaire'>
                                <button className="bg-green-500 hover:bg-green-600 text-white w-40 h-12 rounded-full shadow-lg transition duration-300">
                                    Voir plus ...
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

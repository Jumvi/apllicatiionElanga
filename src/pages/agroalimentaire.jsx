import React, { useEffect, useState } from 'react';
import Carroussel from '../components/carroussel';
import { useSelector } from 'react-redux';

const Agroalimentaire = () => {
    const [agro, setAgro] = useState([]);
    const projet = useSelector((state) => state.auth.projet);
    console.log(projet);

    useEffect(() => {
        const projetAgro = projet.filter((projet) => projet.categorie === "agroalimentaire");
        setAgro(projetAgro);
        localStorage.setItem('agroalimentaire', JSON.stringify(agro));
    }, [projet]);

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <section className="max-w-6xl mx-auto">
                <h2 className="font-bold text-3xl text-center text-green-600 mb-10">
                    Découvrez différents projets agroalimentaires
                </h2>
                <Carroussel project={agro} />
            </section>
        </div>
    )
}

export default Agroalimentaire;

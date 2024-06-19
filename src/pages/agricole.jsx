import React, { useEffect, useState } from 'react';
import Carroussel from '../components/carroussel';
import { useSelector } from 'react-redux';

const Agricole = () => {
    const [agricole, setAgricole] = useState([]);
    const projet = useSelector((state) => state.auth.projet);

    useEffect(() => {
        const projetAgri = projet.filter((projet) => projet.categorie === "agricole");
        setAgricole(projetAgri);
        localStorage.setItem('agricole', JSON.stringify(agricole));
    }, [projet]);

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6">
            <section className="max-w-6xl mx-auto">
                <h2 className="font-bold text-3xl text-center text-green-600 mb-10">
                    Découvrez différents projets agricoles
                </h2>
                <Carroussel project={agricole} />
            </section>
        </div>
    )
}

export default Agricole;

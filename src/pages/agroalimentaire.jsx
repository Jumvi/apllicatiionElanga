import React, { useEffect, useState } from 'react'
import Carroussel from '../components/carroussel';
import { useSelector } from 'react-redux';

const Agroalimentaire = () => {
    const [agro,setAgro] = useState([]);
    const projet = useSelector((state)=>state.auth.projet);
    console.log(projet);

    useEffect(()=>{
        const projetAgro = projet.filter((projet)=>projet.categorie === "agroalimentaire");
        setAgro(projetAgro);
        localStorage.setItem('agricole',agro);

    },[projet]);
        

    
  return (
    <div>
        <h2 className='font-bold text-3xl m-10'>Decouvrez différents projets agricoles</h2>
        <Carroussel project={agro} />
    </div>
  )
}

export default Agroalimentaire;
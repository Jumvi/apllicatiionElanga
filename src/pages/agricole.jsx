import React, { useEffect, useState } from 'react'
import Carroussel from '../components/carroussel';
import { useSelector } from 'react-redux';

const Agricole = () => {
    const [agricole,setAfricole] = useState([]);
    const projet = useSelector((state)=>state.auth.projet);
    console.log(projet);

    useEffect(()=>{
        const projetAgri = projet.filter((projet)=>projet.categorie === "agricole");
        setAfricole(projetAgri);
        localStorage.setItem('agricole',agricole);

    },[projet]);
        

    
  return (
    <div>
        <h2 className='font-bold text-3xl m-10'>Decouvrez différents projets agricoles</h2>
        <Carroussel project={agricole} />
    </div>
  )
}

export default Agricole;
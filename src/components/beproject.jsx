import React from 'react'
import Carroussel from './carroussel'
import { useSelector } from 'react-redux';

export default function Beproject() {
  const project = useSelector((state)=>state.auth.projet);
  
  return (
    <section className='p-20 bg-emerald-100'>
        <div className='flex flex-col mb-10  '>
            <h2 className='text-2xl font-bold  self-center text-center '>Découvrer différents projets retenu pour vous
                <p className=''> grâce au concours de notre </p> 
                <p>Equipe d'étude</p>
            </h2>
        </div>
        <Carroussel project={project}/>
    </section>
  )
}

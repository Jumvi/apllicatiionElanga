import React from 'react';
import imgHero from '../assets/hero.svg';
import { Link } from 'react-router-dom';

export default function Hersection() {
  return (
    <section className='flex justify-content bg-white p-20 '>
        <div className=' w-1/2 flex flex-col gap-5 ml-12 '>
            <span className='text-sm ' >Investissement participatif agricole</span>
            <div className=''>
                <h1 className='font-bold text-2xl'>Ensemble, pour le bien être <br /></h1>
                <span className='text-2xl text-gray-400 '>construisons un avenir plus vert par </span><br />
                <span className='text-2xl text-gray-400 leading-[0.5] '> l’agriculture et  l’agroalimentaire</span>
            </div>
            
            <p className='font-normal text-justify mb-10'>Grace à ELANGA connctez-vous au developpement de la RDC , investir où
                    creer un projet dans le domaine de l’agriculture et l’agroalimentaire et avoir 
                    l’assurence de renconterer des personnes ayant la même passion que vous 
                    et  prêt à faire épanouir cette passion .Investir en toute sécurité, fiabilité et avoir une garantie sur ses avantages. L’agriculture assure la vraie  indépendance  d’une nation
            </p>
            <div className='flex gap-10'>
                <button className='rounded w-40 h-10 text-white bg-lime-400 '>
                    <Link to='/creationProjets' className='font-bold text-white'>Créer un projet</Link>
                </button>
                <button className='rounded w-40 h-10  bg-white outline outline-offset-0 outline-lime-400  '>
                    <Link to='/contribuer' className='font-bold text-lime-400'>Contribuer</Link>
                </button>
            </div>
        </div>
            <div className=' w-1/2 flex justify-center align-center self-center'>
                <img src={imgHero} alt="" className='w-[30rem]' />
            </div>
    </section>
  )
}

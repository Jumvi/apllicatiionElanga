import React from 'react';
import imgHero from '../assets/hero.svg';
import { Link } from 'react-router-dom';

export default function Hersection() {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-white p-10 md:p-20">
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:ml-12">
        <span className="text-sm">Investissement participatif agricole</span>
        <div>
          <h1 className="font-bold text-xl md:text-2xl">Ensemble, pour le bien être</h1>
          <span className="text-xl md:text-2xl text-gray-400">construisons un avenir plus vert par</span><br />
          <span className="text-xl md:text-2xl text-gray-400 leading-[1.5]">l’agriculture et l’agroalimentaire</span>
        </div>
        
        <p className="font-normal text-justify mb-10">
          Grace à ELANGA connectez-vous au développement de la RDC, investir ou créer un projet dans le domaine de l’agriculture et l’agroalimentaire et avoir l’assurance de rencontrer des personnes ayant la même passion que vous et prêtes à faire épanouir cette passion. Investir en toute sécurité, fiabilité et avoir une garantie sur ses avantages. L’agriculture assure la vraie indépendance d’une nation.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <button className="rounded w-full md:w-40 h-10 text-white bg-lime-400">
            <Link to="/creationProjets" className="font-bold text-white">Créer un projet</Link>
          </button>
          <button className="rounded w-full md:w-40 h-10 bg-white outline outline-offset-0 outline-lime-400">
            <Link to="/contribuer" className="font-bold text-lime-400">Contribuer</Link>
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <img src={imgHero} alt="Hero" className="w-[20rem] md:w-[30rem]" />
      </div>
    </section>
  );
}

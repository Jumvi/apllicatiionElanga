import React from 'react'
import equ1 from '../assets/Equipe1.png';
import equ2 from '../assets/Equipe2.svg';
import equ3 from '../assets/Equipe3.svg';

function Equipesection() {
  return (
    <section className='bg-blue-100 p-20 flex flex-col'>
        <div>
            <h2 className='font-bold text-2xl text-center p-10 mb-10 '>
                Une équipe  d’étude et gestion des projets qui 
                  rencontres vos attentes
            </h2>
        </div>
        <div className='grid grid-cols-3 self-center gap-10'>
            <img src={equ1} alt="Equipe1" />
            <img src={equ2} alt="Equipe2" />
            <img src={equ3} alt="Equipe3" />
        </div>
        <div className='p-10'>
            <p className='text-justify'>
            Notre équipe d'Études des Projets est composée d'experts passionnés par l'agriculture et l'agroalimentaire, dédiés à identifier, évaluer et soutenir les projets innovants et durables dans ces secteurs. Notre mission est de garantir que seuls les projets les plus prometteurs et bénéfiques sont présentés sur notre plateforme de financement participatif.
            Experts Agricoles : Des agronomes, des spécialistes de la gestion des cultures et des élevages, ainsi que des agriculteurs expérimentés apportent leur expertise sur les pratiques agricoles et les défis rencontrés sur le terrain.
            Professionnels de l'Agroalimentaire : Des ingénieurs alimentaires, des spécialistes en transformation des produits agricoles et des professionnels de la qualité alimentaire garantissent la viabilité et la qualité des projets liés à l'agroalimentaire.
            Économistes et Financiers : Des analystes financiers évaluent la rentabilité et la viabilité économique des projets, tandis que des économistes étudient leur impact sur les marchés locaux et internationaux.
            Spécialistes de la Durabilité : Des experts en développement durable veillent à ce que les projets soutenus respectent les normes environnementales, sociales et éthiques les plus élevées.
            </p>
            <p className='text-justify'>
            Analyse Technique : Évaluation approfondie des aspects techniques du projet, y compris les méthodes de production, la technologie utilisée et la faisabilité opérationnelle.
            Analyse Financière : Étude détaillée de la viabilité financière du projet, y compris les coûts initiaux, les revenus prévus et la rentabilité à long terme.
            Évaluation de la Durabilité : Examen des pratiques environnementales, sociales et éthiques du projet pour garantir son impact positif et durable.
            Évaluation du Risque : Identification et analyse des risques potentiels associés au projet, avec des stratégies d'atténuation appropriées.
            </p>
           
        </div>
    </section>
  )
}

export default Equipesection;
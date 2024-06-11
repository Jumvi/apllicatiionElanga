import React from 'react';
import logo from '../assets/logoEL.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-black p-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
      <div className='text-center md:text-left'>
        <img src={logo} alt="logo" className='w-24 h-24 mx-auto md:mx-0' />
        <div className='mt-5'>
          <p className='text-white font-normal text-justify'>
            Cultivons l'Avenir Ensemble <br />
            Elanga est une plateforme de crowdfunding dédiée à l'agriculture et à l'agroalimentaire, offrant une opportunité unique aux investisseurs de soutenir des projets innovants et durables dans ces secteurs.
          </p>
          <p className='text-white font-normal text-justify mt-2'>
            Nous sélectionnons rigoureusement les projets pour ne présenter que les plus prometteurs, garantissant ainsi aux contributeurs la qualité et la viabilité de leurs investissements.
          </p>
          <p className='text-white font-normal text-justify mt-2'>
            Elanga favorise des initiatives ayant un impact positif sur les communautés locales et l'environnement, contribuant ainsi à un développement durable et équitable.
          </p>
        </div>
      </div>

      <div className='text-center'>
        <h3 className='text-white font-bold mb-2'>NOTRE ADRESSE</h3>
        <p className='text-white font-normal mb-2'>
          AV DES ANGES, Q:BANNANA, C: LIMETE<br />
          KINSHASA
        </p>
        <h4 className='text-white font-bold'>CONTACT</h4>
        <p className='text-white font-normal'>+243 818 379 907</p>
        <p className='text-white font-normal'>judahmvi@gmail.com</p>
        <div className='flex justify-center mt-5 space-x-4'>
          <FaFacebook className='text-white text-2xl cursor-pointer' />
          <FaTwitter className='text-white text-2xl cursor-pointer' />
          <FaInstagram className='text-white text-2xl cursor-pointer' />
          <FaLinkedin className='text-white text-2xl cursor-pointer' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-white font-bold mb-5'>NOTRE MISSION</h2>
        <ul className='text-white text-justify space-y-2'>
          <li>Sensibiliser à l’investissement agricole et agroalimentaire</li>
          <li>Créer un écosystème agricole dans lequel investisseur, porteur des projets et artisans se rencontrent</li>
          <li>Servir de pont entre le génie agricole et agroalimentaire ainsi que les porteurs des capitaux</li>
          <li>Consolider les discussions entre parties</li>
          <li>Consolider le développement du secteur vert</li>
        </ul>
        <h2 className='text-white font-bold mt-10'>MENU</h2>
        <nav>
          <ul className='text-white space-y-2 text-center'>
            <li><a href="#" className='hover:text-green-500'>Accueil</a></li>
            <li><a href="#" className='hover:text-green-500'>À propos</a></li>
            <li><a href="#" className='hover:text-green-500'>Projets</a></li>
            <li><a href="#" className='hover:text-green-500'>Contact</a></li>
            <li><a href="#" className='hover:text-green-500'>FAQ</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

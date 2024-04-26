import React from 'react';
import logo from '../assets/logoEL.png';

function Footer() {
  return (
    <footer className='bg-black grid grid-cols-3'>
        <div className='grid grid-cols-1'>
            <img src={logo} alt="logo" className='w-64 h-64' />
            <div className='p-5'>
                <p className='text-white font-normale text-justify'>
                    

                     Cultivons l'Avenir Ensemble <br />

                    Elanga est une plateforme de crowdfunding dédiée à l'agriculture et à l'agroalimentaire, offrant une opportunité unique aux investisseurs de soutenir des projets innovants et durables dans ces secteurs.</p>
                <p className='text-white font-noemale text-justify'>
                    Nous sélectionnons rigoureusement les projets pour ne présenter que les plus prometteurs, garantissant ainsi aux contributeurs la qualité et la viabilité de leurs investissements.
                </p>
                <p className='text-white font-normale text-justify'>
                Elanga favorise des initiatives ayant un impact positif sur les communautés locales et l'environnement, contribuant ainsi à un développement durable et équitable.
                </p>
            </div>
            <div className='p-10'>
                <h3 className='text-white font-bold'>Notre adresse </h3>
                <p className='text-white font-normale mb-10'>
                    Av des anges, Q:Bannana, C: Limete
                    KINSHASA
                </p>
                <h4 className='text-white font-bold'> CONTACT</h4>
                <p className='text-white font-normale'>+243 818 379 907</p>
                <p className='text-white font-normale'>judahmvi@gmail.com</p>
            </div>
        </div>
        
            <div className='items-center  w-full mt-40   '>
                <h2 className='text-white  p-10  '>NOTRE MISSION</h2>
                <p className='text-white text-justify '>
                    1. sensibiliser à l’investissement  
                    agricole et  agroalimentaire
                </p>
                <p className='text-white text-justify '>
                    2. Créer un écosystème agricole  
                    dans lequel investisseur, porteur 
                    des projets et artisants se rencontrent
                </p>
                <p className='text-white text-justify '>
                    3. servir d’un pont entre le genie 
                    agricole et agroalimentaire ainsi que 
                    les porteurs des capitaux
                </p>
                <p className='text-white text-justify '>
                    4. Consolider les discussions entre partie
                </p>
                <p className='text-white text-justify '>
                    5. consolider le developpement du secteur 
                    vert
                </p>
            </div>
            <div className='items-center w-full mt-40'>
                <h2 className='text-white  text-center'>
                    MENU
                </h2>
            </div>
        

    </footer>
  )
}

export default Footer;
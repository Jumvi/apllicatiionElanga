import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import { useForm } from 'react-hook-form';
import { register } from 'swiper/element';
import { Link } from 'react-router-dom';

export default function CreationCompte() {
  const    { 
    register , 
    handleSubmit , 
    formState : { errors } , 
  }  =  useForm ( ) ;

  return (
    <div className='flex flex-col'>
      <div>
        <Header/>
      </div>
        <div className='flex gap-10  self-center m-20  '>
          <div className='self-center mt-[-5rem] '>
            <h2 className='text-2xl font-bold text-justify text-lime-400 mb-5 '>
              Devenez utilisateur de notre <br /> plateforme , decouvrez et participez <br /> au developement du secteur agricole <br /> et agroalimentaire
            </h2>
            <span className=' '><Link to='/contact' className='text-xl font-semibold text-black'>CONTACTEZ-NOUS</Link></span>
          </div>
          <form className=' flex flex-col text-2xl mb-20  ' >
           <div className='flex mb-10 '>
           <div>
              <label className='font-normale border-b border-solid border-black border-solid border-black mb-10  '>
                Nom <span className='text-red-400'>*</span> : 
                <input {...register('nom',{required:true})} placeholder='Entrez votre nom' className='text-xl font-normal focus:outline-none  rounded-md p-2' />
              </label>
              -{errors.nom && <p> name is required.</p>}
            </div>
           <div>
            <label className='font-normale border-b border-solid border-black mb-10' >
              PostNom <span className='text-red-400'>*</span> : 
                <input {...register('lastName',{required:true})} placeholder='Entrez votre postNom' className='text-xl font-normal focus:outline-none  rounded-md p-2' />
              </label>
              {errors.lastName && <p> lastName is required.</p>}
           </div>
           </div>
           
           
            <label className='font-normale border-b border-solid border-black mb-10' >
              Mot de passe <span className='text-red-400'>*</span>: 
              <input
                {...register('password', {
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message: 'Le mot de passe doit commencer par une majuscule, contenir au moins un chiffre et avoir une longueur minimale de 8 caractères.'
                 }
               })}
               placeholder='mot de passe'
               className='text-xl font-normal focus:outline-none  rounded-md p-2'
              />
            </label>
            {errors.password && <p> password is required.</p>}
            <label className='font-normale border-b border-solid border-black mb-10 ' >
              Email <span className='text-red-400'>*</span>:
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Adresse e-mail invalide'
                  }
                })}
                placeholder='Email'
                className='text-xl font-normal focus:outline-none  rounded-md p-2'
              />
            </label>
            {errors.email && <p> email is required.</p>}
            <label className='font-normale border-b border-solid border-black mb-10' >
              Téléphone <span className='text-red-400'>*</span> : 
              <input
                {...register('phoneNumber', {
                   required: true,
                    pattern: {
                     value: /^\+243\s?[1-9](?:[\s.-]*\d{2}){4}$/,
                      message: 'Numéro de téléphone invalide'
                    }
                })}
                placeholder='Numéro téléphone'
                className='text-xl font-normal focus:outline-none  rounded-md p-2'
              />
            </label>
           
            {errors.phoneNumber && <p> phoneNumber is required.</p>}
           <label className='font-normale border-b border-solid border-black mb-10 ' htmlFor="">
            Type compte <span className='text-red-400'>*</span> :
           <label className='text-xl font-normal'>
              <input type="checkbox" {...register('entrepreneur')} className='text-xl font-normal' />
              Entrepreneur
            </label>
            <label className='text-xl font-normal '>
              <input type="checkbox" {...register('contributeur')} className='text-xl font-normal'/>
              contributeur
            </label>
           </label>
            <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-40 h-10 rounded  cursor-pointer self-center mt-10'   />
          </form>
        </div>
     
      <div>
        <Footer/>
      </div>
    </div>
  )
}

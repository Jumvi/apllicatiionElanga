import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import { useForm } from 'react-hook-form';
import { register } from 'swiper/element';
import { Link } from 'react-router-dom';
import pik from '../assets/create.jpg'

export default function CreationCompte() {
  const    { 
    register , 
    handleSubmit , 
    formState : { errors } , 
  }  =  useForm ( ) ;

  return (
    <div className='flex flex-col  m-5'>
        <div className='flex gap-10  self-center m-20   '>
          <div className='self-center flex flex-col '>
            <img src= {pik} alt="create_acount"  className='w-[30rem]'/>
            <span className=' '><Link to='/contact' className='text-xl font-semibold text-black m-5 self-center'>CONTACTEZ-NOUS</Link></span>
          </div>
          <form className=' flex flex-col text-2xl w-[40rem] m-10 shadow-2xl  p-6' >
              <label className='self-center p-2 mb-2 text-xl font-semibold' >Inscription !</label>
              <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
                Nom <span className='text-red-400'>*</span> : 
                <input {...register('nom',{required:true})} placeholder='Entrez votre nom' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                {errors.nom && <p> name is required.</p>}
              </label>
              
              <label className='font-normale border mb-5 p-3 rounded bg-white self-center w-[25rem] mt-10' >
                  PostNom <span className='text-red-400'>*</span> : 
                  <input {...register('lastName',{required:true})} placeholder='Entrez votre postNom' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.lastName && <p> lastName is required.</p>}
              </label>
              <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10' >
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
                className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2'
              />
                {errors.password && <p> password is required.</p>}
              </label>
            
              <label className='font-normale border mb-3 p-3 rounded bg-white self-center w-[25rem] mt-10' >
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
                  className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2'
                />
                {errors.email && <p> email is required.</p>}
              </label>
              <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10' >
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
                  className='text-sm font-normal focus:outline-none  rounded-md p-2'
                />
                {errors.phoneNumber && <p> phoneNumber is required.</p>}
              </label>
              <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10' >
                Type <span className='text-red-400'>*</span> :
              <label className='text-sm p-2 font-normal'>
                <input type="checkbox" {...register('entrepreneur')} className='text-xl p-2 font-normal' />
                Entrepreneur
              </label>
              <label className='text-sm p-2 font-normal '>
                <input type="checkbox" {...register('contributeur')} className='text-xl font-normal'/>
                contributeur
              </label>
           </label>
            <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-96 h-10 rounded mb-2  cursor-pointer self-center mt-10'   />
          </form>
        </div>
    </div>
  )
}

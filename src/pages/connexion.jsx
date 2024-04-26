import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import photoUser from '../assets/conneximg.jpg'
import logo from '../assets/logoEL.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Connexion() {
  const    { 
    register , 
    handleSubmit , 
    formState : { errors } , 
  }  =  useForm ( ) ;
  return (
    <div className='p-20'>
      <div className='  flex justify-between mb-10 '>
        <div className=' border-solid w-1/2 flex flex-col '>
          <div className='w-[40rem] self-center flex flex-col'>
            <img src={photoUser} alt="" className=' self-center ' />
          </div>
        </div>
        <div className='w-1/2 flex flex-col'>
        <div className=' flex flex-col  bg-white   shadow-2xl p-10  w-[40rem] h-[40rem]'>
        <div className='font-bold text-2xl flex flex-col self-center mt-10 '>
          <img src={logo} alt="logo " className='w-[15rem] ' />
          <h2 className='font-semibold text-2xl self-center'>S'inscrire</h2>
        </div>
        <form action="" className='flex flex-col'>
          <label className='font-normale border mb-10 p-3 rounded bg-white self-center w-[25rem] mt-10' >
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Adresse e-mail invalide'
                  }
                })}
                placeholder='Enter your mail'
                className=' font-normal focus:outline-none  rounded-md text-2xl '
              />
              {errors.email && <p> email is required.</p>}
            </label>
            <label className='font-normale border   mb-10 p-3 rounded bg-white self-center w-[25rem] ' >
              <input
                {...register('password', {
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message: 'Le mot de passe doit commencer par une majuscule, contenir au moins un chiffre et avoir une longueur minimale de 8 caractères.'
                }
              })}
              placeholder='Enter your password'
              className='font-normal focus:outline-none  rounded-md text-2xl'
            />
            {errors.password && <p> password is required.</p>}
          </label>
          <div className='flex  gap-16 self-center'>
            <label className='text-xl font-normal'>
              <input type="checkbox" {...register('entrepreneur')} className='text-xl font-normal ' /> 
              Remember me
             
            </label>
            <Link to='/' className='underline '>Forgot password?</Link>
          </div>
          <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-[25rem] h-10 rounded  cursor-pointer self-center mt-10'   />
          <div className='flex   self-center m-5'>
           <p>Pas encore inscris ?</p> <Link to='/creationcompte' className='underline '>S'inscrire?</Link>
          </div>
        </form>
      </div>
        </div>
        
      </div>
    </div>
  )
}

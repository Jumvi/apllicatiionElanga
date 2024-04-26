import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import photoUser from '../assets/conneximg.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Connexion() {
  const    { 
    register , 
    handleSubmit , 
    formState : { errors } , 
  }  =  useForm ( ) ;
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
      
      </div>
      <div className='  flex justify-between mb-10'>
        <div className=' border-solid w-1/2 flex flex-col '>
          <img src={photoUser} alt="" className=' self-center w-[40rem]' />
        </div>
        <div className='border-l border-black  w-1/2 flex flex-col bg-slate-100'>
          <h2 className='font-bold text-2xl self-center mt-10 '>LOGIN</h2>
          <form action="" className='flex flex-col'>
            <label className='font-normale border border-solid border-black mb-10 p-3 rounded bg-white self-center w-[35rem] mt-10' >
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
              <label className='font-normale border border-solid border-black mb-10 p-3 rounded bg-white self-center w-[35rem] ' >
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
            <div className='flex  gap-20 self-center'>
              <label className='text-xl font-normal'>
                <input type="checkbox" {...register('entrepreneur')} className='text-xl font-normal' />
                Remember me
              </label>
              <Link to='/' className='underline'>Forgot password?</Link>
            </div>
            <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-96 h-10 rounded  cursor-pointer self-center mt-10'   />
            <div className='flex   self-center'>
             <p>Pas encore inscris ?</p> <Link to='/creationcompte' className='underline'>S'inscrire?</Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

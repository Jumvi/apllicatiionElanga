import React, { useState, useEffect } from 'react';
import photoUser from '../assets/conneximg.jpg';
import logo from '../assets/logoEL.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserMail, saveUser } from '../../config/slicer';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Connexion() {
  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors }, 
    reset 
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail) setValue('email', savedEmail);
    if (savedPassword) setValue('password', savedPassword);
  }, [setValue]);

  const api = 'http://localhost:3000/login';

  const submit = async(data) => {
    setEmail(data.email);
    setPassword(data.password);
    try {
      const response = await axios.post(api, { email, password });
      const { success, user } = response.data;
      dispatch(saveUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      if (success === true) {
        reset();
        dispatch(setUserMail(email));
        if (data.rememberMe) {
          localStorage.setItem('email', data.email);
          localStorage.setItem('password', data.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        navigate('/otp'); 
      } else {
        console.error('erreur');
      }
    } catch (error) {
      console.log('erreur lors de la connexion de l\'utilisateur', error);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='p-10'>
      <div className='flex justify-between'>
        <div className='border-solid w-1/2 flex flex-col'>
          <div className='w-[40rem] self-center flex flex-col'>
            <img src={photoUser} alt="" className='self-center' />
          </div>
        </div>
        <div className='w-1/2 flex flex-col'>
          <div className='flex flex-col bg-white shadow-2xl p-10 w-[40rem] h-[50rem]'>
            <div className='font-bold text-2xl flex flex-col self-center mt-10'>
              <img src={logo} alt="logo" className='w-[15rem] mb-10' />
              <h2 className='font-semibold text-2xl self-center'>Se connecter</h2>
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
              <label className='font-normal border mb-10 p-3 rounded bg-white self-center w-[25rem] mt-10'>
                <input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Adresse e-mail invalide'
                    }
                  })}
                  placeholder='Enter your mail'
                  autoComplete='off'
                  className='font-normal focus:outline-none rounded-md text-2xl'
                />
                {errors.email && <p className='text-red-500'>Email incorrect, veuillez saisir un email correct.</p>}
              </label>
              <label className='font-normal border mb-10 p-3 rounded bg-white self-center w-[25rem] relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message: 'Le mot de passe doit commencer par une majuscule, contenir au moins un chiffre et avoir une longueur minimale de 8 caractères.'
                    }
                  })}
                  placeholder='Enter your password'
                  className='font-normal focus:outline-none rounded-md text-2xl w-full pr-10'
                  autoComplete='off'
                />
                <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              </label>
              <div className='flex gap-20 self-center mb-10'>
                <label className='text-xl font-normal'>
                  <input type="checkbox" {...register('rememberMe')} className='text-xl font-normal' /> 
                  Remember me
                </label>
                <Link to='/forgot-password' className='underline'>Forgot password?</Link>
              </div>
              <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-[25rem] h-10 rounded mb-10 cursor-pointer self-center mt-10' />
              <div className='flex self-center mb-10 m-5'>
                <p>Pas encore inscrit ?</p> 
                <Link to='/creationcompte' className='underline'>S'inscrire?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

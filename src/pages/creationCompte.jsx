import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pik from '../assets/create.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreationCompte() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const api = 'http://localhost:3000/users';

  const submit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('nom', data.nom);
      formData.append('postNom', data.postNom);
      formData.append('password', data.password);
      formData.append('email', data.email);
      formData.append('telephone', data.telephone);
      formData.append('type', data.type);
      formData.append('profilImage', data.profilImage[0]);

      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { success, token } = response.data;

      if (success !== true) {
        return alert('Erreur ouverture compte');
      }

      localStorage.setItem('token', token);
      navigate('/connexion');
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      alert('Erreur ouverture compte');
    }
  };

  return (
    <div className='flex flex-col m-5'>
      <div className='flex gap-10 self-center m-20'>
        <div className='self-center flex flex-col'>
          <img src={pik} alt="create_acount" className='w-[30rem]' />
          <span className='mt-5'>
            <Link to='/contact' className='text-xl font-semibold text-black'>
              CONTACTEZ-NOUS
            </Link>
          </span>
        </div>
        <form className='flex flex-col text-2xl w-[40rem] m-10 shadow-2xl p-6' onSubmit={handleSubmit(submit)}>
          <label className='self-center p-2 mb-2 text-xl font-semibold'>Inscription !</label>
          <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Nom <span className='text-red-400'>*</span>:
            <input {...register('nom', { required: true })} placeholder='Entrez votre nom' className='text-sm p-2 font-normal focus:outline-none rounded-md' />
            {errors.nom && <p className='text-red-600'>Nom est requis.</p>}
          </label>

          <label className='font-normale border mb-5 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            PostNom <span className='text-red-400'>*</span>:
            <input {...register('postNom', { required: true })} placeholder='Entrez votre postNom' className='text-sm p-2 font-normal focus:outline-none rounded-md' />
            {errors.postNom && <p className='text-red-600'>PostNom est requis.</p>}
          </label>

          <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Mot de passe <span className='text-red-400'>*</span>:
            <input
              type='password'
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: 'Le mot de passe doit commencer par une majuscule, contenir au moins un chiffre et avoir une longueur minimale de 8 caractères.'
                }
              })}
              placeholder='Mot de passe'
              className='text-sm p-2 font-normal focus:outline-none rounded-md'
            />
            {errors.password && <p className='text-red-600'>Mot de passe est requis.</p>}
          </label>

          <label className='font-normale border mb-3 p-3 rounded bg-white self-center w-[25rem] mt-10'>
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
              className='text-sm p-2 font-normal focus:outline-none rounded-md'
            />
            {errors.email && <p className='text-red-600'>Email est requis.</p>}
          </label>

          <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Téléphone <span className='text-red-400'>*</span>:
            <input
              {...register('telephone', {
                required: true,
                pattern: {
                  value: /^\+243\s?[1-9](?:[\s.-]*\d{2}){4}$/,
                  message: 'Numéro de téléphone invalide'
                }
              })}
              type='text'
              placeholder='Numéro téléphone'
              className='text-sm font-normal focus:outline-none rounded-md p-2'
            />
            {errors.telephone && <p className='text-red-600'>Numéro de téléphone est requis.</p>}
          </label>

          <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Type <span className='text-red-400'>*</span>:
            <label className='text-sm p-2 font-normal'>
              <input type='radio' {...register('type')} className='text-xl p-2 font-normal' value='Entrepreneur' />
              Entrepreneur
            </label>
            <label className='text-sm p-2 font-normal'>
              <input type='radio' {...register('type')} className='text-xl font-normal' value='Contributeur' />
              Contributeur
            </label>
          </label>

          <label className='font-normale border mb-2 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Image <span className='text-red-400'>*</span>:
            <input
              type='file'
              {...register('profilImage', { required: true })}
              className='text-sm font-normal focus:outline-none rounded-md p-2'
            />
            {errors.image && <p className='text-red-600'>Image est requise.</p>}
          </label>

          <input type='submit' value='Envoyer' className='bg-lime-400 text-white w-96 h-10 rounded mb-2 cursor-pointer self-center mt-10' />
        </form>
      </div>
    </div>
  );
}

// src/components/EditUser.js

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EditUser = ({ user }) => {
  const { register, handleSubmit, reset, formState: { errors }  } = useForm({
    defaultValues: {
      nom: user.nom,
      postNom:user.postNom,
      email: user.email,
      password:user.password,
      telephone:user.telephone,
      role:user.role,
      profilImage:user.profilImage,
      localisation:user.localisation

    },
  });

  const apiUrl = `http://localhost:3000/users/${data.email}`;

  const onSubmit = async(data) => {
    const formData = new FormData();

    formData.append('nom',data.nom);
    formData.append('postNom',data.postNom);
    formData.append('email',data.email);
    formData.append('password',data.password);
    formData.append('telephone',data.telephone);
    formData.append('type', data.type);
    formData.append('profilImage', data.image[0]);
    formData.append('localisation', data.adress);

    try {
        const response = await axios.put(apiUrl, formData);
        const {success} = response.data.success;

        if (!(success === true)) {
            console.log('Echec de mise à jour');
        }
        console.log('mise à jour réussit');
    } catch (error) {
        console.log('Erreur lors de la mise à jour des utilisateurs');
    }

    reset;
    
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4">Modifier l'utilisateur</h3>
      <form className='flex flex-col text-2xl w-[40rem] m-10 shadow-2xl p-6' onSubmit={handleSubmit(onSubmit)}>
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
          <label className='font-normale border mb-5 p-3 rounded bg-white self-center w-[25rem] mt-10'>
            Adresse <span className='text-red-400'>*</span>:
            <input {...register('adress', { required: false })} placeholder='Entrez votre postNom' className='text-sm p-2 font-normal focus:outline-none rounded-md' />
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

          <input type='submit' value='Modifier' className='bg-lime-400 text-white w-96 h-10 rounded mb-2 cursor-pointer self-center mt-10' />
        </form>
    </div>
  );
};

export default EditUser;

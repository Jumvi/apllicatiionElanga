import React, { useState } from 'react';
import pik from '../assets/projet.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreationProjet() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  
  const api = 'http://localhost:3000/projects';

 
  const submit = async(data) => {
    const formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('categorie', data.categorie);
    formData.append('duree', data.duree);
    formData.append('image', data.image[0]);
    formData.append('recompense', data.recompense);
    formData.append('risque', data.risque[0]);
    formData.append('description', data.description);
    formData.append('pdfProjet', data.pdfProjet[0]);
    formData.append('localisation', data.localisation);
    formData.append('budget', data.budget);
    formData.append('id',user.id);
    

    try {
      const response = await axios.post(api, formData);
      const { success, projet } = response.data;

      if (success !== true) {
        alert('Erreur lors de la création du projet');
      }

      localStorage.setItem('projet', projet);
      reset()
      navigate('/')
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='flex flex-col p-10'>
      <div className='flex self-center items-center'>
        <div className='w-1/2'>
          <img src={pik} alt="projet" className='w-[50rem]' />
        </div>
        <div className='w-1/2 p-4'>
          <form className='flex flex-col shadow-lg p-5' onSubmit={handleSubmit(submit)}>
            <label className='font-normal mb-5 text-xl p-2 border rounded w-[33rem] self-center bg-white'>
              Titre <span className='text-red-400'>*</span>:
              <input {...register('titre', { required: true })} placeholder='Entrez le titre' className='text-sm p-2 font-normal focus:outline-none rounded-md' autoComplete='off' />
              {errors.titre && <p>Le titre est requis.</p>}
            </label>
            <label className='font-normal mb-5 text-xl p-2 border rounded w-[33rem] self-center bg-white'>
              Budget <span className='text-red-400'>*</span>:
              <input  {...register('budget', { required: true })} placeholder=' budget du projet en dollars' className='text-sm p-2 font-normal focus:outline-none rounded-md' autoComplete='off' />
              {errors.titre && <p>Le Budget est requis.</p>}
            </label>
            <label className='font-normal mb-5 text-xl w-[33rem] self-center'>
              Catégorie:
              <label className='text-sm p-2 font-normal'>
                <input type="radio" {...register('categorie')} value="agricole" autoComplete='off'/>
                Agricole
              </label>
              <label className='text-sm p-2 font-normal'>
                <input type="radio" {...register('categorie')} value="agroalimentaire" autoComplete='off'/>
                Agroalimentaire
              </label>
            </label>
            <label className='font-normal mb-5 border text-xl p-2 rounded w-[33rem] self-center bg-white'>
              Durée  <span className='text-red-400'>*</span>:
              <input {...register('duree', { required: true })} placeholder='durée totale des traveaux de la mise en place' className='text-sm p-2 font-normal focus:outline-none rounded-md' autoComplete='off' />
              {errors.duree && <p>La durée est requise.</p>}
            </label>
            <label className='font-normal mb-5 text-xl p-2 border rounded w-[33rem] self-center bg-white'>
              Localisation <span className='text-red-400'>*</span>:
              <input
                {...register('localisation',{required:true})}
                placeholder='Entrez la localisation'
                className='text-sm p-2 font-normal focus:outline-none rounded-md'
              autoComplete='off'/>
            </label>
            <label className='font-normal mb-5 text-xl w-[33rem] self-center'>
              Image projet <span className='text-red-400'>*</span>:
              <input type='file' {...register('image', { required: true })} className='text-sm p-2 font-normal focus:outline-none rounded-md' />
              {errors.image && <p>L'image est requise.</p>}
            </label>
            <label className='font-normal mb-5 text-xl p-2 border rounded w-[33rem] self-center bg-white'>
              Récompense contributeur <span className='text-red-400'>*</span>:
              <input {...register('recompense', { required: true })} placeholder='Entrez la description de la récompense' className='text-sm p-2 font-normal focus:outline-none rounded-md' />
              {errors.recompense && <p>La récompense est requise.</p>}
            </label>
            <label className='font-normal mb-5 text-xl w-[33rem] self-center'>
              Risque et défis du projet <span className='text-red-400'>*</span>:
              <input type='file' {...register('risque', { required: true })} className='text-sm p-2 font-normal focus:outline-none rounded-md' />
              {errors.risque && <p>Le fichier des risques est requis.</p>}
            </label>
            <label className='font-normal mb-5 text-xl p-2 w-[33rem] self-center'>
              Description:
              <textarea {...register('description')} placeholder='Entrez la description du projet' className='text-sm p-2 font-normal focus:outline-none rounded-md' />
            </label>
            <label className='font-normal mb-5 text-xl p-2 w-[33rem] self-center'>
              Projet en PDF <span className='text-red-400'>*</span>:
              <input type='file' {...register('pdfProjet', { required: true })} className='text-sm p-2 font-normal focus:outline-none rounded-md' />
              {errors.pdfProjet && <p>Le fichier PDF du projet est requis.</p>}
            </label>
            <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-[33rem] h-10 mb-5 rounded cursor-pointer self-center mt-10' />
          </form>
        </div>
      </div>
    </div>
  )
}

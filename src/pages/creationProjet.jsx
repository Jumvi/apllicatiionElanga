import React , {useState}from 'react';
import pik from '../assets/projet.jpg';
import { useForm } from 'react-hook-form';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { GoogleMap,LoadScript } from '@react-google-maps/api';

export default function CreationProjet() {
  const [address, setAddress] = useState('');

   const handleChange = address => {
    setAddress(address);
  };
 
  const    { 
    register , 
    handleSubmit , 
    formState : { errors } , 
  }  = useForm();

  return (
    <div className='flex flex-col p-10'>
      <div className='flex self-center items-center'>
        <div className='w-1/2'>
          <img src={pik} alt="projet" className='w-[50rem]' />
        </div>
        <div className='w-1/2 p-4'>
          <form className='flex flex-col shadow-lg p-5 ' >
              <label className='font-normale mb-5 text-xl p-2 border rounded  w-[33rem] self-center bg-white '>
                  Titre <span className='text-red-400'>*</span> : 
                  <input {...register('titre',{required:true})} placeholder='Entrez votre nom' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.titre && <p> name is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl w-[33rem]    self-center '>
                  Catégorie :
                  <label className='text-sm p-2 font-normal '>
                    <input type="checkbox" {...register('agricole')} className='text-xl font-normal'/>
                    Agricole
                  </label>
                  <label className='text-sm p-2 font-normal '>
                    <input type="checkbox" {...register('agroalimentaire')} className='text-xl font-normal'/>
                    Agroalimentaire
                  </label>
               </label>
              <label className='font-normale mb-5 border text-xl p-2  rounded w-[33rem] self-center bg-white '>
                  Durée recolte <span className='text-red-400'>*</span> : 
                  <input {...register('duree',{required:true})} placeholder='Entrez votre nom' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.duree && <p> name is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2 border  rounded w-[33rem] self-center bg-white '>
                 localisation <span className='text-red-400'>*</span> : 
                 <LoadScript
                 >
                 </LoadScript>  
              </label>
              <label className='font-normale mb-5 text-xl w-[33rem]  self-center  '>
                  Image projet <span className='text-red-400'>*</span> : 
                  <input type='file' {...register('imageProjet',{required:true})} placeholder='choisir une image' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.imageProjet && <p> image is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2 border  rounded w-[33rem] self-center bg-white '>
                 Recompense contributeur <span className='text-red-400'>*</span> : 
                  <input {...register('recompense',{required:true})} placeholder='Entrez la déscription de la récompense' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.recompense && <p> recompense is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2 w-[33rem]  self-center  '>
                Risque et defis du projet <span className='text-red-400'>*</span> : 
                  <input type='file' {...register('risque',{required:true})} placeholder='Entrez les risques et defis' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.risque && <p> risque is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2  w-[33rem] self-center  '>
                Auteur du projet <span className='text-red-400'>*</span> : 
                  <input type='file' {...register('auteur',{required:true})} placeholder='Entrez fichier auteur' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.auteur && <p> auteur is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2  w-[33rem] self-center '>
                Projet en pdf <span className='text-red-400'>*</span> : 
                  <input type='file' {...register('projet',{required:true})} placeholder='Entrez fichier projet' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.projet && <p> projet is required.</p>}
              </label>
              <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-[33rem] h-10 mb-5 rounded  cursor-pointer self-center mt-10'   />
              
          </form>
        </div>
      </div>
    </div>
  )
}

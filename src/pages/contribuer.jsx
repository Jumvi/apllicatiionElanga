import React from 'react';
import pik from '../assets/investisseuragri.jpg';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Contribuer() {

  const apiUrl = 'http://localhost:3000/contribution';
  const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    control 
  } = useForm();

  const formData = new FormData();

  const onSubmit = async (data) => {
    try {
      formData.append('titre', data.titre);
      formData.append('montant', data.montant);
      formData.append('echeancePaiement', data.paiement);
      formData.append('conditionRemboursement', data.conditions);
      formData.append('releverBancaire', data.relever[0]); 
      formData.append('userId', user.id);
      
      // Append selected types of investment
      if (data.typesInvestissement.don) {
        formData.append('typeInvestissement', 'don');
      }
      if (data.typesInvestissement.investissement) {
        formData.append('typeInvestissement', 'investissement');
      }

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { success } = response.data;

      if (success !== true) {
        return alert('Erreur lors de la contribution');
      }
      navigation('/transaction');
    } catch (error) {
      console.error('Erreur lors de la contribution:', error);
      alert('Erreur lors de la contribution');
    }
  };

  return (
    <div className='flex flex-col p-10'>
      <div className='flex self-center items-center'>
        <div className='w-1/2'>
          <img src={pik} alt="projet" className='w-[50rem]' />
        </div>
        <div className='w-1/2  p-4'>
          <form className='flex flex-col shadow-lg p-5 ' onSubmit={handleSubmit(onSubmit)} >
              <label className='font-normale mb-5 text-xl p-2   w-[33rem] self-center border rounded '>
                  Titre projet <span className='text-red-400'>*</span> : 
                  <input {...register('titre', { required: true })} placeholder='Entrez votre nom' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.titre && <p> name is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2  rounded w-[33rem] self-center border rounded'>
                  Montant <span className='text-red-400'>*</span> : 
                  <input {...register('montant', { required: true })} placeholder='Entrez votre Montant' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.montant && <p> montant is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2  rounded w-[33rem] self-center border rounded '>
                Echéance paiement <span className='text-red-400'>*</span> : 
                  <input {...register('paiement', { required: true })} placeholder='Entrez échéance de paiement' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.paiement && <p> paiement is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2 w-[33rem]  self-center border rounded '>
                Condition de remboursement <span className='text-red-400'>*</span> : 
                  <input  {...register('conditions', { required: true })} placeholder='Entrez les conditions de remboursement' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.conditions && <p> conditions is required.</p>}
              </label>
              <label className='font-normale mb-5 text-xl p-2  w-[33rem] self-center  '>
                Relever bancaire <span className='text-red-400'>*</span> : 
                  <input type='file' {...register('relever', { required: true })} placeholder='Entrez relever' className='text-sm p-2 font-normal focus:outline-none  rounded-md p-2' />
                  {errors.relever && <p> relever is required.</p>}
              </label>
             
              <label className='font-normale mb-5 text-xl w-[33rem]   self-center '>
                Types investissement :
                <Controller
                  name="typesInvestissement"
                  control={control}
                  defaultValue={{ don: false, investisemment: false }}
                  render={({ field }) => (
                    <div>
                      <label className='text-sm p-2 font-normal '>
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value.don}
                          onChange={(e) => field.onChange({ ...field.value, don: e.target.checked })}
                          className='text-xl font-normal'
                        />
                        Don
                      </label>
                      <label className='text-sm p-2 font-normal '>
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value.investissement}
                          onChange={(e) => field.onChange({ ...field.value, investissement: e.target.checked })}
                          className='text-xl font-normal'
                        />
                        Contribution
                      </label>
                    </div>
                  )}
                />
              </label>
              <input type="submit" placeholder='Envoyer' className='bg-lime-400 text-white w-[33rem] h-10 rounded  cursor-pointer self-center mt-10' />
          </form>
        </div>
      </div>
    </div>
  );
}

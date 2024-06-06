// ForgotPassword.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setToken } from '../../config/slicer';
import { useDispatch} from 'react-redux';

 function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login/forgot-password', { email: data.email });
      console.log(response.data.message);
      const token =response.data.token;
      dispatch(setToken(token));
      localStorage.setItem('token',response.data.token);
    } catch (error) {
      console.error('Erreur lors de la demande de réinitialisation du mot de passe', error);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow'>
        <h2 className='text-2xl font-bold text-center'>Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium'>Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className='px-4 py-2 border rounded-md'
              placeholder='Enter your email'
            />
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>
          <button type="submit" className='w-full px-4 py-2 text-white bg-blue-500 rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
// ResetPassword.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch} from 'react-redux';
import { clearToken } from '../../config/slicer';

 function ResetPassword() {
  const  token  = useSelector((state)=>state.auth.token);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:3000/login/reset-password`, { password: data.password, token:token});
      console.log(response.data.message);
      dispatch(clearToken());
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe', error);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow'>
        <h2 className='text-2xl font-bold text-center'>Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium'>New Password</label>
            <input
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: 'Le mot de passe doit commencer par une majuscule, contenir au moins un chiffre et avoir une longueur minimale de 8 caractères.'
              }
            })}
              type="password"
              className='px-4 py-2 border rounded-md'
              placeholder='Enter your new password'
            />
            {errors.password && <span className='text-red-500'>Password is required</span>}
          </div>
          <button type="submit" className='w-full px-4 py-2 text-white bg-blue-500 rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
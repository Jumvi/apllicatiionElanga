import React, { useState } from 'react';
import { useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { checkConnect } from '../../config/slicer';


const OtpVerificationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');
  const [apiToken,setApiToken] = useState("");
  const Navigate = useNavigate();
  const email =useSelector((state)=>state.auth.email);
  const dispatch = useDispatch();  

  const api = 'http://localhost:3000/login/verify-acount';

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(api, { otp: data.otp ,email:email}); 
      const { success, token } = response.data;
      setApiToken(token);

      if (success) {
          setMessage(message);
          localStorage.setItem('token',apiToken);
          dispatch(checkConnect());
          localStorage.setItem('isConnect',true) ;      
          Navigate('/');
      } else {
          // si cela ne reussit pas 
        setMessage('Code OTP invalide. Veuillez réessayer.');
      }
    } catch (error) {
      setMessage('Une erreur est survenue lors de la vérification du code OTP.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-green-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Vérification du Code OTP</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-green-600">Saisir le code opt réçu par mail:</label>
          <input type="text" id="otp" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" {...register("otp", { required: true })} />
          {errors.otp && <span className="text-red-500">Ce champ est requis.</span>}
        </div>
        <button type="submit" className="bg-green-600 text-white p-4  hover:bg-blue-600">Vérifier OTP</button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default OtpVerificationPage;

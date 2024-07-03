import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Paiement = () => {
    const [amount,setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [methodePayement, setMethodePayement] = useState('');
    const {register,handleSubmit,setValue,formState:{errors},reset} = useForm();

    const apiUrl = 'http://localhost:3000/transaction/initiate-payement';

    const onSubmit = async(data)=>{
    const formData = new FormData();

    formData.append('amount',data.amount);
    formData.append('description',data.description);
    formData.append('phoneNumber',data.phoneNumber);
    formData.append('paymentMethod',data.paymentMethod);
      try {
            
        const response = await axios.post(apiUrl,formData);
        if (response.data.status == 'succes'){
            alert('payement reussi avec succés')
        }
        } catch (error) {
            console.log("Echec lors du payement", error);
        }

    }
    
  return (
    <div>
        <div>
            <img src="https://docs.cinetpay.com/images/latest_rdc3.webp" alt="Logo CinetPay"/>
        </div>
        <div>
            <h1>Confirmation payement</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="number"
                        placeholder="500"
                        {...register('amount', { required: true })}
                    />
                    {errors.amount && <span>This field is required</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                    />
                    {errors.description && <span>This field is required</span>}
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="0818379907"
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber && <span>This field is required</span>}
                </div>
                <div>
                    <select {...register('paymentMethod', { required: true })}>
                        <option value="">Select Payment Method</option>
                        <option value="orange-money">Orange Money</option>
                        <option value="m-pesa">M-Pesa</option>
                    </select>
                    {errors.paymentMethod && <span>This field is required</span>}
                </div>
                <button type="submit">Pay</button>
            </form>
        </div>
    </div>
  )
}

export default Paiement
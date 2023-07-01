import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { ForgotPasswordApi } from '../../apis/Api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        ForgotPasswordApi({email}).then((res)=>{
            toast.success("Password reset link sent to your email")
        }).catch((err) => {
            console.log(err);
            toast.error("Something went wrong")
        })
    }
  return (
    <div className='container'>
    <h1>Forgot Password</h1> <br/>
    <label>Type your email</label>
    <input type="email" className='form-control w-25 my-3 mr-3' placeholder='Enter a valid email' onChange={(e) => setEmail(e.target.value)}/>
    <button className='btn btn-primary' onClick={handleSubmit}>Send password reset link</button>
    </div>
  )
}

export default ForgotPassword
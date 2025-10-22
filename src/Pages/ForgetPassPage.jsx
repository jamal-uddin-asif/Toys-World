import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const ForgetPassPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {resetPassword} = useContext(AuthContext)
    
    const email = location.state;


    const handleResetPass = (e) =>{
        e.preventDefault();
        console.log('Form theke',e.target.email.value)
        resetPassword(email)
        .then(()=>{
            toast('Check Your Email')
            navigate(`${email}`)
        })
        .catch(err=>{
            console.log(err)
        })

        
    }

    
    console.log(email)
    return (
        <div className='min-h-[calc(100vh-325px)] flex justify-center items-center'>
            <form onSubmit={handleResetPass}>
                <fieldset>
                    <label className='text-gray-300'>Email</label>
                    <input value={email && email} name='email' className='input focus:outline-0 border-0 border-b bg-linear-to-b from-purple-100 to-pink-100' type="email" placeholder='Your Email' />
                    <button className='btn mt-2 bg-linear-to-b  from-purple-100 to-pink-100 text-purple-800'>Reset Password</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgetPassPage;
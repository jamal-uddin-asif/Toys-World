import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { CiMail, CiUser } from "react-icons/ci";

const AccountDetails = () => {
    const {user} = useContext(AuthContext)

    console.log(user)
    return (
        <div className=' bg-white rounded-2xl shadow-xl p-3 md:p-8'>
           <h1 className='md:text-4xl text-2xl mb-2'>Account Details</h1>

           <div className='space-y-4 md:p-5'>
            <div className='flex gap-7 items-center bg-gray-200 md:p-5 p-2 rounded-2xl'>
                <div>
                <CiUser  size={29} />
                </div>
                <div>
                    <p>Full Name</p>
                    <p className='md:not-[]:text-2xl'>{user.displayName}</p>

                </div>
            </div>
            <div className='flex  gap-7 items-center bg-gray-200 md:p-5 p-2 rounded-2xl'>
                <div>
                <CiMail size={29}/>
                </div>
                <div>
                    <p>Email</p>
                    <p className='md:text-2xl'>{user.email}</p>

                </div>
            </div>
            <div className='flex gap-7 items-center bg-gray-200 md:p-5 p-2 rounded-2xl'>
                <div>
                <CiMail size={29}/>
                </div>
                <div>
                    <p>Email</p>
                    <p className='md:text-2xl'>{user.emailVerified === true ? 'Verified': 'Not verified'}</p>

                </div>
            </div>
           </div>
        </div>
    );
};

export default AccountDetails;
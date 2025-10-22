import React from 'react';
import { RotateLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <RotateLoader />
        </div>
    );
};

export default LoadingSpinner;
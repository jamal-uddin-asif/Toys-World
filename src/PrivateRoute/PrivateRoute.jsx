import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Pages/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user) {
        return <Navigate state={location.pathname} to={'/signin'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
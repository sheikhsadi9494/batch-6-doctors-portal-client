import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    // console.log(isAdmin);
    const location = useLocation();

    if(loading || adminLoading){
        return <div className='min-h-screen'>
            
        <div className="w-2/4 md:w-1/4 mx-auto mt-40">
          <progress className="progress progress-primary w-full mx-auto"></progress>
          <p className="text-center font-bold text-xl">Loading...</p>
        </div>
  
        </div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{from: location}} replace/>
};

export default AdminRoute;
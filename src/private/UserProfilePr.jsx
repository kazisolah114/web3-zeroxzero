import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useConnectMetamask from '../states/auth/useConnectMetamask';
import { useUserContext } from '../ContextAPI/UserContext';

const UserProfilePr = ({children}) => {
    const {wallet} = useUserContext();
    const location = useLocation();
    if(wallet) {
        return children;
    }
    return <Navigate to='/app' state={{from: location}} />
}
export default UserProfilePr;
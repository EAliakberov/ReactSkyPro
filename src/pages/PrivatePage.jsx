import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/ContextAPI';

export const PrivatePage = () => {
    const userContext = useContext(UserContext);
    const isAuth = !!userContext.userData;
    
    return isAuth ? <Outlet /> : <Navigate to={'/signin'} />;
};

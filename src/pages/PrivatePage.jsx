import { Navigate, Outlet } from 'react-router-dom';

export const PrivatePage = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate to={'/signin'} />;
};

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = !!sessionStorage.getItem('1st_token');
    return token ? <Outlet /> : <Navigate to="/" />;
};

export const ReturnRouter = () => {
    const token = !!sessionStorage.getItem('1st_token');
    return !token ?  <Outlet /> : <Navigate to="/Dashboard" /> ;
};

export default PrivateRoute;

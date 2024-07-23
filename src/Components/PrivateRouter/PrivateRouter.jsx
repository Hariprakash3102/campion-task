import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('1st_token');
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
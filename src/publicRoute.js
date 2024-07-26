import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ element }) {
    
    const isAuthenticated = !!localStorage.getItem('isAuthenticated') === true

    return !isAuthenticated ? element : <Navigate to="/admin" replace />;
};
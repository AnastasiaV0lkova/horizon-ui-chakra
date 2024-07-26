import React from 'react';
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({ element }) {


  const isAuthenticated = !!JSON.parse(localStorage.getItem('isAuthenticated')) === true;

  return isAuthenticated ? element : <Navigate to="/auth/sign-in" replace />;
};
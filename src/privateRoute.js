import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PrivateRoute({ element }) {


  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? element : <Navigate to="/auth/sign-in" replace />;
};
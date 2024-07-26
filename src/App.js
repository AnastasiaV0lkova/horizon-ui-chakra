import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {} from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import {
  ChakraProvider,
  // extendTheme
} from '@chakra-ui/react';
import initialTheme from './theme/theme'; //  { themeGreen }
import { useState } from 'react';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthentication } from './store/authSlice';
// Chakra imports

export default function Main() {
  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const dispatch = useDispatch();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if(!isAuthenticated){
      localStorage.removeItem('isAuthenticated');
    }
    dispatch(setAuthentication(isAuthenticated));
  }, [dispatch]);

  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route path="auth/*" element={<PublicRoute element={<AuthLayout />} />} />
        <Route
          path="admin/*"
          element={
            <PrivateRoute element={ <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} /> }
           />
          }
        />
        <Route
          path="rtl/*"
          element={
            <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ChakraProvider>
  );
}

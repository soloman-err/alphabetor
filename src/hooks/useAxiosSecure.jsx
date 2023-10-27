import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = (useLocal = true) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  
  const baseURL = `${import.meta.env.VITE_SERVER_URL}` 

  const axiosSecure = axios.create({ baseURL });

  useEffect( () => {
    axiosSecure.interceptors.request.use( ( config ) => {
      const token = localStorage.getItem( 'access_token' );
      if ( token ) {
        config.headers.Authorization = `Bearer ${ token }`;
      }
      return config;
    } );

    axiosSecure.interceptors.response.use( ( response ) => response,
      async ( error ) => {
        if ( error.response && error.response.status === 401 || error.response.status === 403 ) {
          await logOut();
          navigate('/login')
        }
        return Promise.reject(error)
      })
  },[logOut, navigate])

  return [ axiosSecure ];
};

export default useAxiosSecure;
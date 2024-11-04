
import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


// Create the context
export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    
    const logOut=async()=>{
        toast.success('LogOut succefully!!!');
        localStorage.removeItem('token');
        Cookies.remove('token', { path: '/', domain: 'localhost' });
        window.location.href = 'http://localhost:5173/';
    }

    const value = {
        logOut
    };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

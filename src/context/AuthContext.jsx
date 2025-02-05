
import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// Create the context
export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const baseUrl=import.meta.env.VITE_BASE_URL;
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'MENTOR'
  });
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");


  const logOut = async () => {
    toast.success('LogOut succefully!!!');
    localStorage.removeItem('token');
    Cookies.remove('token', { path: '/', domain: 'localhost' });
    window.location.href = 'http://localhost:5173/';
  }

  const handleLoginSignup = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const { name, email, password, confirmPassword, role } = inputData;
    if (isSignUp) {
      // SignUp logic
      if (password === confirmPassword) {
        try {
          setIsLogin(false);
          const response = await axios.post(`${baseUrl}/api/v1/user/signup`, { name, email, password, role });
          setEmail(email);
          console.log(response.data);
          toast.success(response.data.message);
          localStorage.setItem('tempUserId', response.data.user._id);
          navigate('/otp');
        } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong!");
          }
          console.log(error);
        }
      } else {
        toast.error("Confirm Password does not match!");
      }
    } else {
      // Login logic
      try {
        const response = await axios.post(`${baseUrl}/api/v1/user/login`, { email, password }, { withCredentials: true });
        console.log(response.data);
        toast.success("You have successfully logged in!");
        localStorage.setItem('userlogin', true);
        // setUserLogedin(true);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message){
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong!");
        }
        console.log(error.message);
        console.log(error);
      }
    }
    setIsLogin(false);
    setIsLoading(false);
  }


  async function handleOtpSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    if (otp.includes("")) {
      setError("Please fill in all the OTP fields.");
      return;
    }
    setError("");
    const finalOtp = otp.join("");

    console.log("Entered OTP:", finalOtp);
    setOtp(["", "", "", ""]);

    try {
      if (email !== '') {
        const response = await axios.post(`${baseUrl}/api/v1/user/verify-otp`, { email, otp: finalOtp });
        console.log(response.data);
        toast.success(response.data.message);
        navigate('/');
      } else {
        console.log('Email not assigned');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
      console.log(error.message);
    }
    setIsLoading(false);
  }

  async function resendOtp() {
    setIsLoading(true);
    try {
      const email = inputData.email;
      const response = await axios.post(`${baseUrl}/api/v1/resend-otp`, { email: email });
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
      console.log(error.message);
    }
    setIsLoading(false);
  }

  const value = {
    logOut,
    setIsLogin,
    isSignUp,
    isLogin,
    setIsSignUp,
    handleLoginSignup,
    inputData,
    setInputData,
    resendOtp,
    otp,
    handleOtpSubmit,
    error,
    isloading,
    setOtp,
  };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MentorProfileContextProvider from './context/MentorProfileContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'
import AppointmnetContextProvider from './context/AppointmentContext.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MentorProfileContextProvider>
      <AuthContextProvider>
        <AppointmnetContextProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </AppointmnetContextProvider>
      </AuthContextProvider>
    </MentorProfileContextProvider>
  </StrictMode>,
)

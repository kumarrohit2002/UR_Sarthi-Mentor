import { Route, Routes } from "react-router-dom";
import MentorProfile from './pages/MentorProfile'
import EditMentorProfile from "./pages/EditMentorProfile";
import MyAppointment from "./pages/MyAppointment";
import Room from "./pages/Room";
import CreateJob from "./components/CreateJob";
import MentorHomePage from "./pages/MentorHomePage";
import OtpInput from "./components/OtpInput";
import Cookies from 'js-cookie';
import { useContext, useEffect } from "react";
import {MentorProfileContext} from './context/MentorProfileContext';
import { authContext } from "./context/AuthContext";


export default function App() {
  const {getMentorProfileData}=useContext(MentorProfileContext);
  const {setIsLogin}=useContext(authContext);
  const token=Cookies.get('token');
  useEffect(()=>{
    if(token){
      getMentorProfileData();
      setIsLogin(false);
    }
  },[token]);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<MentorHomePage/>}/>
        <Route path="/otp" element={<OtpInput/>}/>
        <Route path="/profile" element={<MentorProfile/>}/>
        <Route path="/myappointment" element={<MyAppointment/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>
        <Route path="/editmentorprofile" element={<EditMentorProfile/>}/>
        <Route path="/create-job-portal" element={<CreateJob/>}/>
      </Routes>
    </div>
  )
}
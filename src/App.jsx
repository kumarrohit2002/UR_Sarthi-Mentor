import { Route, Routes } from "react-router-dom";
import MentorProfile from './pages/MentorProfile'
import EditMentorProfile from "./pages/EditMentorProfile";
import Navbar from "./components/Navbar";
import MyAppointment from "./pages/MyAppointment";
import Room from "./pages/Room";
import CreateJob from "./components/CreateJob";
import MentorHomePage from "./pages/MentorHomePage";
import OtpInput from "./components/OtpInput";

export default function App() {
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
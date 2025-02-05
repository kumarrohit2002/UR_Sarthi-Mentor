import { useContext } from "react";
import FAQSection from "../components/FAQSection";
import MentorCategorySelector from "../components/MentorCategorySelector";
import MentoreeWorkflow from "../components/MentoreeWorkflow";
import MentorLandingPage from "../components/MentorLandingPage";
import MentorshipOptions from "../components/MentorshipOptions";
import MentorshipPlatform from "../components/MentorshipPlatform";
import Navbar from "../components/Navbar";
import TestimonialPage from "../components/TestimonialPage";
import { authContext } from "../context/AuthContext";
import LoginSignup from "../components/LoginSignup";


const MentorHomePage = () => {
  const {isLogin}=useContext(authContext);


  return (
    <div className="bg-[#020617]">
      <MentorLandingPage/>
      {/* <Navbar/> */}

      {
        isLogin &&
        <LoginSignup/>
      }
      <TestimonialPage/>
      <MentoreeWorkflow/>
      {/* <MentorshipOptions/> */}
      <FAQSection/>
      {/* <MentorCategorySelector/> */}
      <MentorshipPlatform/>
    </div>
  )
}

export default MentorHomePage;
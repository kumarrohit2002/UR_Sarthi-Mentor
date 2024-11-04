import FAQSection from "../components/FAQSection";
import MentorCategorySelector from "../components/MentorCategorySelector";
import MentoreeWorkflow from "../components/MentoreeWorkflow";
import MentorLandingPage from "../components/MentorLandingPage";
import MentorshipOptions from "../components/MentorshipOptions";
import MentorshipPlatform from "../components/MentorshipPlatform";
import Navbar from "../components/Navbar";
import TestimonialPage from "../components/TestimonialPage";


const MentorHomePage = () => {
  return (
    <div className="bg-[#020617]">
      <MentorLandingPage/>
      {/* <Navbar/> */}
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
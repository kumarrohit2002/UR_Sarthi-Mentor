
import { createContext, useState } from 'react';
import axios from 'axios';
import profileimg from '../assets/ProfilePic.jpeg'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


// Create the context
export const MentorProfileContext = createContext();

export default function MentorProfileContextProvider({ children }) {
    const BaseUrl = 'http://localhost:4000/api/v1';
    const [profilePic,setProfilePic]=useState(profileimg);

    const getToken = () => Cookies.get('token');

    const [mentorData,setMentorData]=useState({
        name: "John Doe",
        profession: "Senior Software Engineer",
        dob: "yyyy-mm-dd",
        areaOfExpertise: "Full Stack Development",
        yearsOfExperience: 3,
        address: "New York, NY",
        skills: [''],
        about: "Passionate about building scalable web applications and mentoring junior developers.",
        language:['Hindi','English'],
        achievements: [
          "Led a team of 5 developers to successfully deliver a high-traffic e-commerce platform",
        ],
        socialMedia: {
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          github: "https://github.com",
          email: "john.doe@example.com"
        },
        perHourcharge:1,
      });
    const [userReview,setUserReview]=useState([
        {
          id: 1,
          name: "Alice Johnson",
          rating: 5,
          comment: "John is an excellent mentor! His guidance helped me land my first developer job."
        },
        {
          id: 2,
          name: "Bob Smith",
          rating: 4,
          comment: "Very knowledgeable and patient. Great at explaining complex concepts."
        },
        {
          id: 3,
          name: "Emma Davis",
          rating: 5,
          comment: "John's mentorship was invaluable in helping me transition to a senior role. Highly recommended!"
        }
      ]);

    const handleProfilePicChange = async (e) => {
        const file = e.target.files[0];
        const token = getToken();
        if (file) {
          const formData = new FormData();
          formData.append('imageFile', file);
          let response;
          try {
            response = await axios.post(`${BaseUrl}/upload-profile-pic`, formData, { withCredentials: true });
    
            const imageUrl = response.data.profile.profilePic; // Assuming the server returns the URL
            setProfilePic(imageUrl);
            console.log(imageUrl);
            console.log('profile pic uploaded successfully');
            toast.success('Profile picture updated successfully!');
          } catch (error) {
            console.error('Error uploading profile picture:', error);
            const message=error.response.data.message;
            toast.error(message);
          }
        }
    };

    const getMentorProfileData=async()=>{
        try{
            const response=await axios.post(`${BaseUrl}/mentor/getMentorProfile`, {}, { withCredentials: true });
            const profileData=response.data.mentorProfile[0];
            setMentorData({
              name: profileData.name,
              profession: profileData.title, 
              dob: profileData.dob || 'yyyy-mm-dd', 
              areaOfExpertise: profileData.areaOfExpertise,
              yearsOfExperience: profileData.yearsOfExperience,
              address: profileData.address,
              skills: profileData.skills,
              about: profileData.aboutSection,
              language: profileData.language,
              achievements: profileData.achievements,
              socialMedia: {
                linkedin: profileData.socialMediaLinks.linkedin,
                twitter: profileData.socialMediaLinks.twitter,
                github: profileData.socialMediaLinks.github,
                email: profileData.socialMediaLinks.email,
              },
              perHourcharge:profileData.perHourcharge,
            });
            setProfilePic(profileData.profilePic);

        }catch(error){
            console.log(error);
        }
    }

    const getMentorReview=async()=>{
        try{
            const response=await axios.post(`${BaseUrl}/getReview`,{},{ withCredentials: true });
            console.log(response.data);
            
        }catch(error){
            console.log(error.message);
        }
    }

    const updateMentorProfile = async (formData) => {
      console.log(formData);
      const {
          name, profession, dob, areaOfExpertise, yearsOfExperience, address, skills, about, language, 
          socialMedia, achievements, perHourcharge, preferredSchedule, phone, category
      } = formData;
  
      try {
          const response = await axios.post(
              `${BaseUrl}/mentor/create-or-update-profile`,
              {
                  name,
                  dob,
                  title: profession,
                  areaOfExpertise,
                  yearsOfExperience,
                  skills,
                  aboutSection: about,
                  achievements,
                  socialMediaLinks: socialMedia,
                  address,
                  language,
                  perHourcharge,
                  timePreferences:preferredSchedule, 
                  phone,               
                  category             
              },
              { withCredentials: true }
          );
          console.log(response.data);
          toast.success('Profile updated successfully!');
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      }
  };

  const createNewPost=async(postjobData)=>{
    try{
      const reaponse=await axios.post(`${BaseUrl}/mentor/post-new-job`,postjobData,{ withCredentials: true });
      console.log(reaponse.data);
      toast.success('JobPortal created successfully!');

    }catch(error){
      console.log(error);
    }
  }

 
    const value = {
        mentorData,
        userReview,
        handleProfilePicChange,
        profilePic,
        getMentorProfileData,
        getMentorReview,
        updateMentorProfile,
        createNewPost
    };

  return (
    <MentorProfileContext.Provider value={value}>
      {children}
    </MentorProfileContext.Provider>
  );
}

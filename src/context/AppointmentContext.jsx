
import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


// Create the context
export const AppointmentContext = createContext();

export default function AppointmnetContextProvider({ children }) {
    const BaseUrl='http://localhost:4000/api/v1';
    const [myAppiontment,setMyAppiontment] = useState([]);

    const getMyAppiontment =async()=>{
        try{
            const response=await axios.post(`${BaseUrl}/appointment/my-appointment`,{},{ withCredentials: true });
            const appointments=response.data.appointments;
            setMyAppiontment(appointments);

        }catch(error){
            console.log(error);
        }
    }

    function formatDate(date) {
      // Ensure the input is a Date object
      const validDate = new Date(date);
      if (isNaN(validDate)) {
        return 'Invalid Date'; // Handle invalid date input
      }
      const day = String(validDate.getDate()).padStart(2, '0');
      const month = String(validDate.getMonth() + 1).padStart(2, '0');
      const year = validDate.getFullYear();
      
      let hours = validDate.getHours();
      const minutes = String(validDate.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
    
      return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    }

    
    

    const value = {
        getMyAppiontment,
        myAppiontment,
        formatDate
    };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}
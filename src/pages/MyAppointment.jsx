import React, { useContext, useEffect } from 'react'

import {AppointmentContext} from '../context/AppointmentContext';
import MyAppointmentCard from '../components/MyAppointmentCard';
import Navbar from '../components/Navbar';

const MyAppointment = () => {
  const {getMyAppiontment,myAppiontment}=useContext(AppointmentContext);
  useEffect(()=>{
    getMyAppiontment();
  },[])
  return (
    <div className='bg-[#020617] h-[730px]'>
      <Navbar/>
      <h1 className='bg-[#020617] text-3xl font-bold text-white  flex justify-center my-4'>My Appiontments</h1>
      <div className='flex flex-col gap-2 justify-center items-center'>
        {
          myAppiontment.length > 0 &&
          myAppiontment.map((item,idx)=>(
            <MyAppointmentCard item={item} key={idx}/>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment;
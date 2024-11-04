import profilePic from '../assets/ProfilePic.jpeg';
import {Link} from 'react-router-dom'
// import logo from '../assets/assets/svg/'
import Mlogo from '../assets/Mlogo.jpg'


const Navbar = () => {
    return (
        <div className="flex justify-between bg-[#0F172A] border-b border-gray-500 p-4 px-5">
            <div>
                <Link to='/'>
                <img src={Mlogo} className='w-[40px] h-[40px]  rounded-full' alt="Brainwave" />
                </Link>
            </div>
            <div className="flex gap-5">
                <Link  to='/create-job-portal' className="bg-blue-500 p-1 text-center text-white rounded-md">Create Job Portal</Link>
                <Link to='/myappointment' className="bg-blue-500 p-1 text-center text-white rounded-md">My Appointment</Link>
                <Link to='/profile'>
                    <img src={profilePic} className="w-[40px] h-[40px] rounded-full" alt="Profile" />
                </Link>
            </div>
        </div>
      );
}

export default Navbar;
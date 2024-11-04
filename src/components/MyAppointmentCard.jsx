import { useContext } from "react"
import { AppointmentContext } from "../context/AppointmentContext"
import { Link } from "react-router-dom";

const MyAppointmentCard = ({item}) => {
  const {formatDate}=useContext(AppointmentContext);
  let {status,phone,slot,roomNo}=item;
  let {name,profilePic}=item.user;
  
  slot=formatDate(slot);

  return (
    <div className="bg-[#0F172A] border-2 p-2 flex rounded-lg text-white gap-2 w-[450px]">
      <div>
        <img className=" w-[100px] h-[100px] rounded-full mt-4 mr-5"  src={profilePic} alt="" />
      </div>
      <div>
        <p>{`Name:${name}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{`Slot: ${slot}`}</p>
        <Link  to={`/room/${roomNo}`}>
          <p className="bg-blue-400 p-1">Join Session</p>
        </Link>
      </div>
    </div>
  )
}

export default MyAppointmentCard
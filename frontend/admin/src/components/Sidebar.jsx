import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const {aToken}=useContext(AdminContext)
   return (

  <div className='min-h-screen bg-white border-r'>
          {
        aToken && <ul className='text-gray-500 mt-5'>
           <NavLink to={'/admin-dashboard'}  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#9aa1f0] border-r-4 border-blue-600':''}`} 
   >
            <img src={assets.home_icon} alt="" />            
            <p>Dashboard</p> 
           </NavLink>
          <NavLink  to={'/all-bookings'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer' ${isActive?'bg-[#9aa1f0] border-r-4 border-blue-600':''}`} 
   >
            <img src={assets.appointment_icon} alt="" />
            <p>Bookings</p>
          </NavLink>
         <NavLink  to={'/add-venue'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#9aa1f0] border-r-4 border-blue-600':''}`}  >
           <img src={assets.add_icon} alt="" />
            <p>AddVenue</p>
          </NavLink>
          <NavLink   to={'/venue-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#9aa1f0] border-r-4 border-blue-600':''}`} >
            <img src={assets.people_icon} alt="" />
             <p>Venue-list</p>
           </NavLink>
         </ul>

      }
     </div>
  )
}

export default Sidebar

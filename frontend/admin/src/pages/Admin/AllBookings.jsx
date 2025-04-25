import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'

const AllBookings = () => {


  const {aToken, bookings,getAllBookings} = useContext(AdminContext)//,updateProfile
  const {calculateAge,slotDateFormat} = useContext(AppContext)

  useEffect(()=>{
if(aToken){
  getAllBookings()
  // updateProfile()
}
},[aToken])

  return (
    <div className='w-full max-w-6xl m-5  '>

<p className='mb-3 text-lg font-medium'>All Bookings</p>

<div className='bg-white border  rounded text-sm max-h-[80vh] min overflow-y-scroll '>
  <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b  '>
    <p>#</p>
    <p>Venue</p>
    <p>Age</p>
    <p>DATE & TIME</p>
    <p>Doctors</p>
    <p>Fees</p>
    <p>Actions</p>
  </div>
  {bookings.map((item, index) => (
  <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50 ' key={index}>
    <p className='max-sm:hidden '>{index + 1}</p>
    <div className='flex items-center gap-2'>
  {item.userData.image ? (
    <img className='w-8 rounded-full ' src={item.userData.image} alt={item.userData.name} />
  ) : null}
  <p>{item.userData.name}</p>
</div>
<p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
<p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
<div className='flex items-center gap-2'>
  {item.userData.image ? (
    <img className='w-8 rounded-full bg-gray-200 ' src={item.venData.image} alt={item.venData.name} />
  ) : null}
  <p>{item.userData.name}</p>
</div>
<p>{item.bookingPrice}</p>

  
  </div>
))}
</div>


    </div>
  )
}

export default AllBookings
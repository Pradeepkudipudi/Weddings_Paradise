



// // import React from "react";

// // const Mybooking = ()=>{

// //     return(<>
// //      <div>
// //         <h1>venue halls display</h1>
// //      </div>
    
// //     </>
       
// //     )
// // }

// // export default Mybooking


// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../Context/appcontext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const Mybookingpage = () => {
//     const {backendUrl,token}=useContext(AppContext)

//     const [bookings,setBookings] = useState([])
// const getUserBookings = async ()=> {
//     try{
//      const {data} = await axios.get(backendUrl + '/api/user/bookings',  {headers:token})
//    if(data.success){
//     setBookings(data.bookings.reverse())

//     console.log(data.bookings)
//    }
//     }catch (error){
//         console.log(error)
//         toast.error(error)
//     }
// }

// useEffect(()=>{
// if(token){
//     getUserBookings()
// }
// },[token])

//   return (
//     <div>
//       <p className='pb-3 font-medium text-zinc-700 border-b'>My Appointments</p>
//       <div>
//         {
//           bookings.slice().map((item,index)=>(
//             <div>
//               <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
//                 <div>
//                 <img src={item.venData.image} alt="" srcset="" className='w-32 bg-indigo-50'/>
//                 </div>
//               <div className='flex-1 text-sm text-zinc-600'>
//                 <p className='text-neutral-800 font-semibold'>{item.venData.name}</p>
//                 <p>{item.venData.city}</p>
//                 <p className='text-zinc-700 font-medium mt-1 '>Address:</p>
//                 <p className='text-xs' >{item.venData.address.line1}</p>
//                 <p className='text-xs' >{item.venData.address.line2}</p>
//                 <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time </span> {item.slotDate} | {item.slotTime}</p>
//                 </div>
              
//               <div></div>
//               <div className='flex flex-col gap-2 justify-end'>
//                 <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105' >Pay Online</button>
//                 <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105' >Cancel appointment</button>
//               </div>
//               </div>
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   )
// }

// export default Mybookingpage












//u[dated]


import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/appcontext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Mybookingpage = () => {
  const { backendUrl, token, getVenuesData } = useContext(AppContext)
  const [bookings, setBookings] = useState([])
  
  const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const slotDateFormat = (slotDate) =>{
  const dateArray = slotDate.split('_')
  return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
}  



  const getUserBookings = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (data.success) {
        setBookings(data.bookings.reverse())
        console.log(data.bookings)
      } else {
        toast.error("No bookings found.")
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to load bookings")
    }
  }


  const cancelBooking = async (bookingId)=>{

    try{
     const {data} = await axios.post(backendUrl + '/api/user/cancel-booking',{bookingId}, { headers: { Authorization: `Bearer ${token}` } })
     
     
     if(data.success){
      toast.success(data.message)
      getUserBookings()
      getVenuesData()
     }else {
      toast.error(data.message)
      console.log(data)
      
     }
     
     

    }catch(error){
   console.log(error)
   toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserBookings()
    }
  }, [token])

  return (
    <div className="p-4">
      <p className='pb-3 font-medium text-zinc-700 border-b text-lg'>My Appointments</p>
      <div>
        {
          bookings.length > 0 ? (
            bookings.map((item, index) => (
              <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                <div>
                  <img src={item.venData?.image} alt="venue" className='w-32 h-24 object-cover bg-indigo-50 rounded-md' />
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <p className='text-neutral-800 font-semibold'>{item.venData?.name}</p>
                  <p>{item.venData?.city}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                  <p className='text-xs'>{item.venData?.address?.line1}</p>
                  <p className='text-xs'>{item.venData?.address?.line2}</p>
                  <p className='text-xs mt-1'>
                    <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
                  </p>
                </div>
                <div className='flex flex-col gap-2 justify-center sm:justify-end'>
                {!item.cancelled &&  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105'>
                    Pay Online
                  </button> }  
                 {!item.cancelled && <button onClick={()=>cancelBooking(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105'>
                    Cancel appointment
                  </button> } 
              {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500 '> Your Booking cancelled </button> }
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-6">No bookings yet.</p>
          )
        }
      </div>
    </div>
  )
}

export default Mybookingpage

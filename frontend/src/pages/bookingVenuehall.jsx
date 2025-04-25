import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/appcontext";
import RelatedVenHalls from "./Venuefile/RelatedVenueHalls";
import { toast } from "react-toastify";
import axios from "axios";

const BookingVenueHall = () => {
  const { VenId } = useParams();
  const { venues, backendUrl, token, getVenuesData} = useContext(AppContext); //, userId 
  const [VenInfo, setVenInfo] = useState(null);
  const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const navigate = useNavigate();
  const [VenSlots, setVenSlots] = useState([]);
  const [SlotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');



  const getAvailableSlots = async () => {
    setVenSlots([]); // Reset the slot list
    let today = new Date();
  
    // Loop to generate slots for the next 7 days
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      // Setting time limits for the venue, e.g., 12-hour or full-day slots
      let startTime = new Date(currentDate);
      startTime.setHours(8, 0, 0, 0);  // Venue starts at 8 AM
      
      let endTime = new Date(currentDate);
      endTime.setHours(20, 0, 0, 0);   // Venue ends at 8 PM (adjust based on your needs)
  
      // This will generate multiple slots depending on your desired slot duration
      let timeSlots = [];
  
      while (startTime < endTime) {
        let formattedTime = currentDate.toLocaleDateString() + ' ' + startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;  // Corrected this line
        let year = currentDate.getFullYear();
  
        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;
  
        const isSlotAvailable = VenInfo.slots_booked[slotDate] && VenInfo.slots_booked[slotDate].includes(slotTime) ? false : true;
         
        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(startTime), 
            time: formattedTime
          });
        }
  
        // Incrementing the start time by 12 hours for each slot (if you want full-day or half-day bookings)
        startTime.setHours(startTime.getHours() + 12);  // You can adjust this based on your needs, e.g., 12-hour intervals
      }
  
      if (timeSlots.length) {
        setVenSlots((prev) => [...prev, timeSlots]);  // Update the slots
      }
    }
  };


  
  

  const fetchVenInfo = async () => {
    if (venues && venues.length > 0) {
      const foundVenue = venues.find((ven) => ven._id.toString() === VenId.toString());
      setVenInfo(foundVenue || null);
    }
  };

  const bookHall = async () => {
    if (!token) {
      toast.warn('Login to book hall');
      return navigate('/login');
    }

    // if (!userId) {
    //   toast.error("User ID not available");
    //   return;
    // }

    try {
      const date = VenSlots[SlotIndex][0].datetime;
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;

      const { data } = await axios.post(
        `${backendUrl}/api/user/booking-hall`,
        { VenId, slotDate, slotTime }, //, userId
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        getVenuesData();
        navigate('/my-bookings');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    fetchVenInfo();
  }, [venues, VenId]);

  useEffect(() => {
    if (VenInfo) getAvailableSlots();
  }, [VenInfo]);

  useEffect(() => {
    console.log(VenSlots);
  }, [VenSlots]);

  return (
    <div className="px-4 sm:px-12 py-12  min-h-screen">
    <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
      Book Your Dream Venue
    </h1>

    {VenInfo ? (
      <>
        {/* Venue Card */}
        
      {/* <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col sm:flex-row gap-24">
          <div className="flex-1 w-full h-full gap-8">
          <img
              className="w-full  h-[450px] rounded-2xl shadow-2xl object-cover"
              src={VenInfo.image}
              alt={VenInfo.name}
            />
          </div>
            <div className="flex-1 border border-gray-200  rounded-2xl p-10 bg-white flex flex-col w-full justify-between mx-2 sm:mx-0  sm:mt-0">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{VenInfo.name}</h2>
            <p>City: {VenInfo.city}</p>
            <p>About: {VenInfo.about}</p>
            <p>Capacity: {VenInfo.capacity}</p>
            <p>Booking Fees: ₹{VenInfo.bookingPrice}</p>
            <p>Address: {VenInfo.address.line1}, {VenInfo.address.line2}, {VenInfo.city}</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">Book Now</button>
          </div>
        </div>
      </div> */}

<div className="flex flex-col sm:flex-row gap-12 sm:gap-20 items-center sm:items-start">
  {/* Left Image */}
  <div className="w-full sm:w-[420px] h-[340px]">
    <img
      className="w-full h-full rounded-2xl shadow-xl object-cover"
      src={VenInfo.image}
      alt={VenInfo.name}
    />
  </div>

  {/* Right Details */}
  <div className="flex-1 border border-gray-200 rounded-2xl p-10 bg-white flex flex-col justify-between w-full">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{VenInfo.name}</h2>
    <p className="mb-1"><strong>City:</strong> {VenInfo.city}</p>
    <p className="mb-1"><strong>About:</strong> {VenInfo.about}</p>
    <p className="mb-1"><strong>Capacity:</strong> {VenInfo.capacity}</p>
    <p className="mb-1"><strong>Booking Fees:</strong> ₹{VenInfo.bookingPrice}</p>
    <p className="mb-4"><strong>Address:</strong> {VenInfo.address.line1}, {VenInfo.address.line2}, {VenInfo.city}</p>
    <button className="self-start bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
      Book Now
    </button>
  </div>
</div>

        {/* Booking Slots */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Available Booking Slots</h3>

          {/* Dates */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {VenSlots.length > 0 &&
              VenSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-4 px-4 rounded-lg min-w-[80px] cursor-pointer border ${
                    SlotIndex === index ? 'bg-pink-500 text-white' : 'border-gray-300 text-gray-600'
                  }`}
                >
                  <p className="font-semibold">
                    {daysofweek[item[0]?.datetime.getDay()]}
                  </p>
                  <p className="text-sm">{item[0]?.datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mt-6">
            {VenSlots[SlotIndex]?.map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
                  item.time === slotTime
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-500 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>

          {/* Book Button */}
          <button
            onClick={bookHall}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full font-medium shadow-md"
          >
            Book an Event
          </button>
        </div>

        {/* Related Halls */}
        <div className="mt-16 max-w-6xl mx-auto">
          <RelatedVenHalls VenId={VenId} city={VenInfo.city} />
        </div>
      </>
    ) : (
      <p className="text-center text-gray-600">Loading venue details or not found.</p>
    )}
  </div>
);
};
export default BookingVenueHall;



// <div>
// <h1>Booking Venue Hall</h1>

// {VenInfo ? (
//   <div>
    // <div className="flex flex-col items-center mt-20">
    //   <div className="flex flex-col sm:flex-row gap-24">
    //     <div className="flex-1 w-[180px] h-[450px] gap-8">
    //       <img
    //         className="w-full  h-[450px] rounded-2xl shadow-2xl object-cover"
    //         src={VenInfo.image}
    //         alt={VenInfo.name}
    //       />
    //     </div>
    //     <div className="flex-1 border border-gray-200  rounded-2xl p-10 bg-white flex flex-col justify-between mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
    //       <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{VenInfo.name}</h2>
    //       <p>City: {VenInfo.city}</p>
    //       <p>About: {VenInfo.about}</p>
    //       <p>Capacity: {VenInfo.capacity}</p>
    //       <p>Booking Fees: ₹{VenInfo.bookingPrice}</p>
    //       <p>Address: {VenInfo.address.line1}, {VenInfo.address.line2}, {VenInfo.city}</p>
    //       <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">Book Now</button>
    //     </div>
    //   </div>
    // </div>

//     <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 mt-32">
//       <p>Booking slots</p>
//       <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//         {VenSlots.length > 0 && VenSlots.map((item, index) => (
//           <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${SlotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
//             <p>{daysofweek[item[0]?.datetime.getDay()]}</p>
//             <p>{item[0]?.datetime.getDate()}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center gap-3 w-[820px] overflow-x-scroll mt-4">
//         {VenSlots[SlotIndex]?.map((item, index) => (
//           <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}>{item.time.toLowerCase()}</p>
//         ))}
//       </div>
//       <button onClick={ bookHall} className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 ">Book an Event</button>

//       <div>
//         {/* listing Related Venue halls */}
//         <RelatedVenHalls VenId={VenId} city={VenInfo.city} />
//       </div>

//     </div>

//   </div>
// ) : (<p>Loading venue details or not found.</p>)}
// </div>
// import { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from 'axios';

// export const AdminContext = createContext();

// export const AdminContextProvider = (props) => {
//   const [aToken, setATokenState] = useState('');

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [venues, setVenues] = useState([]);

//   // Sync token from localStorage on mount
//   useEffect(() => {
//     const storedToken = localStorage.getItem("aToken");
//     if (storedToken) {
//       setATokenState(storedToken);
//     }
//   }, []);

//   // Wrapped setAToken to also update localStorage
//   const setAToken = (token) => {
//     localStorage.setItem("aToken", token);
//     setATokenState(token);
//   };

//   const getAllVenues = async () => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/admin/all-venues`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${aToken}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
     
//       const data = response.data;

//       if (data.success) {
//         setVenues(data.venues);
//         console.log(data.venues);
      
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching venues:', error);
//       toast.error('Something went wrong while fetching venues');
//     }
//   };

//   const value = {
//     aToken, setAToken,
//     backendUrl, venues,
//     getAllVenues,
//   };

//   return (
//     <AdminContext.Provider value={value}>
//       {props.children}
//     </AdminContext.Provider>
//   );
// };

// export default AdminContextProvider;

///mainnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// AdminContext.jsx
// import { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from 'axios';
//import { changeAvailablity } from "../../../Backend/controllers/venueController";

// export const AdminContext = createContext();

// export const AdminContextProvider = ({ children }) => {
//   const [aToken, setATokenState] = useState('');
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [venues, setVenues] = useState([]);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("aToken");
//     if (storedToken) {
//       setATokenState(storedToken);
//     }
//   }, []);

//   const setAToken = (token) => {
//     localStorage.setItem("aToken", token);
//     setATokenState(token);
//   };

//   const getAllVenues = async () => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/admin/all-venues`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${aToken}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
       
//       const changeAvailability = async (venId)=>{
//         try{
//           const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{venId},{headers: aToken})

//            if(data.success){
//             toast.success(data.message)
//             getAllVenues()
//            }else{
//             toast.error(data.message)
//            }
//         } catch (error){
//           toast.error(error.message)
//         }

//       }
//       const data = response.data;

//       if (data.success) {
//         setVenues(data.venues);
//         console.log(data.venues);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching venues:', error);
//       toast.error('Something went wrong while fetching venues');
//     }
//   };

//   return (
//     <AdminContext.Provider value={{ aToken, setAToken, backendUrl, venues, getAllVenues, changeAvailability }}>
//       {children}
//     </AdminContext.Provider>
//   );
// };



import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setATokenState] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [venues, setVenues] = useState([]);
 const [bookings,setBookings] = useState([])

  useEffect(() => {
    const storedToken = localStorage.getItem("aToken");
    if (storedToken) {
      setATokenState(storedToken);
    }
  }, []);

  const setAToken = (token) => {
    localStorage.setItem("aToken", token);
    setATokenState(token);
  };

  const getAllVenues = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/admin/all-venues`,
        {},
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      if (data.success) {
        setVenues(data.venues);
        console.log(data.venues);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching venues:', error);
      toast.error('Something went wrong while fetching venues');
    }
  };

  const changeAvailability = async (venId) => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/admin/change-availability',
        { venId },
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getAllVenues();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  const getAllBookings = async ()=>{

    try{

const {data} = await axios.get(backendUrl + '/api/admin/all-bookings', {
  headers: {
    Authorization: `Bearer ${aToken}`,
    'Content-Type': 'application/json',
  },
})
        

if(data.success){
  setBookings(data.bookings)

  
   console.log(data.bookings)
}else{
  toast.error(data.message)
}
    }catch(error){
      console.log(error)
      toast.error(error.message);
    }
  }

  const updateProfile = async (formData) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/user/all-bookings`, // or /update-profile if you rename it
        formData,
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            "Content-Type": "multipart/form-data", // Required for image + formData
          },
        }
      );
  
      const data = response.data;
  
      if (data.success) {
        toast.success(data.message);
        return data.user; // returning updated user if needed
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error("Something went wrong while updating profile.");
    }
  };
  


  return (
    <AdminContext.Provider value={{
      aToken,
      setAToken,
      backendUrl,
      venues,
      getAllVenues,
      changeAvailability,
      bookings,setBookings,
      getAllBookings,
      updateProfile
    }}>
      {children}
    </AdminContext.Provider>
  );
};

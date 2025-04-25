// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";
// import imgicon from "../assets/imgicon.png";

// function AddVenue() {
//   const { backendUrl, aToken } = useContext(AppContext);

//   const [venImg, setVenImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [city, setCity] = useState("Hyderabad");
//   const [capacity, setCapacity] = useState("90 Guests");
//   const [bookingPrice, setBookingPrice] = useState("");
//   const [about, setAbout] = useState("");
//   const [facilities, setFacilities] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");

//   const addVenue = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("city", city);
//       formData.append("capacity", capacity);
//       formData.append("bookingPrice", bookingPrice);
//       formData.append("about", about);
//       formData.append("facilities", facilities);
//       formData.append("address", JSON.stringify({ address1, address2 }));
//       formData.append("imageFile", venImg); // backend expects "imageFile"

//       const { data } = await axios.post(
//         `${backendUrl}/api/admin/add-venue`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${aToken}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         // reset form
//         setVenImg(false);
//         setName("");
//         setEmail("");
//         setPassword("");
//         setCity("Hyderabad");
//         setCapacity("90 Guests");
//         setBookingPrice("");
//         setAbout("");
//         setFacilities("");
//         setAddress1("");
//         setAddress2("");
//       } else {
//         toast.error(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       if (error.response?.status === 409) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("Something went wrong");
//       }
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto px-4 mt-10 mb-20">
//       <h1 className="text-center text-2xl font-bold mb-6">Add Venue</h1>

//       <form onSubmit={addVenue} className="grid grid-cols-1 gap-4">
//         {/* Image Upload */}
//         <label htmlFor="ven-img" className="cursor-pointer">
//           {venImg ? (
//             <img
//               src={URL.createObjectURL(venImg)}
//               alt="Venue Preview"
//               className="w-16 h-16 object-cover rounded-full"
//             />
//           ) : (
//             <img
//               src={imgicon}
//               alt="Upload"
//               className="w-16 h-16 object-cover rounded-full"
//             />
//           )}
//         </label>
//         <input
//           type="file"
//           accept="image/*"
//           id="ven-img"
//           name="imageFile"
//           hidden
//           onChange={(e) => setVenImg(e.target.files[0])}
//         />

//         <input
//           type="text"
//           required
//           placeholder="Venue Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           required
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           required
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <select value={city} onChange={(e) => setCity(e.target.value)}>
//           <option>Hyderabad</option>
//           <option>Banglore</option>
//           <option>Mumbai</option>
//           <option>Chennai</option>
//         </select>
//         <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
//           <option>90 Guests</option>
//           <option>180 Guests</option>
//           <option>300 Guests</option>
//           <option>500 Guests</option>
//           <option>1000+ Guests</option>
//         </select>
//         <input
//           type="number"
//           min="0"
//           required
//           placeholder="Booking Price"
//           value={bookingPrice}
//           onChange={(e) => setBookingPrice(e.target.value)}
//         />
//         <input
//           type="text"
//           required
//           placeholder="About Venue"
//           value={about}
//           onChange={(e) => setAbout(e.target.value)}
//         />
//         <input
//           type="text"
//           required
//           placeholder="Facilities (comma separated)"
//           value={facilities}
//           onChange={(e) => setFacilities(e.target.value)}
//         />
//         <input
//           type="text"
//           required
//           placeholder="Address Line 1"
//           value={address1}
//           onChange={(e) => setAddress1(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Address Line 2"
//           value={address2}
//           onChange={(e) => setAddress2(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
//         >
//           Add Venue
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddVenue;



// // AddVenue.jsx

// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddVenue = () => {
//   const [venImg, setVenImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [city, setCity] = useState("Hyderabad");
//   const [capacity, setCapacity] = useState("90 Guests");
//   const [bookingPrice, setBookingPrice] = useState("");
//   const [about, setAbout] = useState("");
//   const [facilities, setFacilities] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");

//   const { backendUrl, aToken } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (!venImg) {
//         return toast.error("Image Not Selected");
//       }

//       const formData = new FormData();
//       formData.append("imageFile", venImg);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("city", city);
//       formData.append("bookingPrice", bookingPrice);
//       formData.append("about", about);
//       formData.append("capacity", capacity);
//       formData.append("facilities", facilities);
//       formData.append(
//         "address",
//         JSON.stringify({ line1: address1, line2: address2 })
//       );
//       console.log("Token being sent:", aToken);

//       for (let [key, value] of formData.entries()) {
//         console.log(${key}:, value);
//       }
//       const { data } = await axios.post(
//         ${backendUrl}/api/admin/add-venue,
//         formData,
//         {
//           headers: {
//             Authorization: Bearer ${aToken},
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error adding venue:", error);

//       if (error.response?.data?.message?.includes("duplicate key")) {
//         toast.error("Venue with this email already exists");
//       } else {
//         toast.error("Server error, please try again");
//       }
//     }
//   };

//   return (
//     <form action="" onSubmit={onSubmitHandler} className="m-5 w-full">
//       <p className="mb-3 text-lg font-medium">AddVenue</p>
//       <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
//         <div className="flex items-center gap-4 mb-8 text-gray-500">
//           <label htmlFor="ven-img">
//             <img
//               className="w-16 bg-gray-100 rounded-full cursor-pointer"
//               src={venImg ? URL.createObjectURL(venImg) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setVenImg(e.target.files[0])}
//             type="file"
//             name="imageFile"
//             id="ven-img"
//             hidden
//           />
//           <p>
//             Upload venue <br /> picture{" "}
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600 ">
//           <div className="w-full lg:flex-1 flex flex-col gap-4 ">
//             <div className="flex-1 flex-col gap-1 ">
//               <p>Venue name</p>
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Name"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Venue Email</p>
//               <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Venue Password</p>
//               <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>City</p>
//               <select
//                 onChange={(e) => setCity(e.target.value)}
//                 value={city}
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="Bengaluru">Bengaluru</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Jaipur">Jaipur</option>
//                 <option value="Goa">Goa</option>
//                 <option value="Kerala">Kerala</option>
//               </select>
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Capacity</p>
//               <select
//                 onChange={(e) => setCapacity(e.target.value)}
//                 value={capacity}
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="90 Guests">90 Guests</option>
//                 <option value="150 Guests">150 Guests</option>
//                 <option value="200 Guests">200 Guests</option>
//                 <option value="300 Guests">300 Guests</option>
//                 <option value="400 Guests">400 Guests</option>
//                 <option value="500 Guests">500 Guests</option>
//                 <option value="600 Guests">600 Guests</option>
//                 <option value="700 Guests">700 Guests</option>
//               </select>
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Booking Fees</p>
//               <input
//                 type="number"
//                 onChange={(e) => setBookingPrice(e.target.value)}
//                 value={bookingPrice}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Booking Fees"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col w-1/2">
//             <div className="lg:flex-1 w-full flex flex-col gap-4">
//               <p>Address</p>
//               <input
//                 type="text"
//                 onChange={(e) => setAddress1(e.target.value)}
//                 value={address1}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="address 1"
//                 required
//               />
//               <input
//                 type="text"
//                 onChange={(e) => setAddress2(e.target.value)}
//                 value={address2}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="address 2"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1 mt-6">
//               <p>Facilities</p>
//               <input
//                 type="text"
//                 onChange={(e) => setFacilities(e.target.value)}
//                 value={facilities}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Facilities"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className="mt-4 mb-2">About Venue</p>
//         <textarea
//           className="w-full px-4 pt-2 border rounded "
//           onChange={(e) => setAbout(e.target.value)}
//           value={about}
//           type="text"
//           placeholder="Write about Venue"
//           rows={5}
//           required
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="bg-primary px-10 py-3  mt-4 text-white rounded-full"
//       >
//         Add venue
//       </button>
//     </form>
//   );
// };

// export default AddVenue;

// AddVenue.jsx

// // AddVenue.jsx

// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddVenue = () => {
//   const [venImg, setVenImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [city, setCity] = useState("Hyderabad");
//   const [capacity, setCapacity] = useState("90 Guests");
//   const [bookingPrice, setBookingPrice] = useState("");
//   const [about, setAbout] = useState("");
//   const [facilities, setFacilities] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");

//   const { backendUrl, aToken } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (!venImg) {
//         return toast.error("Image Not Selected");
//       }

//       const formData = new FormData();
//       formData.append("imageFile", venImg);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("city", city);
//       formData.append("bookingPrice", bookingPrice);
//       formData.append("about", about);
//       formData.append("capacity", capacity);
//       formData.append("facilities", facilities);
//       formData.append(
//         "address",
//         JSON.stringify({ line1: address1, line2: address2 })
//       );
//       console.log("Token being sent:", aToken);

//       for (let [key, value] of formData.entries()) {
//         console.log(${key}:, value);
//       }
//       const { data } = await axios.post(
//         ${backendUrl}/api/admin/add-venue,
//         formData,
//         {
//           headers: {
//             Authorization: Bearer ${aToken},
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error adding venue:", error);

//       if (error.response?.data?.message?.includes("duplicate key")) {
//         toast.error("Venue with this email already exists");
//       } else {
//         toast.error("Server error, please try again");
//       }
//     }
//   };

//   return (
//     <form action="" onSubmit={onSubmitHandler} className="m-5 w-full">
//       <p className="mb-3 text-lg font-medium">AddVenue</p>
//       <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
//         <div className="flex items-center gap-4 mb-8 text-gray-500">
//           <label htmlFor="ven-img">
//             <img
//               className="w-16 bg-gray-100 rounded-full cursor-pointer"
//               src={venImg ? URL.createObjectURL(venImg) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setVenImg(e.target.files[0])}
//             type="file"
//             name="imageFile"
//             id="ven-img"
//             hidden
//           />
//           <p>
//             Upload venue <br /> picture{" "}
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600 ">
//           <div className="w-full lg:flex-1 flex flex-col gap-4 ">
//             <div className="flex-1 flex-col gap-1 ">
//               <p>Venue name</p>
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Name"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Venue Email</p>
//               <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Venue Password</p>
//               <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>City</p>
//               <select
//                 onChange={(e) => setCity(e.target.value)}
//                 value={city}
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="Bengaluru">Bengaluru</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Jaipur">Jaipur</option>
//                 <option value="Goa">Goa</option>
//                 <option value="Kerala">Kerala</option>
//               </select>
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Capacity</p>
//               <select
//                 onChange={(e) => setCapacity(e.target.value)}
//                 value={capacity}
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="90 Guests">90 Guests</option>
//                 <option value="150 Guests">150 Guests</option>
//                 <option value="200 Guests">200 Guests</option>
//                 <option value="300 Guests">300 Guests</option>
//                 <option value="400 Guests">400 Guests</option>
//                 <option value="500 Guests">500 Guests</option>
//                 <option value="600 Guests">600 Guests</option>
//                 <option value="700 Guests">700 Guests</option>
//               </select>
//             </div>

//             <div className="flex-1 flex-col gap-1">
//               <p>Booking Fees</p>
//               <input
//                 type="number"
//                 onChange={(e) => setBookingPrice(e.target.value)}
//                 value={bookingPrice}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Booking Fees"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col w-1/2">
//             <div className="lg:flex-1 w-full flex flex-col gap-4">
//               <p>Address</p>
//               <input
//                 type="text"
//                 onChange={(e) => setAddress1(e.target.value)}
//                 value={address1}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="address 1"
//                 required
//               />
//               <input
//                 type="text"
//                 onChange={(e) => setAddress2(e.target.value)}
//                 value={address2}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="address 2"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex-col gap-1 mt-6">
//               <p>Facilities</p>
//               <input
//                 type="text"
//                 onChange={(e) => setFacilities(e.target.value)}
//                 value={facilities}
//                 className="w-full border rounded px-3 py-2"
//                 placeholder="Facilities"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className="mt-4 mb-2">About Venue</p>
//         <textarea
//           className="w-full px-4 pt-2 border rounded "
//           onChange={(e) => setAbout(e.target.value)}
//           value={about}
//           type="text"
//           placeholder="Write about Venue"
//           rows={5}
//           required
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="bg-primary px-10 py-3  mt-4 text-white rounded-full"
//       >
//         Add venue
//       </button>
//     </form>
//   );
// };

// export default AddVenue;

// AddVenue.jsx



import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext"; // ✅ Correct path
import { toast } from "react-toastify";
import axios from "axios";

const AddVenue = () => {
  const [venImg, setVenImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("Hyderabad");
  const [capacity, setCapacity] = useState("90 Guests");
  const [bookingPrice, setBookingPrice] = useState("");
  const [about, setAbout] = useState("");
  const [facilities, setFacilities] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!venImg) {
        return toast.error("Please select an image");
      }

      const formData = new FormData();
      formData.append("imageFile", venImg); // ✅ Must match backend multer
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("city", city);
      formData.append("capacity", capacity);
      formData.append("bookingPrice", bookingPrice);
      formData.append("about", about);
      formData.append("facilities", facilities);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-venue`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "";
      const status = error.response?.status;
      if (status === 409 || msg.includes("duplicate key")) {
        toast.error("Email already in use. Please use a different one.");
      } else {
        toast.error("Server error, please try again.");
      }
      console.error("Add Venue Error:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">AddVenue</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="ven-img">
            <img
              className="w-16 h-16 object-cover bg-gray-100 rounded-full cursor-pointer"
              src={venImg ? URL.createObjectURL(venImg) : assets.upload_area}
              alt="Upload venue"
            />
          </label>
          <input
            onChange={(e) => setVenImg(e.target.files[0])}
            type="file"
            id="ven-img"
            name="imageFile"
            hidden
          />
          <p>Upload venue picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
            <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required />
            <select value={city} onChange={(e) => setCity(e.target.value)} className="input">
              {["Hyderabad", "Bengaluru", "Mumbai", "Delhi", "Jaipur", "Goa", "Kerala"].map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)} className="input">
              {["90 Guests", "150 Guests", "200 Guests", "300 Guests", "400 Guests", "500 Guests", "600 Guests", "700 Guests"].map(c => <option key={c}>{c}</option>)}
            </select>
            <input placeholder="Booking Fees" type="number" value={bookingPrice} onChange={(e) => setBookingPrice(e.target.value)} className="input" required />
          </div>

          <div className="flex flex-col w-1/2">
            <input placeholder="Address Line 1" value={address1} onChange={(e) => setAddress1(e.target.value)} className="input" required />
            <input placeholder="Address Line 2" value={address2} onChange={(e) => setAddress2(e.target.value)} className="input" required />
            <input placeholder="Facilities" value={facilities} onChange={(e) => setFacilities(e.target.value)} className="input mt-6" required />
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Venue</p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write about Venue"
            rows={5}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
        Add Venue
      </button>
    </form>
  );
};

export default AddVenue;

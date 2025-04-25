const mongoose = require("mongoose")


const Venueschema   = new mongoose.Schema({
    name :{type:String , required : true},
    email : {type:String,required:true, unique : true},
    password : {type:String ,required:true},
    image: { type: String, required:true }, // It expects "image"
    city : {type:String,required:true},
    capacity : {type:String,required:true},
     facilities : {type:String ,required:true},
    about : {type:String ,required:true},
    available : {type:Boolean ,default:true},
    bookingPrice : {type:Number ,required:true},
    address : {type:Object ,required:true},
    date : {type:Number ,required:true},
    slots_booked : {type:Object , default:{}}


},{minimize:false})


const VenueModel = mongoose.model.venue || mongoose.model('venue',Venueschema)


module.exports = VenueModel


// const mongoose = require("mongoose");

// const Venueschema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     images: { type: [String], required: true }, // Array to store multiple images
//     city: { type: String, required: true },
//     capacity: { type: String, required: true },
//     facilities: { type: String, required: true },
//     about: { type: String, required: true },
//     available: { type: Boolean, default: true },
//     bookingPrice: { type: Number, required: true },
//     address: { type: Object, required: true },
//     date: { type: Number, required: true },
//     slots_booked: { type: Object, default: {} }
// }, { minimize: false });

// const VenueModel = mongoose.model.venue || mongoose.model('venue', Venueschema);

// module.exports = VenueModel;



// import React, { useContext, useState } from "react";
// import { AppContext } from "../Context/appcontext";
// //import assets from "../assets/mahesh.jpg";

// const Myprofile = () => {
  

//   const {userData,setUserData} = useContext(AppContext)
//   const [isEdit, setIsEdit] = useState(false);

//   const handleSave = () => {
//     // Save user data here (e.g., API call)
//     setIsEdit(false);
//   };

//   return  userData && (
//     <div className="max-w-lg flex flex-col gap-2 text-sm mt-44">
//       <img src={userData.image} alt="profile" className="w-36 rounded" />
//       {isEdit ? (
//         <input
//           className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
//           type="text"
//           value={userData.name}
//           onChange={(e) =>
//             setUserData((prev) => ({ ...prev, name: e.target.value }))
//           }
//         />
//       ) : (
//         <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
//       )}
//       <hr className="bg-zinc-500 h-[1px] border-none" />
      
//       <div>
//         <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Email Id:</p>
//           <p className="text-blue-500">{userData.email}</p>
//           <p className="font-medium">Phone:</p>
//           {isEdit ? (
//             <input
//               className="bg-gray-50 max-w-52"
//               type="text"
//               value={userData.phone}
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, phone: e.target.value }))
//               }
//             />
//           ) : (
//             <p className="text-blue-400">{userData.phone}</p>
//           )}
//           <p className="font-medium">Address:</p>
//           {isEdit ? (
//             <>
//               <input
//                 className="bg-gray-50"
//                 type="text"
//                 value={userData.address.line1}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line1: e.target.value },
//                   }))
//                 }
//               />
//               <br />
//               <input
//                 className="bg-gray-50"
//                 type="text"
//                 value={userData.address.line2}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line2: e.target.value },
//                   }))
//                 }
//               />
//             </>
//           ) : (
//             <p className="text-gray-500">
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}
//             </p>
//           )}
//         </div>
//       </div>

//       <div>
//         <p className="mt-3 text-neutral-700 underline">BASIC INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Gender:</p>
//           {isEdit ? (
//             <select
//               className="max-w-20 bg-gray-100"
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, gender: e.target.value }))
//               }
//               value={userData.gender}
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           ) : (
//             <p className="text-gray-400">{userData.gender}</p>
//           )}
//           <p className="font-medium">Birthday:</p>
//           {isEdit ? (
//             <input
//               className="max-w-28 bg-gray-100"
//               type="date"
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, dob: e.target.value }))
//               }
//               value={userData.dob}
//             />
//           ) : (
//             <p className="text-gray-400">{userData.dob}</p>
//           )}
//         </div>
//       </div>

//       <div className="mt-10">
//         {isEdit ? (
//           <button
//             className="border border-primary px-8 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
//             onClick={handleSave}
//           >
//             Save Information
//           </button>
//         ) : (
//           <button
//             className="border border-primary px-8 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
//             onClick={() => setIsEdit(true)}
//           >
//             Edit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Myprofile;




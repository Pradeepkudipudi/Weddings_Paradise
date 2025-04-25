

// import React from "react";

// const More = ()=>{

//     return(<>
//      <div>
//         <h1>mORE</h1>
//      </div>
    
//     </>
       
//     )
// }

// export default More




import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";

import { Link } from "react-router-dom";
import { SiIndigo } from "react-icons/si";




const TopWedding = ()=>{

const {city} = useParams()
const {WeddingPlanners} = useContext(AppContext)
const [filterWed,setFiltervenue] = useState([])
const navigate = useNavigate()

const applyFilter =()=>{
    if(city){
        setFiltervenue(WeddingPlanners.filter(wed=>wed.city===city))
    }else{
        setFiltervenue(WeddingPlanners)
    }
}

useEffect(()=>{
applyFilter()
},[WeddingPlanners,city])
    return(<>
    <div className="ml-28 mt-32">
        <p className="text-gray-600">Browse through Venue halls in your city</p>

        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
            <div className=" flex flex-col gap-4 text-sm text-gray-600"> 
                <p onClick={()=>city==='Bengaluru'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Bengaluru')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer hover:text-black ${city==="Bengaluru"?"bg-indigo-200 text-black":""}`} >Bengaluru</p>
                <p onClick={()=>city==='Hyderabad'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Hyderabad')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Hyderabad"?"bg-indigo-200 text-black":""}`}>Hyderabad</p>
                <p onClick={()=>city==='Mumbai'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Mumbai')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Mumbai"?"bg-indigo-200 text-black":""}`}>Mumbai</p>
                <p onClick={()=>city==='Delhi'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Delhi')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Delhi"?"bg-indigo-200 text-black":""}`}>Delhi</p>
                <p onClick={()=>city==='Jaipur'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Jaipur')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Jaipur"?"bg-indigo-200 text-black":""}`}>Jaipur</p>
                <p onClick={()=>city==='Goa'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Goa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Goa"?"bg-indigo-200 text-black":""}`}>Goa</p>
                <p onClick={()=>city==='Kerala'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Kerala')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Kerala"?"bg-indigo-200 text-black":""}`}> Kerala</p>
                <p onClick={()=>city==='Chennai'?navigate('/Weddingplanners'): navigate('/Weddingplanners/Chennai')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Chennai"?"bg-indigo-200 text-black":""}`}> Chennai</p>
    
        </div>
            <div className="w-full  grid-cols-auto   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
{
filterWed.map((item,index) => (
    <div  onClick={()=> navigate(`/venue-booking-hall/${item.Wed_id}`)}
    key={index} 
    className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
    >
    <div className="h-48 w-full overflow-hidden">
        <img 
        src={item.image} 
        alt={item.name} 
        className="h-full w-full object-cover" 
        />
            

    </div>
    <div className="p-4">
        <div className="flex items-center justify-center text-sm gap-2 text-green-500">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <p>Available</p>
        </div>
        <p className="text-center font-semibold text-lg text-gray-900 font-medium">{item.name}</p>
        <p className="text-center text-gray-600 text-sm">{item.city}</p>
    </div>
    </div>
))}

            </div>
        </div>
    </div>
    
    </>
    
    )
}

export default TopWedding




// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../Context/appcontext";

// const TopWedding = () => {
//   const { city } = useParams();
//   const { WeddingPlanners } = useContext(AppContext);
//   const [filterWed, setFilterWed] = useState([]);
//   const navigate = useNavigate();

//   const applyFilter = () => {
//     if (city) {
//       setFilterWed(WeddingPlanners.filter((wed) => wed.city === city));
//     } else {
//       setFilterWed(WeddingPlanners);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [WeddingPlanners, city]);

//   return (
//     <div className="ml-28">
//       <p className="text-gray-600">Browse through Venue halls in your city</p>

//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <div className="flex flex-col gap-4 text-sm text-gray-600">
//           {["Bengaluru", "Hyderabad", "Mumbai", "Delhi", "Jaipur", "Goa", "Kerala", "Chennai"].map((location) => (
//             <p
//               key={location}
//               onClick={() => navigate(`/Weddingplanners/${location}`)}
//               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer hover:text-black ${
//                 city === location ? "bg-indigo-200 text-black" : ""
//               }`}
//             >
//               {location}
//             </p>
//           ))}
//         </div>

//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
//           {filterWed.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/venue-booking-hall/${item.Wed_id}`)}
//               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
//             >
//               <div className="h-48 w-full overflow-hidden">
//                 <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center justify-center text-sm gap-2 text-green-500">
//                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-center font-semibold text-lg text-gray-900 font-medium">{item.name}</p>
//                 <p className="text-center text-gray-600 text-sm">{item.city}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopWedding;





















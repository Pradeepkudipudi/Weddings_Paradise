// import React, { useContext } from "react";
//import {venues} from "../../pages/Venuefile/./assets" 
// import { useNavigate } from "react-router-dom";
// import {  Appcontext } from "../../Context/appcontext";



import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/appcontext"; // Double-check this path












//import { useParams } from "react-router-dom";
//const { _id } = useParams(); 

const Citiesmenu = ()=>{

const navigate = useNavigate()
const { venues } = useContext(AppContext);

// console.log("Venues:", venues);
// if (!venues || venues.length === 0) return <p>No venues available.</p>;
// console.log("Venues in Context:", venues);


    return(<>
     <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-auto ">
        <h1 className="text-3xl font-medium"> Top Cities to book</h1>
        <p className=" sm:w-1/3 text-center text-sm"> "Explore an exclusive selection of trusted venues to make your dream wedding unforgettable."</p>
        {/* <div className="grid grid-cols-autoFill gap-4 pt-6 gap-y-32 px-48 pl-6  sm:px-0 ">
            {venues.slice(0,10).map((item)=>(
                <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500">
                    <img src={item.image} alt="" className="bg-blue-50"></img>
                <div className="p4">
                 <div className="flex items-center text-center text-sm gap-2 text-green-500">
                 <p className="w-2 h-2 bg-green-500 text-center rounded-full "></p><p className="text-center items-center">Available</p>
                 </div>
                 <p className="text-center">{item.name}</p>
                 <p className="text-center items-center">{item.city}</p>
                </div>
                </div>
            ))}
        </div> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
     
     
     {/* dummy trail*/}
{/*      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
  {venues && venues.length > 0 ? (
    venues.slice(0, 10).map((item) => (
      <div 
        onClick={() => navigate(`/my-bookings/${item._id}`)} 
        key={item._id} 
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
    ))
  ) : (
    <p>No venues available</p>
  )}
</div> */}

 

























     
     
     
     
     
     
     
     
     
     {/* best trail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
  {venues.slice(0, 10).map((item,index) => (
    <div onClick={()=>navigate(`/my-bookings/${item._id}`)}
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

<div className="flex justify-center">
  <button onClick={()=>{navigate('./VenueMenu') ;  scrollTo(0,0)} } className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 border-black">
    More
  </button>
</div>
</div>
    
    </>
       
    )
}

export default Citiesmenu
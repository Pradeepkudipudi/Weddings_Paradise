

// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../Context/appcontext";
// import { useNavigate } from "react-router-dom";

// const RelatedVenHalls = (city,VenId)=>{


//    const navigate = useNavigate()
//     const {venues} = useContext(AppContext)
//   const [relVen , setRelVen] = useState([])


//   useEffect(()=>{
// if(venues.length > 0 && city){
//     const VenuesData = venues.filter((ven)=>ven.city == city && ven._id !== VenId)

//     setRelVen(VenuesData)

// }


//   },[venues,city,VenId])




 

//     return(<>
// <p>Related venue halls to book </p>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
//   {venues.slice(0, 5).map((item,index) => (
//     <div onClick={()=>navigate(`/my-bookings/${item._id}`)  }
//       key={index} 
//       className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
//     >
//       <div className="h-48 w-full overflow-hidden">
//         <img 
//           src={item.image} 
//           alt={item.name} 
//           className="h-full w-full object-cover" 
//         />
            

//       </div>
//       <div className="p-4">
//         <div className="flex items-center justify-center text-sm gap-2 text-green-500">
//           <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//           <p>Available</p>
//         </div>
//         <p className="text-center font-semibold text-lg text-gray-900 font-medium">{item.name}</p>
//         <p className="text-center text-gray-600 text-sm">{item.city}</p>
//       </div>
//     </div>
//   ))}
// </div>  

// <div className="flex justify-center">
//   <button onClick={()=>{navigate('./VenueMenu') ;  scrollTo(0,0)} } className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 border-black">
//     More
//   </button>
// </div>
//     </>

//     )
// }

// export default RelatedVenHalls













//dummy








import React, { useContext, useEffect, useState } from "react";
//import { AppContext } from "../../Context/appcontext";
import { AppContext } from "../../Context/appcontext.jsx";
import { useNavigate } from "react-router-dom";

const RelatedVenHalls = ({ city, VenId }) => {
  const navigate = useNavigate();
  const { venues } = useContext(AppContext);
  const [relVen, setRelVen] = useState([]);

  useEffect(() => {
    if (venues.length > 0 && city) {
      const VenuesData = venues.filter(
        (ven) => ven.city === city && ven._id !== VenId
      );
      setRelVen(VenuesData);
    }
  }, [venues, city, VenId]);

  return (
    <>
      <p className="text-lg font-semibold text-gray-800 mb-4 mt-32">
        Related Venue Halls to Book
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-20">
        {relVen.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate(`/my-bookings/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center text-sm gap-2 text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-center font-semibold text-lg text-gray-900">
                {item.name}
              </p>
              <p className="text-center text-gray-600 text-sm">{item.city}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default RelatedVenHalls;
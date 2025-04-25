

    // import React, { useContext, useEffect, useState } from "react";
    // import { useNavigate, useParams } from "react-router-dom";
    // import { AppContext } from "../Context/appcontext";
    // import grey from './Venuefile/greyheart.jpg'
    // import red from './Venuefile/redHeart.jpg'

    // import { Link } from "react-router-dom";
    // import { SiIndigo } from "react-icons/si";




    // const VenueMenubar = ()=>{

    // const {city} = useParams()
    // const {venues} = useContext(AppContext)
    // const [filterVenue,setFiltervenue] = useState([])
    // const navigate = useNavigate()
    // const [isFav , setFav ] = useState(false)

    // const applyFilter =()=>{
    //     if(city){
    //         setFiltervenue(venues.filter(ven=>ven.city===city))
    //     }else{
    //         setFiltervenue(venues)
    //     }
    // }

    // const heartHandler = ()=>{
    //     setFav(true)
    // }

    // useEffect(()=>{
    // applyFilter()
    // },[venues,city])
    //     return(<>
    //     <div className="ml-28 mt-32">
    //         <p className="text-gray-600">Browse through Venue halls in your city</p>

    //         <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
    //             <div className=" flex flex-col gap-4 text-sm text-gray-600"> 
    //                 <p onClick={()=>city==='Bengaluru'?navigate('/VenueMenu'): navigate('/VenueMenu/Bengaluru')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer hover:text-black ${city==="Bengaluru"?"bg-indigo-200 text-black":""}`} >Bengaluru</p>
    //                 <p onClick={()=>city==='Hyderabad'?navigate('/VenueMenu'): navigate('/VenueMenu/Hyderabad')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Hyderabad"?"bg-indigo-200 text-black":""}`}>Hyderabad</p>
    //                 <p onClick={()=>city==='Mumbai'?navigate('/VenueMenu'): navigate('/VenueMenu/Mumbai')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Mumbai"?"bg-indigo-200 text-black":""}`}>Mumbai</p>
    //                 <p onClick={()=>city==='Delhi'?navigate('/VenueMenu'): navigate('/VenueMenu/Delhi')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Delhi"?"bg-indigo-200 text-black":""}`}>Delhi</p>
    //                 <p onClick={()=>city==='Jaipur'?navigate('/VenueMenu'): navigate('/VenueMenu/Jaipur')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Jaipur"?"bg-indigo-200 text-black":""}`}>Jaipur</p>
    //                 <p onClick={()=>city==='Goa'?navigate('/VenueMenu'): navigate('/VenueMenu/Goa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Goa"?"bg-indigo-200 text-black":""}`}>Goa</p>
    //                 <p onClick={()=>city==='Kerala'?navigate('/VenueMenu'): navigate('/VenueMenu/Kerala')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer  hover:text-black ${city==="Kerala"?"bg-indigo-200 text-black":""}`}> Kerala</p>
    //         </div>
    //             <div className="w-full  grid-cols-auto   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
    // {
    // filterVenue.map((item,index) => (
    //     <div  onClick={()=> navigate(`/venue-booking-hall/${item._id}`)}
    //     key={index} 
    //     className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
    //     >
    //     <div className="h-48 w-full overflow-hidden">
    //         <img 
    //         src={item.image} 
    //         alt={item.name} 
    //         className="h-full w-full object-cover" 
    //         />
                

    //     </div>
    //     <div className="p-4">
    //         <div className="flex items-center justify-center text-sm gap-2 text-green-500">
    //         <span className="w-2 h-2 bg-green-500 rounded-full"></span>
    //         <p>Available</p>
           
    //         </div>
    //         <p className="text-center font-semibold text-lg text-gray-900 font-medium">{item.name}</p>
    //         <p className="text-center text-gray-600 text-sm">{item.city}</p>
    //         <button onClick={heartHandler}><img className="h-6" src={isFav ?red  : grey }  alt="" /></button>
    //     </div>
    //     </div>
    // ))}

    //             </div>
    //         </div>
    //     </div>
        
    //     </>
        
    //     )
    // }

    // export default VenueMenubar

//updated


    import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/appcontext";
import grey from './Venuefile/greyheart.jpg';
import red from './Venuefile/redHeart.jpg';
import { Link } from "react-router-dom";
import { SiIndigo } from "react-icons/si";

const VenueMenubar = () => {
  const { city } = useParams();
  const { venues , favorites, setFavorites } = useContext(AppContext);
  const [filterVenue, setFiltervenue] = useState([]);
  const navigate = useNavigate();
  //const [favorites, setFavorites] = useState({}); // Tracks heart state per venue

  const applyFilter = () => {
    if (city) {
      setFiltervenue(venues.filter(ven => ven.city === city));
    } else {
      setFiltervenue(venues);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [venues, city]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation(); // Prevent navigation
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
     <p className="mt-24 sm:mt-28 text-center text-gray-600 text-base sm:text-lg">
  Browse through Venue halls in your city
</p>
     <div className="  flex flex-wrap justify-center mt-8 gap-4 text-sm items-center text-gray-600">
 
    
    
        <div className="flex  gap-4 text-sm items-center text-gray-600">
            {["Bengaluru", "Hyderabad", "Mumbai", "Delhi", "Jaipur", "Goa", "Kerala"].map((cty) => (
              <p
                key={cty}
                onClick={() => city === cty ? navigate('/VenueMenu') : navigate(`/VenueMenu/${cty}`)}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer hover:text-black ${city === cty ? "bg-indigo-200 text-black" : ""}`}
              >
                {cty}
              </p>
            ))}
          </div>


        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        
          <div className="w-full grid-cols-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-6 gap-y-12 px-4 sm:px-8 md:px-16 lg:px-20">
            {filterVenue.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/venue-booking-hall/${item._id}`)}
                className="border  border-black rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 border border-black" >
                  <div className="flex items-center justify-center text-sm gap-2 text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-center font-semibold text-lg text-gray-900 font-medium">
                    {item.name}
                  </p>
                  <p className="text-center text-gray-600 text-sm">{item.city}</p>
                  <button onClick={(e) => toggleFavorite(e, item._id)}>
                    <img
                      className="h-6"
                      src={favorites[item._id] ? red : grey}
                      alt="heart"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueMenubar;






















    // // const Citymenu = ()=>{
    // //     return(<>
        
    // //     <div>
    // //         {venues.map((item,index)=>(
    // //             <Link key={index} to={`/VenueMenu/${item.city}`}>
    // //             <img src={item.image} alt="" />
    // //             <p>{item.city}</p>
    // //             </Link>
    // //         ))}
    // //     </div>
    // //     </>
    // //     )
    // // }


import React from "react";
// import  Home  from "./pages/Home"
import Hero from "../Components/Hero/Hero"
import Equipment from "../Components/Equipments/Equipments"
import Citiesmenu from "../Components/Hero/citiesMenu"
import Bride from "../Components/Middle_compos/Bride";
import Pageinfo from "../Components/Middle_compos/PageInfo";
import Slider from '../Components/Hero/Slider'


const Home = ()=>{

    return(<>
    
      
    <Bride/>
              <Hero />
              <Pageinfo/>
              <Equipment/>
              <Citiesmenu />
              <Slider/>

    
    

{/* <p className=" text-3xl font-greatVibes"
            >
              "A beautiful journey of love and commitment, where two hearts
              unite to create a lifetime of memories, laughter, and
              togetherness....."
            </p>
<br />

            <p className=" text-4xl font-corinthia"
            >
              "A beautiful journey of love and commitment, where two hearts
              unite to create a lifetime of memories, laughter, and
              togetherness....."
            </p>
            <br />
            
<p className=" text-3xl font-allison "
            >
              "A beautiful journey of love and commitment, where two hearts
              unite to create a lifetime of memories, laughter, and
              togetherness....."
            </p> */}
    </>
       
    )
}

export default Home


// <div className="flex justify-center items-center min-h-screen bg-gray-100">
//   <fieldset className="relative w-64 h-40 p-4 border-2 border-gray-400 rounded-lg bg-white shadow-lg">
    
//     {/* Keep original placement of first div */}
//     <legend className="px-2 text-left font-bold text-xl leading-tight">
//       <div className="bg-black text-white border h-10 w-24 flex items-center justify-center rounded-md shadow-md mb-2">
//         Hello World
//       </div> 
//       <p className="text-xl font-bold text-gray-700">
//         craft ever <br /> detail of ur we
//       </p>
//     </legend>

//     {/* Hidden Borders to Match Design */}
//     <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-white"></div>
//     <div className="absolute left-0 top-0 h-1/2 w-[2px] bg-white"></div>

//     {/* Bottom Right Content */}
//     <div className="absolute right-4 bottom-4 text-right">
//       <p className="font-bold text-lg text-gray-800 mb-2">plan my</p>
//       <button className="bg-black text-white font-bold py-2 px-4 rounded-full text-sm shadow-md hover:bg-gray-800 transition">
//         WEDDING
//       </button>
//     </div>
//   </fieldset>
// </div>


// import React from "react";
// import Flower from '../../assets/flowerBow.jpg'

// const Venue = ()=>{

//     return(



// <>
//   <div className="grid gap-6 p-6">
    
//     {/* 🔹 First Row - 2 Columns */}
//     <div className="grid grid-cols-2 gap-6">
      
//       {/* Left Content Box with Rounded Right Edge */}
//    <div  className="w-[850px] border"  style={{ backgroundImage: `url(${Flower})`  }}>

//    <div 
//         className="border h-[160px] flex flex-col items-center justify-center text-center p-4 rounded-r-full bg-white shadow-md w-[600px]"
       
//       >
//         <h2 className="text-3xl">Wedding venues</h2>
//         <p>Photos, reviews, and so much more... get in touch from here!</p>
//         <p className="text-red-500 text-2xl">Explore venues</p>
//       </div>



//    </div>

//       {/* Right Column - Separate Box */}
//       <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
//         <h2 className="text-3xl">Vendors</h2>
//         <p>Find the top-rated wedding vendors near you in every category.</p>
//         <p className="text-red-500 text-2xl">Start your search</p>
//       </div>
    
//     </div>

//     {/* 🔹 Second Row - 3 Columns */}
//     <div className="grid grid-cols-3 gap-6">
//       <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
//         <h2 className="text-3xl">Infinite inspiration</h2>
//         <p>All the freshest wedding inspiration, trends, and ideas in one place.</p>
//         <p className="text-red-500 text-2xl">Get inspired here</p>
//       </div>

//       <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
//         <h2 className="text-3xl">Planning tools</h2>
//         <p>Custom planning tools to manage your checklist, budget, guests, and vendors.</p>
//         <p className="text-red-500 text-2xl">Discover our tools</p>
//       </div>

//       <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
//         <h2 className="text-3xl">Vendor Directory</h2>
//         <p>Find and connect with the best vendors for your big day.</p>
//         <p className="text-red-500 text-2xl">Explore vendors</p>
//       </div>
//     </div>
  
//   </div>
// </>

// )
// }


// export default Venue








//duumy

import React from "react";
import Flower from '../../assets/flowerBow.jpg';

const Venue = () => {
  return (
    <>
      <div className="grid gap-6 p-6">
        
        {/* 🔹 First Row - 2 Columns (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Content Box with Background Image */}
       
          <div 
            className="border w-full max-w-[850px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${Flower})` }}
          >
          
            <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4 rounded-r-full bg-white shadow-md w-full md:w-[600px]">
              <h2 className="text-xl md:text-3xl">Wedding Venues</h2>
              <p className="text-sm md:text-base">Photos, reviews, and so much more... get in touch from here!</p>
              <p className="text-red-500 text-lg md:text-2xl">Explore venues</p>
            </div>
            
            </div>
         
    

          {/* Right Column - Vendors */}
          <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-xl md:text-3xl">Vendors</h2>
            <p className="text-sm md:text-base">Find the top-rated wedding vendors near you in every category.</p>
            <p className="text-red-500 text-lg md:text-2xl">Start your search</p>
          </div>

        </div>

        {/* 🔹 Second Row - 3 Columns (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Infinite Inspiration */}
          <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-xl md:text-3xl">Infinite Inspiration</h2>
            <p className="text-sm md:text-base">All the freshest wedding inspiration, trends, and ideas in one place.</p>
            <p className="text-red-500 text-lg md:text-2xl">Get inspired here</p>
          </div>

          {/* Planning Tools */}
          <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-xl md:text-3xl">Planning Tools</h2>
            <p className="text-sm md:text-base">Custom planning tools to manage your checklist, budget, guests, and vendors.</p>
            <p className="text-red-500 text-lg md:text-2xl">Discover our tools</p>
          </div>

          {/* Vendor Directory */}
          <div className="border h-[160px] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-xl md:text-3xl">Vendor Directory</h2>
            <p className="text-sm md:text-base">Find and connect with the best vendors for your big day.</p>
            <p className="text-red-500 text-lg md:text-2xl">Explore vendors</p>
          </div>

        </div>
      
      </div>
    </>
  );
};

export default Venue;




























// // import React, { useState } from 'react';
// // import img1 from '../DestinyPlaces/Argentina.jpg';
// // import img2 from '../DestinyPlaces/Brazil.jpg';
// // import img3 from '../DestinyPlaces/Columbia.jpg';
// // import img4 from '../DestinyPlaces/France.jpg';
// // import img5 from '../DestinyPlaces/India.jpg';

// // const images = [img1, img2, img3, img4, img5];

// // const ImageSlider = function () {
// //   const [index, setIndex] = useState(0);

// //   const handleNext = () => {
// //     if (index < images.length - 3) {
// //       setIndex(prev => prev + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (index > 0) {
// //       setIndex(prev => prev - 1);
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center ">
// //       <div className="flex items-center space-x-4 bg-white p-4 shadow-lg rounded-lg w-[400px]">
// //         <button onClick={handlePrev} disabled={index === 0} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50">
// //           ⬅
// //         </button>
// //         <div className="overflow-hidden w-[300px] border rounded-lg">
// //           <div
// //             className="flex flex-nowrap space-x-4 transition-transform duration-500"
// //             style={{ transform: `translateX(-${index * 110}px)` }}
// //           >
// //             {images.map((img, i) => (
// //               <img key={i} src={img} alt="" className="w-[100px] h-[100px] rounded-lg border border-gray-300" />
// //             ))}
// //           </div>
// //         </div>
// //         <button onClick={handleNext} disabled={index >= images.length - 3} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50">
// //           ➡
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageSlider;



// // import React, { useState } from 'react';
// // import img1 from '../DestinyPlaces/Argentina.jpg';
// // import img2 from '../DestinyPlaces/Brazil.jpg';
// // import img3 from '../DestinyPlaces/Columbia.jpg';
// // import img4 from '../DestinyPlaces/France.jpg';
// // import img5 from '../DestinyPlaces/India.jpg';


// // const images = [img1, img2, img3, img4, img5];




// // const ImageSlider = function () {
// //   const [index, setIndex] = useState(0);

// //   const handleNext = () => {
// //     if (index < images.length - 3) {
// //       setIndex(prev => prev + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (index > 0) {
// //       setIndex(prev => prev - 1);
// //     }
// //   };

// //   return (
 
// //     <div className="container ml-6 grid grid-cols-1 md:grid-cols-2 space-y-50 relative flex justify-center space-x-5 py-24   ">
// //       <div className="flex items-center space-x-4 bg-white p-4  rounded-lg w-[1600px] border-none ">
// //         <button onClick={handlePrev} disabled={index === 0} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50 ">
// //           ⬅
// //         </button>
// //         <div className="overflow-hidden w-[1500px] border rounded-lg border-none">
// //           <div
// //             className="flex flex-nowrap space-x-4 transition-transform duration-500 "
// //             style={{ transform: `translateX(-${index * 200}px)` }}
// //           >
// //             {images.map((img, i) => ( 
// //               <img key={i} src={img} alt="" className="w-[500px] h-[400px] rounded-lg border border-gray-300 border-none" />
// //             ))}
// //           </div>
// //         </div>
// //         <button onClick={handleNext} disabled={index >= images.length - 3} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50 ">
// //           ➡
// //         </button>
  
// //       </div>





// //     </div>

    
// //   );
// // };

// // export default ImageSlider;



















// // sub main dummy

// import React, { useState } from 'react';
// import img1 from '../DestinyPlaces/Argentina.jpg';
// import img2 from '../DestinyPlaces/Brazil.jpg';
// import img3 from '../DestinyPlaces/Columbia.jpg';
// import img4 from '../DestinyPlaces/France.jpg';
// import img5 from '../DestinyPlaces/India.jpg';


// const images = [img1, img2, img3, img4, img5];

// const ImageSlider = function () {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     if (index < images.length - 3) {
//       setIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (index > 0) {
//       setIndex((prev) => prev - 1);
//     }
//   };

//   return (

//    <>

//     <div className="flex justify-center py-10 ">
  
//       <div className="flex items-center space-x-4 bg-#E9E6DD p-4 rounded-lg shadow-lg w-full max-w-[1600px] border-none">
//         <button
//           onClick={handlePrev}
//           disabled={index === 0}
//           className="p-2 sm:p-4 lg:p-6 xl:p-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50"
//         >
//           ⬅
//         </button>
//         <div className="overflow-hidden w-full border rounded-lg border-none">
//           <div
//             className="flex flex-nowrap space-x-4 transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 220}px)` }}
//           >
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt=""
//                 className="w-[100px] sm:w-[200px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[80px] sm:h-[150px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] rounded-lg border border-gray-300 border-none"
//               />
//             ))}
//           </div>
//         </div>
//         <button
//           onClick={handleNext}
//           disabled={index >= images.length - 3}
//           className="p-2 sm:p-4 lg:p-6 xl:p-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition disabled:opacity-50"
//         >
//           ➡
//         </button>

//       </div>
//     </div>

  
//     </>
//   );
// };

// export default ImageSlider;

import { Link } from 'react-router-dom';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../DestinyPlaces/Argentina.jpg';
import img2 from '../DestinyPlaces/Brazil.jpg';
import img3 from '../DestinyPlaces/Columbia.jpg';
import img4 from '../DestinyPlaces/France.jpg';
import img5 from '../DestinyPlaces/India.jpg';
import img6 from '../DestinyPlaces/Italy.jpg';
import img7 from '../DestinyPlaces/Japan.jpg';
import img8 from '../DestinyPlaces/Maldives.jpg';
import img9 from '../DestinyPlaces/Maldives.jpg';

import ai from '../../pages/Venuefile/ai.jpeg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -330, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 330, behavior: 'smooth' });
  };

  return (
<>

<section className="w-full bg-[#E9E6DD] py-12">
      <div className="w-full px-4 md:px-8 xl:px-24">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-black">
            Our <span className="text-pink-500">Top Wedding Destinations</span>
          </h2>
          <p className="text-gray-600 text-lg font-corinthia max-w-3xl mx-auto mt-4">
            Fall in love with these breathtaking places perfect for your special day.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md hover:bg-pink-100 text-pink-500 p-2 rounded-full transition duration-200"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md hover:bg-pink-100 text-pink-500 p-2 rounded-full transition duration-200"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Slider */}
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth scroll-px-6 no-scrollbar px-6 transition-all duration-500 ease-in-out"
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className="flex-shrink-0 w-[330px] h-[180px] sm:h-[220px] md:h-[290px] object-cover rounded-xl shadow border border-gray-100 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>



<section>
<div
  className=" mt-12 relative bg-cover bg-center h-[350px] md:h-[400px] flex flex-col justify-center items-center text-white"
  style={{ backgroundImage: `url(${ai})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-pink-200/5 backdrop-blur-sm z-0"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-4">
    <p className="text-3xl md:text-5xl font-playfair font-bold mb-6 drop-shadow-lg">
      Make Something <span className="text-pink-400">Special</span> With Us
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 text-lg font-semibold">

     <Link to="/Contact" >
     <button  className="bg-rose-700 text-white px-10 py-2  hover:bg-black transition">
        Contact Us
      </button>
     
     
     </Link>
     
  
     <Link to="/about">
     <button className="bg-yellow-600 text-white px-10 py-2  hover:bg-black transition">
        Our Services
      </button>
 
     </Link>
         </div>
  </div>
</div>

</section>

</>

  );
};

export default ImageSlider;

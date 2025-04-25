

//  import React from "react";
//  import { SlideLeft } from "../../Utility/animation";
// import Heroimg from '../../assets/maint.png'



// const Hero=()=>{
//     return <>
    
//     <section>
//     <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative    ">
//         {/* brand info */}
//         <div className="flex flex-col justify-center py-14 md:py-0">
//             <div className="text-center md:text-left space-y-6">
//             <motion.h1
//             variants={SlideLeft(0.6)}
//             initial="hidden"
//             animate="visible"
//              className="text-6xl font-bold lg:text-5xl leading-relaxed xl:leading-normal font-playfair">
//                 Gym Give you <br /> the Perfect  
//                 <span className="text-primary">Health</span>
//             </motion.h1>
//             <p className="text-gray-600 xl:max-w-[500px]">it is a established fact that reader will be readable
//                 content of the page when you are the best product
//             </p>
//             </div>
//         </div >
      
// <div className="flex justify-center items-center">
//   {/* hero image */}
//   <img src={Heroimg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow" />
// </div>
         
//     </div>
//     </section>
//     </>
// }

// export default Hero












//hero dummy



// import React, { useEffect, useRef } from "react";
// import { SlideUp } from "../../Utility/animation"; // Import the function
// import Heroimg from "../../assets/maint.png";
// import { SlideLeft } from "../../Utility/animation";
// import { SlideRight } from "../../Utility/animation";
// //import { assets } from "../../pages/Venuefile/assets.js";


// const Hero = () => {
//   const headingRef = useRef(null);
//   const imageRef = useRef(null);
//   const capRef = useRef(null);

//   useEffect(() => {
//     SlideUp(headingRef.current, 0.5); // Animate heading
//     SlideLeft(imageRef.current, 0.7); // Animate image
//     SlideRight(capRef.current, 0.60);
//   }, []);

//   return (
//     <section>
//       <div className="container grid grid-cols-1 md:grid-cols-2 space-y-50 min-h-[550px] relative flex space-x-5 py-24">
//         {/* Brand Info */}
//         <div className="flex flex-col justify-center py-14 md:py-0   bg-orange-0 text-black-500 p-6 ">
//           <div className="text-center md:text-left space-y-9  ">
//             <h1
//               ref={headingRef}
//               className="text-6xl font-bold lg:text-5xl leading-relaxed xl:leading-normal font-playfair "
//             >   

// "Crafting perfect love stories, one dream <span className="text-pink-500">  Wedding</span>  at a time."
//             </h1>
//             <p className="text-gray-600 xl:max-w-[500px]" ref={capRef}>
//             "A beautiful journey of love and commitment, where two hearts unite to create a lifetime of memories, laughter, and togetherness....."
//             </p>
//           </div>
//         </div>

  

//         {/* Hero Image */}
//         <div className="flex justify-center items-center">
//           <img
//             ref={imageRef}
//             src={Heroimg}
//             alt="Hero Image"
//             className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
//           />
//         </div>
//       </div>
      
    
//     </section>



//   );
// };

// export default Hero;








import React, { useEffect, useRef } from "react";
import { SlideUp, SlideLeft, SlideRight } from "../../Utility/animation"; // Import animations
import Heroimg from "../../assets/maint.png";

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const capRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SlideUp(headingRef.current, 0.5); // Animate heading
            SlideLeft(imageRef.current, 0.7); // Animate image
            SlideRight(capRef.current, 0.6);
            observer.disconnect(); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.4 } // Trigger animation when 40% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <section ref={sectionRef} className="mb-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-50 min-h-[550px] relative space-x-5 py-6">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 text-black-500 text-center ">
          <div className="text-center md:text-left space-y-9 ">
            <h1
              ref={headingRef}
              className=" font-bold  leading-relaxed xl:leading-normal font-playfair opacity-0 text-wrap  text-center text-lg md:text-xl lg:text-2xl"
 
            >
              "Crafting perfect love stories, one dream{" "} <br />
              <span className="text-pink-500">Wedding</span> at a time."
            </h1>
            <div className=" flex justify-center text-center">
            <p
              className="text-gray-600 xl:max-w-[500px] text-1xl opacity-0  font-bold font-corinthia text-center  text-lg md:text-xl lg:text-2xl "
              ref={capRef}
            >
              "A beautiful journey of love and commitment, where two hearts
              unite to create a lifetime of memories, laughter, and
              togetherness....."
            </p>
            </div>
            
          </div>
          
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <img
            ref={imageRef}
            src={Heroimg}
            alt="Hero"
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow opacity-0"
          />
        </div>
      </div>

     

    </section>
    
  );
};

export default Hero;



//['Dancing_Script',cursive]
//placifo
//cursive
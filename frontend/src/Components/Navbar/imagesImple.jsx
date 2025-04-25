

// import React from "react";

// import img1 from '../../../../celebrations/coverwall1.jpg'
// import img2 from '../../../../celebrations/coverwall2.jpg'
// //import img3 from '../../../../celebrations/coverwall3.jpg'
// import img4 from '../../../../celebrations/coverr.jpg'


// import { useState, useEffect } from "react";

// const NavbarWithBackground = () => {
//   const images = [
//     // "https://source.unsplash.com/random/1600x900?nature",
//     // "https://source.unsplash.com/random/1600x900?water",
//     // "https://source.unsplash.com/random/1600x900?mountain",
//     // "https://source.unsplash.com/random/1600x900?city",

//     img1,
//     img2,
  
//     img4
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000); // Change image every 10 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div
//       className="relative h-screen"
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
  
//         transition: "background-image 1s ",
//       }}
//     >
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
//         <h1 className="text-xl">My Navbar</h1>
//       </nav>
//     </div>
//   );
// };

// export default NavbarWithBackground;



// import React from "react"
// import Navbar from "./Components/Navbar/Nav"
// import SubNavbar from "./Components/Navbar/SubpageNav"

// import ImageSlider from "./Components/Hero/Slider"

// import Venue from "./Components/Hero/Venue"
// import Footer from "./Components/Navbar/Footer"
// //routes
// import { Routes, Route,useLocation } from "react-router-dom";

// //import { Route,Routes } from "react-router-dom"
//  import  Home  from "./pages/Home"
// // import Hero from "./Components/Hero/Hero"
// // import Equipment from "./Components/Equipments/Equipments"
// // import Citiesmenu from "./Components/Hero/citiesMenu"

// import  Contact  from "./pages/Contact"
// import VenueMenubar from "./pages/VenueMenubar"
// import  TopWedding from './pages/More'
// import About from "./pages/About"
// import Login from "./pages/login"

// import Mybooking from "./pages/Mybooking"
// import BookingVenueHall from "./pages/bookingVenuehall"
// import Myprofile from "./pages/My-profile"

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// //import NavbarWithBackground from "./Components/Navbar/imagesImple"



// function App() {
//   const location = useLocation();

//   return (
//     // <div className="overflow-x-hidden">
//     <>
//     <ToastContainer/>
//           {/* Conditional Navbar Rendering */}
//           {location.pathname === "/" ? <Navbar /> : <SubNavbar />}

    
      
//       {/* Route Definitions */}
//       <Routes>
//         {/* Home Route with Components */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               {/* <NavbarWithBackground/> */}
              
              
// <Home />
//               {/* <Home />
//               <Hero />
//               <Equipment/>
//               <Citiesmenu /> */}
          
//             </>
//           }
//         />

//         {/* Other Routes */}
        
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/VenueMenu" element={<VenueMenubar />} />
//         <Route path="/VenueMenu/:city" element={<VenueMenubar />} />
//         <Route path="/Weddingplanners" element={<TopWedding />} />
//         <Route path="/Weddingplanners/:city" element={<TopWedding />} />
      

//         {/* <Route path="/my-bookings" element={<Mybooking />} /> */}
//         <Route path="/venue-booking-hall/:VenId" element={<BookingVenueHall />} />
//         {/* <Route path="/my-profile" element={<Myprofile />} /> */}
//         <Route path="/login" element={<Login />} />
   
//       </Routes>
//       <Footer/>
//       </>
//     // </div>
    
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Nav";
import SubNavbar from "./Components/Navbar/SubpageNav";

import ImageSlider from "./Components/Hero/Slider";

import Venue from "./Components/Hero/Venue";
import Footer from "./Components/Navbar/Footer";

// Routes
import { Routes, Route, useLocation } from "react-router-dom";

// Importing Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VenueMenubar from "./pages/VenueMenubar";
import TopWedding from './pages/More';
import About from "./pages/About";
import Login from "./pages/login";
import Mybooking from "./pages/Mybooking";
import BookingVenueHall from "./pages/bookingVenuehall";
import Myprofile from "./pages/My-profile";

// Toast notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mybookingpage from "./pages/Mybooking";
import Favourites from "./pages/Favourites";

function App() {
  const location = useLocation();

  // Managing token state
  const [token, setToken] = useState(localStorage.getItem("token") ? true : false);

  useEffect(() => {
    // Update token state on page load
    const storedToken = localStorage.getItem('token');
    setToken(storedToken ? true : false);
  }, []);

  return (
    <>
      <ToastContainer />

    

     {/* Conditional Navbar Rendering */}
       {location.pathname === "/" || location.pathname === "/home" ? (
        <Navbar token={token} setToken={setToken} />
      ) : (
        <SubNavbar token={token} setToken={setToken} />
      )}


      {/* Route Definitions */}
      <Routes>
        {/* Home Route with Components */}
        <Route
          path="/"
          element={<Home />}
        />

    
  


        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/VenueMenu" element={<VenueMenubar />} />
        <Route path="/VenueMenu/:city" element={<VenueMenubar />} />
        <Route path="/Weddingplanners" element={<TopWedding />} />
        <Route path="/Weddingplanners/:city" element={<TopWedding />} />
        <Route path="/venue-booking-hall/:VenId" element={<BookingVenueHall />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-bookings" element={<Mybookingpage />} />
        <Route path="/my-favourites" element={<Favourites />} />
        <Route path="/my-profile" element={<Myprofile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;




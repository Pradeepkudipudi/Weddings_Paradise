// import React, { useContext, useState, useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import {NavbarMenu} from '../../Mockdata/data'
// import { NavLink, useNavigate } from "react-router-dom";
// import ResponsiveMenu from "../ResponsiveMenu";
// import { AppContext } from "../../Context/appcontext";
// import dropdown from "../../assets/dropdown.png";   

// // Image imports
// import img1 from "../../../../celebrations/coverwall1.jpg";
// import img2 from "../../../../celebrations/coverwall2.jpg";
// import img3 from "../../../../celebrations/coverr.jpg";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const { token, setToken, userData } = useContext(AppContext); // Get userData from context
//   const logout = () => {
//     setToken(false);
//     localStorage.removeItem('token');
//   };
  
//   const [navbarBg, setNavbarBg] = useState("bg-transparent text-white"); // Default transparent navbar
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [img1, img2, img3];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setNavbarBg("bg-third shadow-lg  text-black");
//       } else {
//         setNavbarBg("bg-transparent text-white");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div
//         className="relative w-full h-screen bg-cover bg-center "
//         style={{
//           backgroundImage: `url(${images[currentImageIndex]})`,
//           opacity: "3",
//         }}
//       >
//         <nav
//           className={`fixed top-0 left-0 w-full z-50   transition-all duration-300  ${navbarBg} p-4`}
//         >
//           <div className="flex justify-between items-center  ">
//             <div
//               onClick={() => navigate("/login")}
//               className="flex items-center gap-4 font-bold uppercase cursor-pointer"
//             >
//               <p>Weddings</p>
//               <p className="text-rose-700">Paradise</p>
//             </div>

//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6">
//                 {NavbarMenu.map((item) => (
//                   <NavLink
//                     key={item.id}
//                     to={item.link}
//                     className="hover:text-red-900 transition-colors duration-200"
//                   >
//                     <li className="font-semibold">{item.title}</li>
//                   </NavLink>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
//                 <CiSearch />
//               </button>
//               <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
//                 <FaShoppingCart />
//               </button>
//               <div className="flex items-center gap-4">
//                 {token ? (
//                   <div className="flex items-center gap-2 cursor-pointer group relative">
//                     {/* Use image from userData context */}
//                     <img
//                       className="w-14 h-14 rounded-full"
//                       src={userData?.image || "defaultImage.jpg"} // Use the user image, fallback to a default image if not available
//                       alt="Profile"
//                     />
//                     <img className="w-3.5" src={dropdown} alt="Dropdown" />
//                     <div className="absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//                       <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                         <p
//                           onClick={() => navigate("/my-profile")}
//                           className="hover:text-black cursor-pointer"
//                         >
//                           My Profile
//                         </p>
//                         <p
//                           onClick={() => navigate("/my-bookings")}
//                           className="hover:text-black cursor-pointer"
//                         >
//                           My Bookings
//                         </p>
                      
//                         <p   onClick={() => navigate("/my-favourites")}   className="hover:text-black cursor-pointer">My Favourites</p>
//                         <p
//                           onClick={logout}
//                           className="hover:text-black cursor-pointer"
//                         >
//                           Logout
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="hidden md:block text-primary hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2"
//                   >
//                     Create account
//                   </button>
//                 )}
//               </div>
//             </div>

//             <button className="md:hidden" onClick={() => setOpen(true)}>
//               <IoMdMenu className="text-4xl" />
//             </button>
//           </div>
//         </nav>

//         <ResponsiveMenu open={open} setOpen={setOpen} />
//       </div>
//     </>
//   );
// };

// export default Navbar;



//dummy

import React, { useContext, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavbarMenu } from "../../Mockdata/data";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ResponsiveMenu from "../ResponsiveMenu";
import { AppContext } from "../../Context/appcontext";
import dropdown from "../../assets/dropdown.png";   

// Image imports
import img1 from "../../../celebrations/coverwall1.jpg";
import img2 from "../../../celebrations/coverwall2.jpg";
import img3 from "../../../celebrations/coverr.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
  };

  const [navbarBg, setNavbarBg] = useState("bg-transparent text-white"); // Default transparent navbar
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3];

  // Get the current route
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white shadow-lg text-black");
      } else {
        setNavbarBg("bg-transparent text-white");
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      // For non-home pages, always set navbar as fixed with no background image
      setNavbarBg("bg-black text-white");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <div
        className={`relative w-full h-screen bg-cover bg-center ${isHomePage ? "bg-opacity-3" : ""}`}
        style={{
          backgroundImage: isHomePage ? `url(${images[currentImageIndex]})` : "none",
        }}
      >
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg} p-4`}
        >
          <div className="flex justify-between items-center">
            <div
              onClick={() => navigate("/login")}
              className="flex items-center gap-4 font-bold uppercase cursor-pointer"
            >
              <p>Weddings</p>
              <p className="text-rose-700">Paradise</p>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    className="hover: text-black transition-colors duration-200"
                  >
                    <li className="font-semibold  text-black hover:text-rose-900  ">{item.title}</li>
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
                <CiSearch />
              </button>
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
                <FaShoppingCart />
              </button>
              <div className="flex items-center gap-4">
                {token ? (
                  <div className="flex items-center gap-2 cursor-pointer group relative">
                    <img
                      className="w-14 h-14 rounded-full"
                      src={userData?.image || "defaultImage.jpg"}
                      alt="Profile"
                    />
                    <img className="w-3.5" src={dropdown} alt="Dropdown" />
                    <div className="absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                      <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p
                          onClick={() => navigate("/my-profile")}
                          className="hover:text-black cursor-pointer"
                        >
                          My Profile
                        </p>
                        <p
                          onClick={() => navigate("/my-bookings")}
                          className="hover:text-black cursor-pointer"
                        >
                          My Bookings
                        </p>
                        <p onClick={() => navigate("/my-favourites")} className="hover:text-black cursor-pointer">
                          My Favourites
                        </p>
                        <p onClick={logout} className="hover:text-black cursor-pointer">
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="hidden md:block text-primary hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2"
                  >
                    Create account
                  </button>
                )}
              </div>
            </div>

            <button className="md:hidden" onClick={() => setOpen(true)}>
              <IoMdMenu className="text-4xl" />
            </button>
          </div>
        </nav>

        <ResponsiveMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Navbar;

//first

// import React, { useState, useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { NavbarMenu } from "../../Mockdata/data";
// import { NavLink, useNavigate } from "react-router-dom";
// import ResponsiveMenu from "../ResponsiveMenu";
// import Profilepic from "../../assets/mahesh.jpg";
// import dropdown from "../../assets/dropdown.png";

// const SubNavbar = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const [token, setToken] = useState(false); // Initialize with false (not logged in)

//   // Checking the token when the component mounts
//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(true); // User is logged in
//     } else {
//       setToken(false); // User is logged out
//     }
//   }, [navigate]); // Added navigate to ensure the effect runs on navigation changes

//   const logout = () => {
//     localStorage.removeItem('token'); // Remove the token from localStorage
//     setToken(false); // Update the state to logged out
//     navigate('/'); // Redirect to the homepage or desired page
//   };

//   return (
//     <div>
//       <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-lg p-4`}>
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div onClick={() => navigate("/")} className="flex items-center gap-4 font-bold uppercase cursor-pointer">
//             <p>Stardust</p>
//             <p className="text-secondary">Paradise</p>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <ul className="flex items-center gap-6">
//               {NavbarMenu.map((item) => (
//                 <NavLink
//                   key={item.id}
//                   to={item.link}
//                   className="hover:text-primary transition-colors duration-200"
//                 >
//                   <li className="font-semibold">{item.title}</li>
//                 </NavLink>
//               ))}
//             </ul>
//           </div>

//           {/* Icons Section */}
//           <div className="flex items-center gap-4">
//             <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
//               <CiSearch />
//             </button>
//             <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
//               <FaShoppingCart />
//             </button>

//             {/* Profile or Create Account */}
//             <div className="flex items-center gap-4">
//               {token ? (
//                 <div className="flex items-center gap-2 cursor-pointer group relative">
//                   <img className="w-14 h-14 rounded-full" src={Profilepic} alt="Profile" />
//                   <img className="w-3.5" src={dropdown} alt="Dropdown" />
//                   <div className="absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//                     <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                       <p
//                         onClick={() => navigate("/my-profile")}
//                         className="hover:text-black cursor-pointer"
//                       >
//                         My Profile
//                       </p>
//                       <p
//                         onClick={() => navigate("/my-bookings")}
//                         className="hover:text-black cursor-pointer"
//                       >
//                         My Bookings
//                       </p>
//                       <p
//                         onClick={logout}
//                         className="hover:text-black cursor-pointer"
//                       >
//                         Logout
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="hidden md:block text-primary hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 transition-all duration-200"
//                 >
//                   Create Account
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setOpen(true)}>
//             <IoMdMenu className="text-4xl" />
//           </button>
//         </div>

//         {/* Mobile Sidebar */}
//         <ResponsiveMenu open={open} setOpen={setOpen} />
//       </nav>
//     </div>
//   );
// };

// export default SubNavbar;



// dumy

import React, { useState, useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavbarMenu } from "../../Mockdata/data";
import { NavLink, useNavigate } from "react-router-dom";
import ResponsiveMenu from "../ResponsiveMenu";
import { AppContext } from "../../Context/appcontext"; 
import dropdown from "../../assets/dropdown.png";

const SubNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // for profile dropdown
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext); 

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md p-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center gap-2 font-bold uppercase cursor-pointer">
            <p>Stardust</p>
            <p className="text-rose-700">Paradise</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {NavbarMenu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="font-semibold text-black hover:text-rose-700 transition-colors duration-200"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-rose-100 hover:text-rose-700 rounded-full p-2 transition-all">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-rose-100 hover:text-rose-700 rounded-full p-2 transition-all">
              <FaShoppingCart />
            </button>

            {/* Profile Section */}
            {token ? (
              <div 
                className="relative flex items-center gap-2 cursor-pointer" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setIsDropdownOpen(!isDropdownOpen); 
                }}
              >
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={userData?.image || "/defaultProfile.jpg"}
                  alt="Profile"
                />
                <img className="w-3.5" src={dropdown} alt="Dropdown" />

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full right-0 mt-2 bg-white rounded shadow-md flex flex-col gap-2 p-4 min-w-48 z-50"
                  >
                    <p 
                      onClick={() => { navigate("/my-profile"); setIsDropdownOpen(false); }} 
                      className="hover:text-rose-700 cursor-pointer"
                    >
                      My Profile
                    </p>
                    <p 
                      onClick={() => { navigate("/my-bookings"); setIsDropdownOpen(false); }} 
                      className="hover:text-rose-700 cursor-pointer"
                    >
                      My Bookings
                    </p>
                    <p 
                      onClick={() => { navigate("/my-favourites"); setIsDropdownOpen(false); }} 
                      className="hover:text-rose-700 cursor-pointer"
                    >
                      My Favourites
                    </p>
                    <p 
                      onClick={() => { logout(); setIsDropdownOpen(false); }} 
                      className="hover:text-rose-700 cursor-pointer"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden md:block text-rose-700 font-semibold border-2 border-rose-700 px-6 py-2 rounded-md hover:bg-rose-700 hover:text-white transition-all"
              >
                Create Account
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <IoMdMenu className="text-3xl text-black" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </nav>
    </div>
  );
};

export default SubNavbar;

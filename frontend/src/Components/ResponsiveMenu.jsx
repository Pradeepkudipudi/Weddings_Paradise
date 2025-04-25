

// import React from "react";
// import { AnimatePresence,motion} from "framer-motion";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// const ResponsiveMenu = ({ open, setOpen }) => {
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <AnimatePresence mode="wait">
//       {open && (
//         <motion
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           className="absolute top-20 left-0 w-full h-screen bg-black/60 z-20"
//         >
//           <div
//             ref={menuRef} // Reference the menu div
//             className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl"
//           >
//             <ul className="flex flex-col justify-center items-center gap-10">
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//               <li>Service</li>
//             </ul>
//           </div>
//         </motion>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;






import React, { useEffect, useRef } from "react";
import { animate } from "motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Animate menu open/close
  useEffect(() => {
    if (menuContainerRef.current) {
      if (open) {
        animate(menuContainerRef.current, { opacity: 1, y: 0 }, { duration: 0.5 });
      } else {
        animate(menuContainerRef.current, { opacity: 0, y: -50 }, { duration: 0.3 });
      }
    }
  }, [open]);

  return (
    <div
      ref={menuContainerRef}
      className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-center transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={menuRef}
        className="bg-white text-black w-4/5 max-w-md rounded-lg shadow-lg p-6 text-center space-y-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
      >
        <ul className="space-y-4 text-lg font-semibold">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          <li className="hover:text-blue-500 cursor-pointer">Service</li>
        </ul>

{/* 
   <div className="flex items-center gap-4 ">
          {token?
        <div className="flex items-center gap-2 cursor-pointer group relative">
          <img className="w-14 h-14 rounded-full" src={Profilepic} alt="" />
          <img className="w-3.5" src={dropdown} alt="" />
          <div className="absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
           <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 "> 
           <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My profile</p>
            <p onClick={()=>navigate('/my-bookings')} className="hover:text-black cursor-pointer">My Bookings</p>
            <p onClick={()=>{setToken(false)}} className="hover:text-black cursor-pointer"> Logout</p>
           </div>
          </div>
        </div >
        : <button onClick={()=>navigate('/login')} className="hidden md:block text-primary hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2" >
        Create account
       onClick={()=>navigate('./login')} 
      </button>  
        }
        </div>
        </div> */}















        <button
          onClick={() => setOpen(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;






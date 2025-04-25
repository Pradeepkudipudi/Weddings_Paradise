

// import React from "react";
// import { motion } from "framer-motion";
// //import { motion } from "framer-motion";
// // import React from "react";

// import { GrYoga } from "react-icons/gr";
// import { FaWalking } from "react-icons/fa";
// import { MdHiking } from "react-icons/md";
// import { FaRankingStar } from "react-icons/fa6";

// const EquipmentData = [
//   {
//     id: 1,
//     title: "Fitness Equipments",
//     desc: "It is a long established one that can be readable",
//     link: "/",
//     icon: <GrYoga />,
//     delay: 0.3,
//   },
//   {
//     id: 2,
//     title: "Walking Gear",
//     desc: "It is a long established one that can be readable",
//     link: "/",
//     icon: <FaWalking />,
//     delay: 0.6,
//   },
//   {
//     id: 3,
//     title: "Hiking Essentials",
//     desc: "It is a long established one that can be readable",
//     link: "/",
//     icon: <MdHiking />,
//     delay: 0.9,
//   },
//   {
//     id: 4,
//     title: "Ranking & Stars",
//     desc: "It is a long established one that can be readable",
//     link: "/",
//     icon: <FaRankingStar />,
//     delay: 1.2, // Changed from 0.12 to 1.2 for a smoother delay
//   },
// ];

// const Equipment = () => {
//   return (
//     <div>
//       <div className="container py-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
//           {/* Title Section */}
//           <div className="space-y-4 p-6">
//             <h1 className="text-3xl md:text-4xl font-bold">What We Offer You</h1>
//             <p className="text-gray-500">Some description here...</p>
//           </div>

//           {/* Animated Cards */}
//           {EquipmentData.map((item) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: item.delay }}
//               className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
//             >
//               <div className="text-4xl">{item.icon}</div>
//               <p className="text-2xl font-semibold">{item.title}</p>
//               <p className="text-gray-500">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Equipment;





//dummy 6


import React, { useEffect, useRef } from "react";
import { animate } from "motion";
import { FaCameraRetro, FaMusic, FaUtensils, FaBirthdayCake } from "react-icons/fa";


const EquipmentData = [
  {
    id: 1,
    title: "Venue Decoration",
    desc: "Elegant floral designs and decor that bring your dream wedding to life.",
    link: "/services/decoration",
    icon: <FaBirthdayCake />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Live Music & DJ",
    desc: "Set the mood with live performances or a DJ that keeps the party going.",
    link: "/services/music",
    icon: <FaMusic />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Catering Service",
    desc: "From traditional to gourmet – we serve food that delights every guest.",
    link: "/services/catering",
    icon: <FaUtensils />,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Photography & Videography",
    desc: "Capture every magical moment with professional photo and video coverage.",
    link: "/services/photography",
    icon: <FaCameraRetro />,
    delay: 1.2,
  },
];

const Equipment = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      animate(
        card,
        { opacity: 1, transform: "translateY(0)" },
        { duration: 6, delay: EquipmentData[index].delay }
      );
    });
  }, []);

  return (
//     <div>
//       <div className="container py-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
//           {/* Title Section */}
//           <div className="space-y-4 p-6">
//             <h1 className="text-3xl md:text-4xl font-bold">What We Offer You</h1>
//             <p className="text-gray-500">Some description here...</p>
//           </div>

//           {/* Animated Cards */}
//           {EquipmentData.map((item, index) => (
//             <div
//               key={item.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
//               style={{ opacity: 0, transform: "translateY(50px)" }}
//             >
//               <div className="text-4xl">{item.icon}</div>
//               <p className="text-2xl font-semibold">{item.title}</p>
//               <p className="text-gray-500">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

<div>
<div className="container py-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
    {/* Title Section */}
    <div className="space-y-4 p-6">
      <h1 className="text-3xl md:text-4xl font-bold">What We Offer For Your Wedding</h1>
      <p className="text-gray-500">Make your big day unforgettable with our elegant wedding services.</p>
    </div>

    {/* Animated Cards */}
    {EquipmentData.map((item, index) => (
      <div
        key={item.id}
        ref={(el) => (cardRefs.current[index] = el)}
        className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <div className="text-4xl">{item.icon}</div>
        <p className="text-2xl font-semibold">{item.title}</p>
        <p className="text-gray-500">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
</div>
);
};


export default Equipment;

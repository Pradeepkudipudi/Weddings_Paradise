

// import { delay } from "framer-motion";


// export const SlideUp = (delayy)=>{
//     return {
//             hidden : {
//                 opacity :0,
//                 y:100,
//             },
//             visible : {
//                 opacity:1,
//                 y:0,
//                 transition :{
//                     duration : 1,
//                     delay:delay
//                 }
//             }
//     }
// }



//  export const SlideLeft = (delayy)=>{
//     return {
//             hidden : {
//                 opacity :0,
//                 x:100,
//             },
//             visible : {
//                 opacity:1,
//                 x:0,
//                 transition :{
//                     duration : 1,
//                     delay:delay
//                 }
//             }
//     }
// }



// export const SlideRight = (delay)=>{
//     return {
//             hidden : {
//                 opacity :0,
//                 x:-100,
//             },
//             visible : {
//                 opacity:1,
//                 x:0,
//                 transition :{
//                     duration : 1,
//                     delay:delay
//                 }
//             }
//     }
// }


// export const SlideUp = (delayValue) => {
//     return {
//         hidden: {
//             opacity: 0,
//             y: 100,
//         },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 1,
//                 delay: delayValue, // Use parameter properly
//             }
//         }
//     };
// };

// export const SlideLeft = (delayValue) => {
//     return {
//         hidden: {
//             opacity: 0,
//             x: 100,
//         },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 duration: 1,
//                 delay: delayValue, // Use parameter properly
//             }
//         }
//     };
// };

// export const SlideRight = (delayValue) => {
//     return {
//         hidden: {
//             opacity: 0,
//             x: -100,
//         },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 duration: 1,
//                 delay: delayValue, // Use parameter properly
//             }
//         }
//     };
// };



















//dummy3



import { animate } from "motion";

// Slide Up Animation
export const SlideUp = (element, delay = 0) => {
  animate(
    element,
    { opacity: [0, 1], y: [100, 0] },
    { duration: 1, delay: delay }
  );
};

// Slide Left Animation
export const SlideLeft = (element, delay = 0) => {
  animate(
    element,
    { opacity: [0, 1], x: [100, 0] },
    { duration: 1, delay: delay }
  );
};

// Slide Right Animation
export const SlideRight = (element, delay = 0) => {
  animate(
    element,
    { opacity: [0, 1], x: [-100, 0] },
    { duration: 1, delay: delay }
  );
};

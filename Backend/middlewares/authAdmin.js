// // const jwt = require('jsonwebtoken')

// // //admin authentication middlewares

// // const authAdmin = async (req,res,next)=>{

// // try{

// //     const {atoken} = req.headers
// //     if(!atoken){
// //         return res.json({success:false,message:"Not Authorized Login Again"})
// //     }
// //     const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

// //     if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
// //         return res.json({success:false,message:"Not Authorized Login Again"})
// //     }



// //    next()
// // }catch(error){
// //     console.log(error)
// //     res.json({success:false,message:error.message})
  

// // }

// // }

// // module.exports = authAdmin
// // const jwt=require('jsonwebtoken')
// // require('dotenv').config()
// // const authAdmin=async(req,res,next)=>
// // {
// //   try {
// //     const {aToken}=req.headers
// //     console.log(aToken)
// //     if(!aToken)
// //     {
// //       return res.json({success:false,message:"Not Authorized Login Again"})
// //     }
// //     else
// //     {
// //       const token_decode =jwt.verify(aToken,process.env.JWT_SECRET)
// //       if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
// //       {
// //         return res.json({success:false,message:"Not Not Authorized Login Again Admin"})
// //       }
// //       next()
// //     }
// //   } catch (error) {
// //     console.log(error)
// //     res.json({success:false,message:error.message})
// //   }
// // }
// // module.exports=authAdmin
























// ////main main main and worked codeeeeeeeeeeeeeeeeeeeeeeeeeeeee
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const atoken = authHeader && authHeader.split(' ')[1]; // extract after "Bearer "

    if (!atoken) {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized Login Again Admin" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = authAdmin; 




















///latest

// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authAdmin = async (req, res, next) => {
//   try {
//     const aToken = req.headers.atoken; // ✅ FIXED

//     if (!aToken) {
//       return res.json({ success: false, message: "Not Authorized Login Again" });
//     }

//     const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);

//     if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
//       return res.json({ success: false, message: "Not Authorized Login Again Admin" });
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// module.exports = authAdmin;




















// const jwt = require('jsonwebtoken');
// require('dotenv').config();



// const authAdmin = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: "Not Authorized. Token missing." });
//     }

//     const token = authHeader.split(' ')[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.status(403).json({ success: false, message: "Not Authorized. Invalid Admin." });
//     }

//     req.admin = decoded;
//     next();
//   } catch (error) {
//     console.log("Admin Auth Error:", error);
//     return res.status(401).json({ success: false, message: "Token verification failed." });
//   }
// };

// module.exports = authAdmin;


//sagar


// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authAdmin = async (req, res, next) => {
//   try {
//     const { atoken } = req.headers;

//     if (!atoken) {
//       return res.status(401).json({ success: false, message: "Not Authorized. Token missing." });
//     }

//     // Verify token
//     const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

//     // Check if the decoded email matches the admin's email
//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.status(403).json({ success: false, message: "Not Authorized. Invalid Admin." });
//     }

//     // Optional: Attach admin info to request
//     req.admin = decoded;

//     next(); // Allow access to the next middleware/route
//   } catch (error) {
//     console.log("Admin Auth Error:", error);
//     return res.status(401).json({ success: false, message: "Token verification failed." });
//   }
// };

// module.exports = authAdmin;

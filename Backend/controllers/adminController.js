


// ///Api for adding venue

// const addVenue = async ()=>{

//     try {
//   const {name,email,password,city,capacity,facilities,about,bookingPrice,address} = req.body
  
//   const imageFile = req.file

//   console.log({name,email,password,city,capacity,facilities,about,bookingPrice,address},imageFile)

// }catch (error){

//     }
// }


// module.exports =  addVenue

// const validator = require('validator')
// const bcrypt = require('bcrypt')
// const cloudinary = require('cloudinary')
// const VenueModel = require('../models/VenueModel.js')

// const addVenue = async (req, res) => {
//     console.log("Route Reached"); // Check if route is working

//     try {
//         const {name, email, password, city, capacity, facilities, about, bookingPrice, address} = req.body;
//         const imageFile = req.file;

//         console.log({name, email, password, city, capacity, facilities, about, bookingPrice, address}, imageFile);

//         //check for all data
//         if (!imageFile || !name || !email || !password || !city || !capacity || !facilities || !about || !bookingPrice || !address) {
//             return res.status(400).json({ message: "No file uploaded" });
//         }
// // validayin email

//         if(!validator.isEmail(email)) {
//             return res.status(400).json({ message: "pls enter a valid email" });
//         }

//         //validating strong password
//         if(password.length<8){
//             return res.status(400).json({ message: "pls enter a valid strong password " });
//         }

//         //hashing password

//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password,salt)


// // upload image to cloudinary

// const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
// const imageUrl = imageUpload.secure_url


// const venueData = {
//     name,
//     email,
//     image:imageUrl,
//     password:hashedPassword,
//     city,
//     capacity,
//     facilities,
//     about,
//     bookingPrice,
//     address:JSON.parse(address),
//     date: Date.now()
//     //capacity, facilities, about, bookingPrice, address
// }

// const newVenue = new VenueModel(venueData)
// await newVenue.save()



//         res.status(201).json({ message: "Venue added successfully" });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


// module.exports = addVenue;



// res.json({success:true,message:"Venue added"})


//dummy


// const validator = require('validator');
// const bcrypt = require('bcrypt');
// const cloudinary = require('cloudinary');
// const VenueModel = require('../models/VenueModel.js');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // ========================
// // ADD VENUE CONTROLLER
// // ========================
// const addVenue = async (req, res) => {
//   console.log("Authorization Header:", req.headers.authorization);

//   try {
//     const {
//       name,
//       email,
//       password,
//       city,
//       capacity,
//       facilities,
//       about,
//       bookingPrice,
//       address,
//     } = req.body;

//     const imageFile = req.file;

//     // Check all required fields
//     if (
//       !name ||
//       !email ||
//       !password ||
//       !city ||
//       !capacity ||
//       !facilities ||
//       !about ||
//       !bookingPrice ||
//       !address ||
//       !imageFile
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required including the image file",
//       });
//     }

//     // Validate email
//     if (!validator.isEmail(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid email",
//       });
//     }

//     // Validate strong password
//     if (password.length < 8) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 8 characters long",
//       });
//     }

//     // Parse address (must be stringified JSON from frontend)
//     let parsedAddress;
//     try {
//       parsedAddress = JSON.parse(address);
//     } catch (err) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid address format. Must be valid JSON.",
//       });
//     }

//     // Upload image to Cloudinary
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//       resource_type: "image",
//     });
//     const imageUrl = imageUpload.secure_url;

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Save venue
//     const venueData = {
//       name,
//       email,
//       password: hashedPassword,
//       city,
//       capacity,
//       facilities,
//       about,
//       bookingPrice,
//       address: parsedAddress,
//       image: imageUrl,
//       date: Date.now(),
//     };

//     const newVenue = new VenueModel(venueData);
//     await newVenue.save();

//     res.status(201).json({
//       success: true,
//       message: "Venue added successfully",
//     });

//   } catch (error) {
//     console.error("Error in addVenue:", error);

//     // Handle duplicate email
//     if (error.code === 11000 && error.keyPattern?.email) {
//       return res.status(409).json({
//         success: false,
//         message: "Venue with this email already exists",
//       });
//     }

//     // Generic server error
//     res.status(500).json({
//       success: false,
//       message: "Server error, please try again",
//     });
//   }
// };



// // ========================
// // ADMIN LOGIN CONTROLLER
// // ========================
// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//       const token = jwt.sign(email + password, process.env.JWT_SECRET);
//       console.log("Admin login success, token:", token);
//       res.json({ success: true, token });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }

//   } catch (error) {
//     console.log("Error in loginAdmin:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// // ========================
// // GET ALL VENUES CONTROLLER
// // ========================
// const allVenues = async (req, res) => {
//   try {
//     const venues = await VenueModel.find({}).select('-password'); // remove hashed password from results
//     res.json({ success: true, venues });

//   } catch (error) {
//     console.log("Error in allVenues:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// module.exports = {
//   addVenue,
//   loginAdmin,
//   allVenues,
// };


const validator = require('validator');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const VenueModel = require('../models/VenueModel.js');
const jwt = require('jsonwebtoken');
const bookingModel = require('../models/BookingModel.js');
require('dotenv').config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addVenue = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    const {
      name,
      email,
      password,
      city,
      capacity,
      facilities,
      about,
      bookingPrice,
      address,
    } = req.body;

    const imageFile = req.file;

    console.log("Fields Received:", {
      name,
      email,
      password,
      city,
      capacity,
      facilities,
      about,
      bookingPrice,
      address,
      imageFile,
    });

    // Validate required fields
    if (
      !name || !email || !password || !city || !capacity || !facilities || !about ||
      !bookingPrice || !address || !imageFile
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required, including the image file.",
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
      });
    }

    // Validate password length
    if (password.length < 4) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Parse address from JSON string
    let parsedAddress;
    try {
      parsedAddress = JSON.parse(address);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid address format. Must be valid JSON.",
      });
    }
   
    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image", // Specify the resource type
    });

    
    const imageUrl = uploadResponse.secure_url; // Cloudinary image URL

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new venue document
    const newVenue = new VenueModel({
      name,
      email,
      password: hashedPassword,
      city,
      capacity,
      facilities,
      about,
      bookingPrice,
      address: parsedAddress,
      image: imageUrl, // Save Cloudinary image URL
      date: Date.now(),
    });


    // Save venue to database
    await newVenue.save();

    // Return success response
    res.status(201).json({
      success: true,
      message: "Venue added successfully",
    });

  } catch (error) {
    console.error("Error in addVenue:", error);

    // Handle duplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(409).json({
        success: false,
        message: "Venue with this email already exists.",
      });
    }

    // General error handling
    res.status(500).json({
      success: false,
      message: "Server error, please try again.",
      error: error.message,
    });
  }
};


const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      console.log("Admin login success, token:", token);
      res.json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

  } catch (error) {
    console.log("Error in loginAdmin:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const allVenues = async (req, res) => {
  try {
    const venues = await VenueModel.find({}).select('-password');
    res.json({ success: true, venues });
  } catch (error) {
    console.log("Error in allVenues:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


//API to get all Bookings


const bookingsAdmin = async (req,res) =>{
  try {
  const bookings = await bookingModel.find({})
  console.log(bookings)

  res.json({success:true,bookings})
  } catch(error){
  console.log(error)
  res.json({success:false,message:error.message})
  }
}



module.exports = {
  addVenue,
  loginAdmin,
  allVenues,
  bookingsAdmin
};









  //API to get all doctors list for
  // 
  //  Admin
  // const allDoctors=async(req,res)=>
  // {
  //   try {
  //     // .select we excluding the password in the doctors list
  // const doctors=await doctorModel.find({}).select('-password')
  // res.json({success:true,doctors})
      
  //   } catch (error) {
  //     res.json({success:false,message:error.message})
  //   }
  
  // }
  




  // API for admin Login

  // const loginAdmin   =async(req,res)=>
  // {
  //   try {
  //     const {email,password}=req.body
  //     if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD)
  //     {
  //       const token=jwt.sign(email+password,process.env.JWT_SECRET)
  //       res.json({success:true,message:token})
  //     }else{
  //       res.json({success:false,message:'Invalid credentials'})
  //     }
      
  //   } catch (error) {
  //     console.log(error)
  //     res.json({success:false,message:error.message})
  //   }
  // }


















//   //API to get all doctors list for Admin
//   const allDoctors=async(req,res)=>
//   {
//     try {
//       // .select we excluding the password in the doctors list
//   const doctors=await doctorModel.find({}).select('-password')
//   res.json({success:true,doctors})
      
//     } catch (error) {
//       res.json({success:false,message:error.message})
//   }
   // }
  
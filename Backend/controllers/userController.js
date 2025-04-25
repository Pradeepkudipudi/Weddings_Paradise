








const validator = require( 'validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel');
const VenueModel = require('../models/VenueModel');
const mongoose = require("mongoose");
const bookingModel = require('../models/BookingModel');
const cloudinary = require('cloudinary').v2;
const razorpay = require('razorpay')


const registerUser = async (req,res)=>{
  try{
      const {name,email,password} = req.body


      if(!name || !password || !email ){
          return res.json({success:false,message:"Missing Details"})
      }


      if(!validator.isEmail(email)){
          return res.json({success:false,message:"Enter a valid email"})
      }


      if(password.length < 4){
          return res.json({success:false,message:"Password must be at least 4 characters"})
      }


      // 🔴 Check if user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
          return res.json({ success: false, message: "User already exists with this email" });
      }


      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)


      const userData = {
          name,
          email,
          password: hashedPassword
      }


      const newUser = new userModel(userData)
      const user = await newUser.save()


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)


      res.json({ success: true, token })
  } catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
  }
}


//API for user login
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
 
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: 'User does not exist' });
      }
 
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ success: true, token });
      } else {
        return res.json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: error.message });
    }
  };


 
// // API to get user profile data
const getProfile = async (req, res) => {
  try {
    const userId = req.userId; // Comes from middleware
    const userData = await userModel.findById(userId).select('-password');
    res.json({ success: true, userData });
  } catch (error) {
    console.error("Get Profile Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};








  const updateProfile = async (req, res) => {
    try {
      const userId = req.userId;
      const { name, phone, address, dob, gender } = req.body;
      const imageFile = req.file; // This is where the image file from the frontend will come in
 
      if (!name || !phone || !dob || !gender) {
        return res.json({ success: false, message: "Data missing" });
      }
 
      const updateData = {
        name,
        phone,
        dob,
        gender,
      };
 
      if (address) {
        updateData.address = JSON.parse(address); // Ensure the address is parsed correctly
      }
 
      if (imageFile) {
        console.log("Uploading image to Cloudinary...");
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
          resource_type: "image", // Image upload
        });
 
        if (imageUpload && imageUpload.secure_url) {
          console.log(imageUpload,imageUpload.secure_url)
          updateData.image = imageUpload.secure_url; // Set the image URL in the update data
        } else {
          return res.json({ success: false, message: "Image upload failed" });
        }
      }
 
      // Perform the update in MongoDB
      const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
 
      res.json({ success: true, message: "Profile updated", user: updatedUser });
    } catch (error) {
      console.log("Update Profile Error:", error.message);
      res.json({ success: false, message: error.message });
    }
  };





  const bookingHall = async (req, res) => {
    try {
      const { VenId, slotDate, slotTime } = req.body;
      const userId = req.userId; // Use the userId from the middleware
      console.log(userId, VenId, slotDate, slotTime); // Log to ensure userId is correct
      
      const venData = await VenueModel.findById(VenId).select("-password");
      if (!venData) {
        return res.json({ success: false, message: "Venue not found" });
      }
  
      if (!venData.available) {
        return res.json({ success: false, message: "Venue Not Available" });
      }
  
      let slots_booked = venData.slots_booked;
      // Checking for Slot Availability
      if (slots_booked[slotDate]) {
        if (slots_booked[slotDate].includes(slotTime)) {
          return res.json({ success: false, message: "Slot Not Available" });
        } else {
          slots_booked[slotDate].push(slotTime);
        }
      } else {
        slots_booked[slotDate] = [];
        slots_booked[slotDate].push(slotTime);
      }
  
      const userData = await userModel.findById(userId).select("-password");
      delete venData.slots_booked; // Clean up data before saving
  
      const bookingData = {
        userId,
        VenId,
        userData,
        venData,
        amount: venData.fees,
        slotTime,
        slotDate,
        date: Date.now(),
      };
  
      const newBooking = new bookingModel(bookingData);
      await newBooking.save();
  
      // Save new slot data in VenueModel
      await VenueModel.findByIdAndUpdate(VenId, { slots_booked });
  
      res.json({ success: true, message: "Appointment Booked" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  

  const listBookings = async (req, res) => {
    try {
      const userId = req.userId; // ✅ Use the value from middleware
      console.log(userId, "i am ironman");
      console.log("Fetching bookings for userId:", userId);
  
      const bookings = await bookingModel.find({ userId });
  
      if (bookings.length === 0) {
        return res.json({ success: true, message: "No bookings found" });
      }
  
      res.json({ success: true, bookings });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.json({ success: false, message: error.message });
    }
  };


  
// API To Cancel Appointments

//mainn

const cancelBooking = async (req, res) => {



  try {
    const  userId  = req.userId;
    const { bookingId} = req.body
    const bookingData = await bookingModel.findById(bookingId);

    console.log(userId,"cancel")
    //  Verifying The Appointment user
    if (bookingData.userId != userId) {

      
      return res.json({ success: false, message: "UnAuthorized Action" });
    }
    await bookingModel.findByIdAndUpdate(bookingId, {
      cancelled: true,
    });
    // Releasing Doctors Slot
    const { VenId, slotDate, slotTime } = bookingData;
    const venueData = await VenueModel.findById(VenId);
    let slots_booked = venueData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e != slotTime
    );
    await VenueModel.findByIdAndUpdate(VenId, { slots_booked });
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



// API TO MAKE PAYMENTS USING RAZOR PAY

//const razorpayInstsance = new razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
 //});

 //const paymentRazorPay = async (req, res) => {
//   try {
//     const { appointmentId } = req.body;
//     const appointmentData = await appointmentModel.findById(appointmentId);
//     if (!appointmentData || appointmentData.cancelled) {
//       return res.json({
//         sucess: false,
//         message: "Appointment cancelled or Not Found",
//       });
//     }
//     // Creating options for Razor Payment
//     const options = {
//       amount: appointmentData.amount * 100,
//       currency: process.env.CURRENCY,
//       receipt: appointmentId,
//     };
//     // creation of an order
//     const order = await razorpayInstsance.orders.create(options);
//     res.json({ success: true, order });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // API TO VERIFY PAYMENT OF RAZORPAY
// const verifyRazorpay = async (req, res) => {
//   try {
//     const { razorpay_order_id } = req.body;
//     const orderInfo = await razorpayInstsance.orders.fetch(razorpay_order_id);

//     if (orderInfo.status == "paid") {
//       await appointmentModel.findByIdAndUpdate(orderInfo.receipt, {
//         payment:true,
//       });
//       res.json({ success: true, message: "Payment Successfull" });
//     } else {
//       res.json({ success: false, message: "Payment Failed" });
//     }
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


         
module.exports = {registerUser,loginUser,getProfile,updateProfile,bookingHall,listBookings , cancelBooking}






//submain

// const listBookings = async (req,res)=>{

//   try {

//     const {userId} = req.body

//     const bookings = await bookingModel.find({userId})

//     res.json({success:false,bookings})
//   }catch(error){
//     console.log(error);
//     res.json({ success: false, message: error.message });

//   }

// }

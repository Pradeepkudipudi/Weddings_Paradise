
const express = require('express')
const {registerUser,loginUser, getProfile,updateProfile,bookingHall,listBookings,cancelBooking} = require('../controllers/userController')
const authUser = require('../middlewares/authUser')
const upload = require('../middlewares/multer')

const userRouter= express.Router()


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile', authUser, upload, updateProfile)

userRouter.post('/booking-hall',authUser,bookingHall)

userRouter.get('/bookings',authUser,listBookings)

userRouter.post('/cancel-booking',authUser,cancelBooking)

userRouter.put('/all-bookings',authUser,updateProfile)

module.exports = userRouter 


//sagar

// const express = require('express');
// const { registerUser, loginUser, getProfile, updateProfile } = require('../controllers/userController');
// const authUser = require('../middlewares/authUser');
// const upload = require('../middlewares/multer');

// const userRouter = express.Router();

// // Register & Login Routes
// userRouter.post('/register', registerUser);
// userRouter.post('/login', loginUser);

// // Protected Routes (Profile)
// userRouter.get('/get-profile', authUser, getProfile);
// userRouter.post('/update-profile', upload, authUser, updateProfile);

// module.exports = userRouter;

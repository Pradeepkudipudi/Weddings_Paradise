// const express = require("express");
// const router = express.Router();

// const upload = require("../middlewares/upload");
// const authAdmin = require("../middlewares/authAdmin");
// const { addVenue, loginAdmin } = require("../controllers/adminController");

// router.post("/login", loginAdmin);
// router.post("/add-venue", authAdmin, upload, addVenue);

// module.exports = router;



// /// main main main


const express = require('express')
const { addVenue, loginAdmin, allVenues,bookingsAdmin } = require("../controllers/adminController")
const upload = require("../middlewares/multer")
const authAdmin = require("../middlewares/authAdmin")
const { changeAvailablity } = require('../controllers/venueController')


const adminRouter = express.Router()

// adminRouter.post('/add-venue',upload.single('image'),addVenue)
adminRouter.post('/add-venue', authAdmin, upload, addVenue);

adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-venues',authAdmin, allVenues);
adminRouter.post('/change-availability',authAdmin, changeAvailablity);
adminRouter.get('/all-bookings',authAdmin,bookingsAdmin)
module.exports =  adminRouter



































// const express = require("express");

// const addVenue = require("../controllers/adminController");
// const upload = require("../middlewares/multer");

// const adminRouter = express.Router();

// // Existing route for adding venues
// adminRouter.post('/add-venue', upload.single('image'), addVenue);

// // New route for testing file upload
// adminRouter.post('/test-upload', upload.single('image'), (req, res) => {
//     console.log("✅ /test-upload Route Hit");
//     console.log("👉 Request File:", req.file);
//     console.log("👉 Request Body:", req.body);

//     if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded" });
//     }

//     res.json({ message: 'File uploaded successfully', file: req.file });
// });

// module.exports = adminRouter;

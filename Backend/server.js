
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./Config/mongodb.js');
const connectCloudinary = require('./Config/cloudnary.js');
const adminRouter = require('./Routes/adminRoute.js');
const venueRouter = require('./Routes/VenueRoute.js');
const userRouter = require('./Routes/userRoute.js');

// App config
const app = express();

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost :5173', // Frontend URL (Vite)
    credentials: true,
  })
);

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/venue',venueRouter)
app.use('/api/user',userRouter)

// Test route
app.get('/', (req, res) => {
  res.send('API WORKING GREAT');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});



//SAGAR

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const connectDB = require('./Config/mongodb.js');
// const connectCloudinary = require('./Config/cloudnary.js');
// const adminRouter = require('./Routes/adminRoute.js');
// const venueRouter = require('./Routes/VenueRoute.js');
// const userRouter = require('./Routes/userRoute.js');

// // App config
// const app = express();

// // Connect to DB and Cloudinary
// connectDB();
// connectCloudinary();

// // Middlewares
// app.use(express.json());

// app.use(
//   cors({
//     origin: 'http://localhost:5173', // Corrected frontend URL (Vite)
//     credentials: true,
//   })
// );

// // Routes
// app.use('/api/admin', adminRouter);
// app.use('/api/venue', venueRouter);
// app.use('/api/user', userRouter);

// // Test route
// app.get('/', (req, res) => {
//   res.send('API WORKING GREAT');
// });

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server has started on port ${PORT}`);
// });


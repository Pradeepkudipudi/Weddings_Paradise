
// import mongoose from "mongoose";




// const connectDB = async ()=>{

//     mongoose.connection.on('connected',()=>{console.log("database connected")})

// await mongoose.connect(`${process.env.MONGODB_URI}/WeddingsParadise`)

// }

// export default connectDB



// const mongoose=require('mongoose')
// const connectDB=async()=>
// {
//     mongoose.connection.on('connected',()=>console.log(Database Connected))
//     await mongoose.connect($process.env.MONGO_DB/${DocMeet})
// }
// module.exports = connectDB
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${weddingparadise}`);

//     console.log("Database Connected Successfully!");
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


//submain
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure you load environment variables

const connectDB = async () => {

  mongoose.connection.on('connected',()=> console.log("Database Connected"))
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/weddingparadise`, {
      
      
    });

    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

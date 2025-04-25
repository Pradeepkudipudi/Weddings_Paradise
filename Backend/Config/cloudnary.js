
//import {v2 as cloudinary} from 'cloudinary'
const cloudinary = require('cloudinary')



const connectCloudinary = async ()=>{
    //console.log(process.env.CLOUDINARY_CLOUD_NAME);

    cloudinary.config({
        cloud_name : process.env.CLOUD_NAME,
        api_key : process.env.CLOUD_API_KEY,
        api_secret : process.env.CLOUDINARY_SECRET_KEY
    })
}

//export default connectCloudinary

module.exports = connectCloudinary





//SAGAR



// const cloudinary = require('cloudinary').v2; // Use the correct import for cloudinary

// const connectCloudinary = async () => {
//     console.log(process.env.CLOUD_NAME); // Debug log to ensure the env variable is loaded

//     cloudinary.config({
//         cloud_name: process.env.CLOUD_NAME, // Ensure the correct variable is used here
//         api_key: process.env.CLOUD_API_KEY,
//         api_secret: process.env.CLOUDINARY_SECRET_KEY,
//     });

//     // Optionally, check if cloudinary is correctly configured
//     console.log("Cloudinary connected with cloud_name:", process.env.CLOUD_NAME);
// };

// module.exports = connectCloudinary;

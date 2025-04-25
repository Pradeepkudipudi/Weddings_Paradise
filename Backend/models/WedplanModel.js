const mongoose = require("mongoose")


const Wedplanchema   = new mongoose.Schema({
    name :{type:String , required : true},
    email : {type:String,required:true, unique : true},
    password : {type:String ,required:true},
    image : {type:String,required: true},
    city : {type:String,required:true},
    capacity : {type:String,required:true},
     facilities : {type:String ,required:true},
    about : {type:String ,required:true},
    available : {type:Boolean ,required:true},
    bookingPrice : {type:Number ,required:true},
    address : {type:Object ,required:true},
    date : {type:Number ,required:true},
    slots_booked : {type:Object , default:{}}


},{minimize:false})


const WedplanModel = mongoose.model.Wedplan || mongoose.model('Wedplan',Wedplanchema)


export default WedplanModel




// export const WeddingPlanners = [
//     {
//         Wed_id: 'planner1',
//         name: 'Goa Dreams Planners',
//         image: Goaa1,
//         city: 'Goa',
//         capacity: '300 Guests',
//         facilities: ['Venue Decor', 'Catering', 'Photography'],
//         about: 'Make your wedding memorable with exquisite decor and top-notch services at Goa Dreams Planners.',
//         bookingPrice: 4000,
//         address: {
//             line1: 'Plot No. 21, Jubilee Hills',
//             line2: 'Goa, India'
//         }
//     },
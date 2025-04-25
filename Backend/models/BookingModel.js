

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId : {type : String, required : true},
    VenId :{type : String, required : true},
    slotDate :{type : String, required : true},
    slotTime :{type : String, required : true},

    userData :{type : Object, required : true},

    venData :{type : Object, required : true}, 

    amount :{type : Number, required : true},
    date :{type : Number , required : true},
    cancelled :{type : Boolean , default : false},
    amount :{type : Boolean, default : false},
    isCompleted :{type : Boolean, default: false}



})



const bookingModel = mongoose.models.booking || mongoose.model('booking',bookingSchema)


module.exports = bookingModel

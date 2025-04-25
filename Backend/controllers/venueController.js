
const venueModel = require('../models/VenueModel')

 const changeAvailablity = async (req,res)=>{
try {

    const {venId} = req.body

    const venData = await venueModel.findById(venId)
    await venueModel.findByIdAndUpdate(venId,{available: !venData.available})
    res.json({success:true,message:'Availability Changed'})
    
}catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
}

}

const venueList = async (req,res)=>{
    try{
        const venues = await venueModel.find({}).select(['-password','-email'])
        res.json({success:true,venues})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

module.exports =  {changeAvailablity,venueList};
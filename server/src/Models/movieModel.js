const mongoose=require("mongoose");

const MovieSchema=new mongoose.Schema({
    moviename:{type:String},
    imageurl:{tyoe:String},
    moviedescription:{type:String},
    videopath:{type:String}

},{timeseries:true})


module.exports=mongoose.model("Movie",MovieSchema)
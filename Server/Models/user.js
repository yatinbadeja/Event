const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        enum:["Male","Female"],
        required:true
    },
    course:{
        type:String,
        enum:["btech","other"],
        required:true
    },
    year:{
        type:String,
        enum:["I","II","III","IV"],
        required:true
    },
    branch:{
        type:String,
        enum:["CSE","AI&DS","AG","CE","EE","MineE","MechE","ECE"],
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("User",user)
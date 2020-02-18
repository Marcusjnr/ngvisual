
const mongoose = require("mongoose");

const personnelSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase: true,
        required: true
    },

    designation:{
        type:String,
        required: true,
        lowercase:true
    },

    occupation:{
        type:String,
        lowercase: true,
        required:true
    },

    ward:{
        type:String,
        lowercase:true,
        required:true
    },
    lga:{
        type:String,
        lowercase:true,
        required:true
    },

    state:{
        type:String,
        lowercase:true,
    },
    password:{
        type:String,
        lowercase:true,
        required:true
    }
}, {
    timestamps:true
});

const Personnel = mongoose.model('Personnel', personnelSchema);
module.exports = Personnel;
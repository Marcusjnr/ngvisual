

const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema({
    name:{
        type: String,
        lowercase:true
    },

    comment:{
        type: String,
        lowercase:true
    },

    state:{
        type:String,
        lowercase:true
    }
});

const Feedback = mongoose.model("Feedback", feedBackSchema);
module.exports = Feedback;
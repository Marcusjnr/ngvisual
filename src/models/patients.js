const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase: true,
        required: true
    },

    personnel_id:{
      type: mongoose.Schema.Types.ObjectId,
      required:true
    },

    case_id:{
        type: mongoose.Schema.Types.ObjectId,
    },

    age:{
        type: Number,
        required: true
    },

    sex:{
        type:String,
        required:true,
        lowercase:true
    },

});

const Patients = mongoose.model("Patients", patientsSchema);
module.exports = Patients;
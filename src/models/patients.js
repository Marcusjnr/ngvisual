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

    lga:{
        type:String,
        required: true,
        lowercase:true
    },
    ward:{
        type:String,
        required:true,
        lowercase:true,
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
    cases:[{
        case_name:{
            type:String,
            required:true,
            lowercase:true
        },
        diagnosis:{
            type:String,
            required:true,
            lowercase: true
        },
        status:{
            type:String,
            required:true,
            lowercase:true
        },

        referral:{
            type:String,
            required:true,
            lowercase:true
        },

        priority:{
            type:String,
            required:true,
            lowercase:true
        }
    }]

});

patientsSchema.methods.addCases = async function(case_name,diagnosis,status,referral,priority){
    const patient = this;

    patient.cases = patient.cases.concat({case_name,diagnosis,status,referral,priority})
    await patient.save();

};

const Patients = mongoose.model("Patients", patientsSchema);
module.exports = Patients;
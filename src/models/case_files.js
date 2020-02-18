const mongoose = require("mongoose");

const caseFileSchema = new mongoose.Schema({
    patient_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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
});

const CaseFileSchema = mongoose.model("CaseFiles",caseFileSchema);
module.exports = CaseFileSchema;
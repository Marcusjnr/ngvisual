
const Patient = require("../models/patients");

class PatientsController{
    static async addPatient(req,res){
        let patient = new Patient(req.body);

        try {

            await patient.save(async function (error,result) {
                if (error){
                    res.send({
                        success:false,
                        result: error.toString()
                    })
                } else {
                    await patient.addCases(req.body.case_name,req.body.diagnosis,req.body.status,req.body.referral,req.body.priority);
                    res.status(201).send({
                        success:true,
                        result: result
                    })
                }
            })
        }catch (e) {
            res.send({
                success: false,
                error: e.toString()
            })
        }
    }

    static async getPatient(req,res){
        try {
            const patient = await Patient.findOne({
                _id: req.params.id
            }).lean();

            if(!patient){
                return res.status(404).send({
                    success: false,
                    result: 'No Patient Found'
                })
            }

            res.status(200).send({
                success: true,
                result: patient
            })
        }catch (e) {
            res.status(500).send({
                success: false,
                result: "Server Error",
                server_error: e.toString()
            })
        }
    }

    static async getPatients(req, res){
        try {
            const patient = await Patient.find({
                personnel_id: req.params.id
            }).lean();

            if(!patient){
                return res.status(404).send({
                    success: false,
                    result: 'No Patient Found'
                })
            }

            res.status(200).send({
                success: true,
                result: patient
            })
        }catch (e) {
            res.status(500).send({
                success: false,
                result: "Server Error",
                server_error: e.toString()
            })
        }
    }


    static async filterResponses(req,res){

        let patients;
        let keyValue = Object.keys(req.body)[0];//get the
        let jsonString = JSON.stringify(req.body);
        let obj = JSON.parse(jsonString);

        let ward;
        let lga;
        let name;

        if (keyValue === "ward"){
            ward = obj.ward;
        }else if (keyValue === "lga"){
            lga = obj.lga
        }else if(keyValue === "name"){
            name = obj.ward;
        }

        try {
            if(keyValue === "ward"){
                patients = await Patient.aggregate(
                    [ { $match : { ward } } ]
                );
            }else if(keyValue === "lga"){
                patients = await Patient.aggregate(
                    [ { $match : { lga } } ]
                );
            }else if (keyValue === "name"){
                patients = await Patient.aggregate(
                    [ { $match : { name } } ]
                );
            }


            res.send({
                success: true,
                result: patients
            })
        }catch (e) {
            res.send({
                success: false,
                error: e.toString()
            })
        }

    }
}

module.exports = {
  addPatient: PatientsController.addPatient,
  getPatient: PatientsController.getPatient,
    getPatients: PatientsController.getPatients,
    filterResponses: PatientsController.filterResponses,
};
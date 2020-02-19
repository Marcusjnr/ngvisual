
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

    }
}

module.exports = {
  addPatient: PatientsController.addPatient,
  getPatient: PatientsController.getPatient,
    getPatients: PatientsController.getPatients,
    filterResponses: PatientsController.filterResponses,
};
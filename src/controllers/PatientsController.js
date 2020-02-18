
const Patient = require("../models/patients");

class PatientsController{
    static async addPatient(req,res){
        let patient = new Patient({...req.body, personnel_id: req.body.personnel_id});

        try {

            await patient.save(async function (error,result) {
                if (error){
                    res.send({
                        success:false,
                        result: error.toString()
                    })
                } else {
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
}

module.exports = {
  addPatient: PatientsController.addPatient,
  getPatient: PatientsController.getPatient,
    getPatients: PatientsController.getPatients
};
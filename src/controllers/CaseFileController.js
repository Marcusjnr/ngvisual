
const Case = require("../models/case_files");

//todo Group and show total number by lga, ward, status, priority
class   CaseFileController{
    static async addCases(req, res){
        let caseFiles = new Case({...req.body, patient_id: req.body.patient_id});

        try {

            await caseFiles.save(async function (error,result) {
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

    static async getCase(req, res){
        try {
            const caseFile = await Case.findOne({
                patient_id: req.params.id
            }).lean();

            if(!caseFile){
                return res.status(404).send({
                    success: false,
                    result: 'No Case Found'
                })
            }

            res.status(200).send({
                success: true,
                result: caseFile
            })
        }catch (e) {
            res.status(500).send({
                success: false,
                result: "Server Error",
                server_error: e.toString()
            })
        }
    }
    static async getCases(req, res){
        try {
            const caseFiles = await Case.find({
                personnel_id: req.params.id
            }).lean();

            if(!caseFiles){
                return res.status(404).send({
                    success: false,
                    result: 'No Patient Found'
                })
            }

            res.status(200).send({
                success: true,
                result: caseFiles
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
  addCases: CaseFileController.addCases,
  getCases: CaseFileController.getCases,
  getCase: CaseFileController.getCase
};

const Patient = require("../models/patients");

//todo Group and show total number by lga, ward, status, priority
class   CaseFileController{

    static async getCases(req, res){
        try {
            const caseFile = await Patient.findOne({
                _id: req.params.id
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



}

module.exports = {
  getCases: CaseFileController.getCases,

};
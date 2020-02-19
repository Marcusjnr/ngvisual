
const Personnel = require("../models/personnels");

class PersonnelController {

    static async addPersonnel(req, res){

        let personnel = new Personnel({
            ...req.body,
            password: "person"
        });

        try {

            await personnel.save(async function (error,result) {
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

    static async getPersonnel(req,res){
        try {
            const personnel = await Personnel.findOne({
                _id: req.params.id
            }).lean();

            if(!personnel){
                return res.status(404).send({
                    success: false,
                    result: 'No Bid Found'
                })
            }

            res.status(200).send({
                success: true,
                result: personnel
            })
        }catch (e) {
            res.status(500).send({
                success: false,
                result: "Server Error",
                server_error: e.toString()
            })
        }
    }

    static async login(req,res){
        let password = req.body.password;
        try {
            const personnel = await Personnel.findOne({password});

            if(!personnel){
                return res.send({
                    success: false,
                    result: "No password like this exists"
                })
            }

            res.send({
                success: true,
                result: personnel
            })
        }catch (e) {
            res.send({
                result:false,
                error: e.toString()
            })
        }

    }

    static generateAutoPassword(length, chars){
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
}

module.exports = {
  addPersonnel : PersonnelController.addPersonnel,
    getPersonnel: PersonnelController.getPersonnel,
    login: PersonnelController.login
};

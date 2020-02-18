
class BodyValidations{
    static async validateTypeBody(req,res,next){
        let type = req.body.type;

        if (type == null){
            return res.send({
                success: false,
                result: "Please include the type in the body"
            });
        }

        next()
    }
}



const Feedback = require("../models/feedback");

class FeedbackController{
    static async addFeedback(req,res){
        let feedback = new Feedback(req.body);

        try {

            await feedback.save(async function (error,result) {
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

    static async getFeedback(req,res){

    }
}
module.exports = {
    addFeedback: FeedbackController.addFeedback,
    getFeedback: FeedbackController.getFeedback
};
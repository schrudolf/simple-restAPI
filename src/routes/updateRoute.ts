import userModel from "../database/Schema/userSchema";

export default () => {
    return function (req: any, res: any, next: any) {
        const {
            _id,
            name,
            born
        } = req.body;
        if (typeof _id === "undefined" || typeof name === "undefined" || typeof born === "undefined") {
            return res.status(400).send("Not correct")
        }
        if (_id === "" || name === "" || born === "") {
            return res.status(400).send("empty field/s")
        }
        userModel.findOneAndUpdate({_id}, {$set: {name, born}}, {new :true}, function(err,result){
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(202).send(result)
        })
    }
}
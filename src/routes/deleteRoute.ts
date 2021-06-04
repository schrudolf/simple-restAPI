import userModel from "../database/Schema/userSchema";

export default () => {
    return function (req: any, res: any, next: any) {
        const userID = req.body._id;
        if (typeof userID === "undefined") {
            return res.status(400).send("ID is undefined")
        }
        if (userID === "" ) {
            return res.status(400).send("ID is empty")
        }
        userModel.findByIdAndDelete({_id: userID}, {skip: 1}, function(err,result){
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(202).send(result)
        })
    }
}
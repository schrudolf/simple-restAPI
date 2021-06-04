import userModel from "../database/Schema/userSchema";

export default () => {
    return function(req: any,res: any,next: any){
        userModel.find({}, (err,result) => {
            if(err){
                return res.status(404)
            }
           return res.status(200).send(result)
        })
    }
}
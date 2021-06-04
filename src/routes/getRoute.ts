import userModel from "../database/Schema/userSchema";

export default () => {
    return function(req: any,res: any,next: any){
        userModel.find({}, (err,result) => {
            if(err){
                return res.status(404)
            }
            res.status(200)
            res.json(result)
        })
    }
}
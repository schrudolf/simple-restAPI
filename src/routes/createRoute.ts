import userModel from "../database/Schema/userSchema";

export default () => {
    return function (req: any, res: any, next: any) {
        const {
            name,
            born
        } = req.body;
        if (typeof name === "undefined" || typeof born === "undefined") {
            return res.status(400).send("Not correct")
        }
        if (name === "" || born === "") {
            return res.status(400).send("empty field/s")
        }
        const newUser = {
            name,
            born
        }
        userModel.create(newUser, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(201).send(result)
        })
    }
}
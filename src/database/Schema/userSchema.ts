import mongoose from 'mongoose';
const Schema = mongoose.SchemaTypes;
const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
  id: ObjectId,
  name: String,
  born: Number
});

const  userModel = mongoose.model("newUser", UserSchema)

const newUsers = [
    {
        name: "Jon",
        born: 1900
    },
    {
        name: "Jon2",
        born: 1910
    },
    {
        name: "Jon3",
        born: 1950
    },
    {
        name: "Jon4",
        born: 1940
    },
]
//Generate random users
// userModel.create(newUsers,(err,result) => console.log(result))

export default userModel;
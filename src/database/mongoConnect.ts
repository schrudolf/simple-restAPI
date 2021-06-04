import mongoose from 'mongoose';

export default async function () {
        try {
            await mongoose.connect(process.env.MONGO_CONNECTION_STRING ||'mongodb://localhost/my_database', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            return console.log("Database connection succefull")
            
        } catch (err) {
            console.log(err)
        }
}
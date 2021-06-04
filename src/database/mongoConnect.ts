import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
import assert from "assert";

export default function () {
    return new Promise< any >((resolve, reject) => {
        try {
            // Connection URL
            const url = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017';
            // Database Name
            const dbName = 'restAPI';
            const client = new MongoClient(url, {
                useUnifiedTopology: true
            });
            // Use connect method to connect to the server
            client.connect(function (err) {
                assert.equal(null, err);
                if (err) {
                    throw new Error("Failed Database Connection")
                }
                const db = client.db(dbName);
                client.close();
                resolve(console.log('Database connection succefull'))
            });
        } catch (err) {
            reject(err)
        }
    })
}
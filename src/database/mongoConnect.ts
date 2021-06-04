import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
import assert from "assert";

export default function(){
    // Connection URL
    const url = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'restAPI';
    const client = new MongoClient(url, {
        useUnifiedTopology: true
    });
    // Use connect method to connect to the server
    client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    client.close();
    });
}
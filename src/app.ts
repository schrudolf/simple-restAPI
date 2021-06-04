import dotenv from 'dotenv'
import express from 'express';
import dbConnect from "./database/mongoConnect"; // mongoDB connection
import mainRoutes from "./routes/routes"; // Routes
const app = express();
dotenv.config()

const HOST: string = process.env.HOST || "localhost";
const PORT: number = Number(process.env.PORT || 3000);

async function startApp(){
    await dbConnect(); // Database connection
    mainRoutes(app) // Load routes
    app.listen(PORT, HOST, () => {
        console.log("Server is listening on " + "http://" + HOST + ":" + PORT)
    })
}

startApp();
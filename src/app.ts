import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express();
import dbConnect from "./database/mongoConnect"; // mongoDB connection
import mainRoutes from "./routes/routes"; // Routes

const HOST: string = process.env.HOST || "localhost";
const PORT: number = Number(process.env.PORT || 3000);

// Database connection
dbConnect();
// Load routes
mainRoutes(app)


app.listen(PORT, HOST, () => {
    console.log("Server is listening on " + "http://" + HOST + ":" + PORT)
})
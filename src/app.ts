import dotenv from 'dotenv'
import express, { json } from 'express';
import dbConnect from "./database/mongoConnect"; // mongoDB connection
import mainRoutes from "./routes/routes"; // Routes
const app = express();

dotenv.config()
app.use(express.json())

const HOST: string = process.env.HOST || "localhost";
const PORT: number = Number(process.env.PORT || 3000);

async function startApp(){
    await dbConnect(); // Database connection
    mainRoutes(app) // Load routes
    app.listen(PORT, HOST, () => {
        console.log(`Server is listening on http://${HOST}:${PORT}`)
    })
}

startApp();
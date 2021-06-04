import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express();

const HOST: string = process.env.HOST || "localhost";
const PORT: number = Number(process.env.PORT || 3000);

// Routes
import mainRoutes from "./routes/routes";
// Load routes
mainRoutes(app)


app.listen(PORT, HOST, ()=> {
    console.log("Server is listening on" + "http://" + HOST + ":" + PORT )
})
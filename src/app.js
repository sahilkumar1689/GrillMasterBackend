import express from "express";
import cors from 'cors';



const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));



// Routes:
import router from "./Routers/User.routes.js";

// Create routes using middleware:
app.use("/api/v1/users",router);






export default app;
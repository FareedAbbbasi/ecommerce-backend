import { Request, Response } from "express";
import express from 'express';
let app = express();
import dotenv from 'dotenv';
import { PORT } from "./config/env";
app.use(express.json());
dotenv.config();

app.get("/read", (req:Request, res:Response) => {
    res.send("This is home api")
    console.log("Home API")
})

app.post("/sign-up", signup)

app.listen(PORT, () => console.log(`Server is Running ${PORT}`))
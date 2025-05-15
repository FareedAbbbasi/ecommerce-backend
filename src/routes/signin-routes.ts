import { User } from './../models/user.model';
import express from "express";
import { Request, Response } from "express";
let app = express();
import dotenv from "dotenv";
const bcrypt = require("bcrypt");
app.use(express.json());
dotenv.config();


export const SignIn = async (req: Request, res: Response) => {
    const {email , password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            res.status(401).json({message: "User not found"})
            return
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            res.status(401).json({message: "Invalid credentials"})
            return
        }
        res.status(200).json("Login Successfully")
}



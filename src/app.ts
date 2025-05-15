import express from "express";
export let app = express();
import dotenv from "dotenv";
import SignUp from "./routes/signup.routes";
import { SignIn } from "./routes/signin-routes";
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

app.post("/sign-up", SignUp);
app.post("/login-in", SignIn )

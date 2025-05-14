import express, { Application } from 'express';
 export let app = express();
import dotenv from 'dotenv';
import signUp from './routes/signup.routes';
const router = express.Router();


app.use(express.json());
dotenv.config();
router.use(express.urlencoded({extended: true}))
router.post("/sign-up", signUp)
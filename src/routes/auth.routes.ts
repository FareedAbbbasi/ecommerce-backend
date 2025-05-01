import express, { Request, Response } from "express";
const router = express();

router.post("/login", (req:any, res:any) => {
    res.send("Login Success")
})

router.post("/signUp", (req:any, res:any) => {
    res.send("Sign up success")
})

module.exports = router

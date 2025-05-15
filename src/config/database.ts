import mongoose from "mongoose";
import dotenv from 'dotenv';
import { app } from "../app";
dotenv.config();

const port: number = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerc")
    console.log("Database is connected successfully!")
    app.listen(port, () => {
      console.log(`server is running running on the port ${port}`)
    })
  } catch (error) {
    console.log(`failed to connect database ${error}`);
  }
}


main();
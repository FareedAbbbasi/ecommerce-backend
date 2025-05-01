import dotenv from 'dotenv';
const mongoose = require('mongoose');

dotenv.config();
const mongoose_url = process.env.MONGODB_URL





mongoose.connect(mongoose_url)
.then(()=>{
    console.log("MongoDB Connected...");
}).catch((err:any)=>{
    console.log("MongoDB Connection Error: ", err)
})
import mongoose from 'mongoose';

const userSchemaMongoose = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true,
        lowercase: true
    }, 
    password: {
        type: String, 
        require: true, 
        trim: true
    }
})

export const User = mongoose.model("User", userSchemaMongoose)

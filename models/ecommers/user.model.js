import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        requireed : true,
        unique: true,
        lowercase: true
    },
    email: {
        type : String,
        requireed : true,
        unique: true,
        lowercase: true
    }, 
    password: {
        type : String,
        requireed : true
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)
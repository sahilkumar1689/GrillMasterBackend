import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:"./.env"});


const userSchema = new mongoose.Schema({
    customerName :{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    phoneNumber :{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    tableQuantity:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    date:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    time:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    message:{
        type:String,
        required:true,
        trim:true,
        index:true
    },

},{timestamps:true});


export const User = mongoose.model("User",userSchema);
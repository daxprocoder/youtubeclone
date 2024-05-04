import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from 'dotenv';
import connectDB from '../src/db/index.js'

dotenv.config({
    path: '../env'
})

connectDB



/*
import express from "express";
const app = express()



(async () => {
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error",()=> {
            console.log("error",error);
            throw error
        })

        app.listen(process.env.PORT,()=>){
            console.log('App is listening on port ${process.env.PORT}');
        }

    }
    catch(error){
        console.error("ERROR",error)
        throw err
    }
} ) ( )

*/
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from 'dotenv';
import connectDB from '../src/db/index.js';
import express from 'express';

const app = express()


dotenv.config({
    path: '../env'
})

connectDB.then(()=>{
    app.listen((process.env.PORT || 8000),()=>{
        console.log('server is running at port')
})
})
.catch((err)=>{
    console.log("MONGO db connection failed !!",err)
})

app.post("/test", (req, res) => {
    res.status(200).json({ message: "ok" });
});


export{app}








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
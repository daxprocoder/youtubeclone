import dotenv from 'dotenv';
import connectDB from '../src/db/index.js';
import {app} from './app.js'


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






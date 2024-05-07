import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
});

const uploadOnCloudnary  = async(localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resourdce_type:"auto"
        })
        //file successfully uploaded 
        fs.unlinkSync(localFilePath) //unlinking the file from the temp
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temproray file as in the server in upload .
        return null;
    }
} 

export {uploadOnCloudnary}



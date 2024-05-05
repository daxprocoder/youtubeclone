import mongoose ,{Schema, SchemaType} from "mongoose";
import bcrypt, { compare } from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";

const userSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index:true
    },
    avatar:{
        type:String, //cloundinary url or any server as per your required which generate the url.
        required:true,
    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectID,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password us required']
    },
    refreshToken:{
        type:String
    }
    



},{
    timestamps:true
})  

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    
    this.password = bcrypt.hash(this.password, 10)//10 is hash round
    next()                                          
})

userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema)
import { asyncHandler } from "../utils/ayscnHandler.js";


const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({
        message:"dax pro coder"
    })
}) 


export {registerUser}
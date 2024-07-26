import {asyncHandler} from "../Utils/asyncHandlers.js";
import { User } from "../Models/Users.models.js"; 


// Controllers:

const registerUserData = asyncHandler(async (req,res)=>{


        // Get user details from the frontend:
        const {customerName,phoneNumber,tableQuantity,date,time,message} = req.body;

        
        // Validate field not empty:
        if(!customerName || !phoneNumber || !tableQuantity || !date || !time || !message){
            return res.json({status:400,message:"Please Provide All Required Details."});
        }

        // Create user object and after that create entry in the database.

       const user = await User.create({
            customerName,
            phoneNumber,
            tableQuantity,
            date,
            time,
            message
        })
        

        // Check user creation and remove the password and refrence token:
        const createdUser = await User.findById(user._id);

        if(!createdUser) return res.json({status:500,message:"Something went wrong while reservation please try again."});


        // Send Responce to the user:
    
        return res.json({status:200,message:"Table Reservation Successfully."});

})





export {registerUserData};


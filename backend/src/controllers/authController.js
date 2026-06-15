import {register } from "../services/authService.js"

export const registerUser= async(req,res)=>{
    try{
        const result= await register(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result,

        });

    }catch(error){
        res.status(404).json({
            success: false,
            message: false,
            message: error.message,
        });
    }
};
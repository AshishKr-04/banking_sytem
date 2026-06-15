import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register =async (userData)=>{

    const{fullName, email, password}= userData;

    const existingUser=await User.findOne({
        where: {email}

    });

    if (existingUser){
        throw new Error("User already exists");
    }

    const hashedPassword= await bcrypt.hash(password,10);

    const user= await User.create({
        fullName,
        email,
        password: hashedPassword
    });
    return user;
};

import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async (userData) => {

    const { fullName, email, password } = userData;

    const existingUser = await User.findOne({
        where: { email }

    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        fullName,
        email,
        password: hashedPassword
    });
    return user;
};

export const login = async (userData) => {

    const { email, password } = userData;
    const user = await User.findOne({
        where: { email }
    });

    if (!user) {
        throw new Error("Invalid Email or password");
    }

    const isPasswordValid= await bcrypt.compare(
        password,
        user.password
    );

    if(!isPasswordValid){
        throw new Error("Invalid Email or Password");
    }

    const token = generateToken(user.id);

    return {
        token,
        user:{
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
        }
    };
};

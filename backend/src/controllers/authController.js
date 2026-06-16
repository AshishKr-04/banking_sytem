import { register, login } from "../services/authService.js"

export const registerUser = async (req, res) => {
    try {
        const result = await register(req.body);

        res.status(201).json({

            success: true,
            message: "User registered successfully",
            data: result,

        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const loginUser = async (req, res) => {

    try {
       const result= await login(req.body);
        res.status(200).json({

            success: true,
            message: "Login Successfull",
            data: result,

        });
    } catch (error) {

        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};
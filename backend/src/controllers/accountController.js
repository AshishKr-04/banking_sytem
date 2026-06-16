import { createAccount } from "../services/accountService.js";

export const createBankAccount= async (req,res)=>{
    try{
        const {accountType}= req.body;
        const account= await createAccount(
            req.user.id,
            accountType
        );

        res.status(201).json({
            success: true,
            data: account
        });

    }catch(error){

        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
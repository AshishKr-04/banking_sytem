import Account from "../models/Account.js";
import generateAccountNumber from "../utils/generateAccountNumber.js";


export const createAccount = async (

    userId,
    accountType

) => {

    const account = await Account.create({
        userId,
        accountType,
        accountNumber: generateAccountNumber(),
        balance: 0
    });


    return account;
};
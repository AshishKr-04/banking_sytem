import  express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import { createBankAccount } from "../controllers/accountController.js";


const router= express.Router();

router.post(
    "/",
    authMiddleware,
    createBankAccount
);

export default router;
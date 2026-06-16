import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import accountRoutes from "./routes/accountRoutes.js"


const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/accounts",accountRoutes);

app.get("/", (req, res) => {

  res.json({

    success: true,
    message: "Banking API Running"

  });

});

app.use("/api/auth", authRoutes);

export default app;

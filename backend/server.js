import dotenv from "dotenv";
import app from "./src/app.js";
import sequelize from "./src/config/database.js";
import User from "./src/models/User.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("✅ Database Connected Successfully");

        await sequelize.sync();

        console.log("✅ Models Synced Successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
    }
};

startServer();
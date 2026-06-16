import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";


const Account = sequelize.define("Account",{

    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,

    },

    accountNumber:{
         type: DataTypes.BIGINT,
         unique: true,
         allowNull: false,

    },

    accountType:{
         type: DataTypes.ENUM("saving", "current"),
         allowNull: false,

    },

    balance: {
        type: DataTypes.DECIMAL(15,2),
        defaultValue: 0,
    },

    status: {
        type: DataTypes.ENUM("active", "blocked"),
        defaultValue: "active",
    },
});

User.hasMany(Account,{
    foreignKey: "userId",
});

Account.belongsTo(User,{
    foreignKey: "userId",
});

export default Account;
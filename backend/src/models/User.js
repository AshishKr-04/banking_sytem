import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },

        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email:{
            type: DataTypes.STRING,
            alloeNull: false,
            unique:true,
        },

        password:{
            type: DataTypes.STRING,
            alloeNull: false,
        },

        role:{
            type: DataTypes.ENUM("Customer", "admin"),
            deafaultValue: "customer",
        },


    },
    {
        timestamps:true,
    }
);

export default User;
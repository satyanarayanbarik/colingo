import dotenv from "dotenv";
import connectDB from "./db/index.js";
/*  require('dotenv').config({path:'./env'})  */



dotenv.config({
    path: './env'
})

connectDB()










/*
import express from "express";
const app = express()

(async => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.error("ERROR :",error)
             throw error  
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR :",error)
        throw error   
    }

}) */



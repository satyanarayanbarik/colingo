import dotenv from "dotenv";
import connectDB from "./db/index.js";
/*  require('dotenv').config({path:'./env'})  */



dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("ERR:",error);
        throw error

    })
})
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!",err);
})
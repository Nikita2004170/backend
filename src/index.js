// import mongoose from "mongoose";
// import {DB_NAME} from "/.constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config(
    {
        path:'.env'
    }
)
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{ //callback function
    console.log(`server is running at port: $ {process.env.PORT}`);
   }) 
})
.catch((error)=>{
    console.log("Error in loading database ",error);
}
)
connectDB();
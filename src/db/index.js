import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
  const connectDB= async ()=>{
    try{
        const connectionInst= await mongoose.connect(
`${process.env.MONGO_URI}/${DB_NAME}`
);
       console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded DB_NAME:", process.env.DB_NAME);


        console.log(`\n mongodb connected!! DB HOST:${connectionInst.connection.host}`);
    }
    catch(error){
        console.log("ERROR",error);

    }
  }
  export default connectDB;


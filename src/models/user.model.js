import mongoose, { Schema } from "mongoose"
import bycrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const Userschema=new mongoose.Schema(
    {
     username:{
        type:String,
        required:true,
        lowecase:true,
        unique:true,
         trim: true, 
        index: true
     } ,
      email:{
        type:String,
        required:true,
        lowecase:true,
         trim: true, 
           unique:true,
     },
      fullname:{
        type:String,
        required:true,
         trim: true, 
            index: true
     },
     avatar:{
        type:String,
        required:true, // cloudinary url
     },
      coverImage: {
            type: String, // cloudinary url
        },
     watchhistory:[
        {
            type:Schema.Type.ObjectId,
            ref:"video"
        }
     ],
      refreshToken: {
            type: String
        },
        password:{
            type:String,
            required:[true,"password is required"]
        }
     
},
    {
        timestamps:true
})
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password=bycrypt.hash(this.password,10)
    next();

})
Userschema.method.isPasswordCorrect=async function(password){
    return await bycrypt.compare(password,this.password);
}
export  const user =mongoose.model("user",UserSchema)
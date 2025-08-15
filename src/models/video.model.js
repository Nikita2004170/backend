import mongoose, { Schema } from "mongoose"
//import mongoose-paginate-v2 from "mongoose-paginate-v2"
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const VideoSchema=new mongoose.Schema(
    {
      videofile:{
        type:String,
        required:true,
      } ,
       thumbnail:{
        type:String,
        required:true,
      } ,
      Owner:{
        type:Schema.Types.ObjectId,
        ref:"user"
      } ,
title:{
    type:String,
    required:true,
},
description:{
type:String,
},
duration:{
    type:Number,
    required:true,
},
views:{
    type:Number,
    default: 0
},
ispublised:{
    type:Boolean,
  default: true,
},
    },
    {timestamps:true}
)
VideoSchema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video",Videoschema)
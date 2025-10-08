import { model, Schema } from "mongoose";
import type{ ISeminarEvent } from "./seminerEvent.interface.js";


const seminarSchema = new Schema<ISeminarEvent>({
    id:{type:Number,required:true,unique:true},
    speaker:{type:String,required:true},
    title:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    image:{type:String,required:true},


})


 export const seminarModel = model<ISeminarEvent>('seminarEvents',seminarSchema)
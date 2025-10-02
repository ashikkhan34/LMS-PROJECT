import { model, Schema } from "mongoose";
import type{ ICertification } from "./certification.interface.js";


const certificationSchema = new Schema<ICertification>({
    id:{type:String,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    email:{type:String,required:true},
    studentId:{type:String,required:true},
    courseName:{type:String,required:true},
    batchName:{type:String,required:true},
})

export const certificationModel = model<ICertification>('certification',certificationSchema)
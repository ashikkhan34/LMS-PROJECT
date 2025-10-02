import { model, Schema } from "mongoose";
import type { IStudent } from "./student.interface.js";


const studentSchema = new Schema<IStudent>({
    id:{type:String,required:true},
    name:{type:String,required:true},
    gender:{type:String,required:true,enum:['male','female','other']},
    dateOfBirth:{type:String,required:true},
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContact:{type:String,required:true},
    address:{type:String,required:true},
    guardian:{type:String,required:true},
    profileImg:{type:String,required:true},
    courseName:{type:String,required:true},
    cratedAt:{type:Date,required:true},
    updatedAt:{type:Date,required:true},
})

export const studentModel = model<IStudent>('Students',studentSchema)
import { model, Schema } from "mongoose";
import type { IAdmin } from "./admin.interface.js";


const adminSchema = new Schema<IAdmin>({
    _id:{type:Schema.Types.ObjectId,required:true},
    id:{type:String,required:true},
    name:{type:String,required:true},
    gender:{type:String,required:true,enum:['male','female','other']},
    dateOfBirth:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContact:{type:String,required:true},
    address:{type:String,required:true},
    profileImg:{type:String,required:true},
    managementDepartment:{type:String,required:true},
    createdAt:{type:String,required:true},
    updatedAt:{type:String,required:true},
    status:{type:String,required:true,enum:['active','inactive','pending']},
})

const adminModel = model<IAdmin>('Admin',adminSchema)
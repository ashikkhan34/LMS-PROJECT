import { model, Schema } from "mongoose";
import type { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  password: { type: String, required: true },
  isPasswordChange: { type: Boolean, required: true },
  role:{type:String,required:true,enum:['student','member','admin']},
  status:{type:String,enum:['active','blocked','pending']},
  isDeleted:{type:Boolean,required:true},
  createdAt:{type:Date,required:true},
  updatedAt:{type:Date,required:true}
});

export const userModel = model<IUser>('Users',userSchema)
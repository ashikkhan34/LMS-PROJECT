import type { Types } from "mongoose";


export interface IUser {
    id:string,
    name:string,
    email:string,
    contactNo:string,
    password:string,
    isPasswordChange:boolean,
    role:'student'|'mentor'|'admin',
    status:'active'|'blocked'|'pending',
    isDeleted:boolean,
    createdAt:Date,
    updatedAt:Date
}
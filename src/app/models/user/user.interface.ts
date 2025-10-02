import type { Types } from "mongoose";


export interface IUser {
    id:string,
    password:string,
    isPasswordChange:boolean,
    role:'student'|'mentor'|'admin',
    status:'active'|'blocked'|'pending',
    isDeleted:boolean,
    createdAt:Date,
    updatedAt:Date
}
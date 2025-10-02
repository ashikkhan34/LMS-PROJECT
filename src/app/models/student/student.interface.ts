import type { Types } from "mongoose";


export interface IStudent {
    id:string,
    name:string,
    gender:'male'|'female'|'other',
    dateOfBirth:string,
    email:string,
    contactNo:string,
    emergencyContact:string,
    address:string,
    guardian:string,
    profileImg:string,
    courseName:string,
    cratedAt:Date,
    updatedAt:Date

}
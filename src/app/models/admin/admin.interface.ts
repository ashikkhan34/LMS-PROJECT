import type { Types } from "mongoose";

export interface IAdmin {
    id:string,
    name:string,
    gender:'male'|'female'|'other',
    dateOfBirth:string,
    email:string,
    contactNo:string,
    emergencyContact:string,
    address:string,
    profileImg:string,
    status:'active'|'inactive'|'pending',
    managementDepartment:string,
    createdAt:string,
    updatedAt:string
}
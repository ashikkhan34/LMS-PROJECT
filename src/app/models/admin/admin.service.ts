import type { IAdmin } from "./admin.interface.js";
import { adminModel } from "./admin.model.js";

const createAdminService = async (payLoad:IAdmin) =>{
    const admin = await adminModel.create(payLoad)
    return admin
}

const getAllAdminService = async ()=>{
    const getAllAdmin = adminModel.find()
    return getAllAdmin;
}

const getAAdminService = async(id: any) =>{
    const admin = await adminModel.findById(id);
    return admin
}

const updateAdminService = async(id:string, payLoad:Partial<IAdmin>) =>{
    return await adminModel.findByIdAndUpdate(
        id,
        {$set:payLoad},
        {new:true, runValidators:true}
    )
}

const deleteAdminService = async(id:any) =>{
    return await adminModel.findByIdAndDelete(id)
}

export const adminService = {
    createAdminService,
    getAllAdminService,
    getAAdminService,
    updateAdminService,
    deleteAdminService
}
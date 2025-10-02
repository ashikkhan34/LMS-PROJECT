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

export const adminService = {
    createAdminService,
    getAllAdminService,
    getAAdminService
}
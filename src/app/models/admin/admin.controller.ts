import type { Request, Response } from "express";
import { adminService } from "./admin.service.js";

const createAdminController = async(req:Request,res:Response) =>{
    try{
        const admin = await adminService.createAdminService(req.body)
        res.status(201).json({
            message:'admin data added',
            success:true,
            data:admin
        })
    }catch(err){
        console.log(err)
    }
}

const getAllAdminController = async(req:Request,res:Response) =>{
    try{
        const getAllAdmin = await adminService.getAllAdminService()
        res.status(201).json({
            message:'get all admin data',
            success:true,
            data:getAllAdmin
        })
    }catch(err){
        console.log(err)
    }
}
const getAAdminController = async(req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        const getAAdmin = await adminService.getAAdminService(id)
        res.status(201).json({
            message:'get a admin data',
            success:true,
            data:getAAdmin
        })
    }catch(err){
        console.log(err)
    }
}

const updateAdminController = async(req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is requred'
            })
        }
        const Admin = await adminService.updateAdminService(id,req.body)
        if(!Admin) return res.status(404).json({message:'data not found' , success:false})
        res.status(201).json({
            message:'update a admin data',
            success:true,
            data:Admin
        })
    }catch(err){
        console.log(err)
    }
}

export const adminController = {
    createAdminController,
    getAllAdminController,
    getAAdminController,
    updateAdminController
}
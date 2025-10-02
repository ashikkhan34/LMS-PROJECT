import type { Request, Response } from "express";
import { certificateService } from "./certification.service.js";


const createCertificateController = async (req:Request,res:Response) =>{
    try{
        const certificate = await certificateService.createCertificateService(req.body)
        res.status(201).json({
            message:'certificate add',
            success:true,
            data:certificate
        })
    }catch(err){
        console.log(err)
    }
}
const getAllCertificateController = async (req:Request,res:Response) =>{
    try{
        const allCertificate = await certificateService.getAllCertificateService()
        res.status(201).json({
            message:'get all certificate data',
            success:true,
            data:allCertificate
        })
    }catch(err){
        console.log(err)
    }
}
const getACertificateController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        const allCertificate = await certificateService.getACertificateService(id)
        res.status(201).json({
            message:'get a certificate data',
            success:true,
            data:allCertificate
        })
    }catch(err){
        console.log(err)
    }
}

export const certificateController = {
    createCertificateController,
    getAllCertificateController,
    getACertificateController
}
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
const updateCertificateController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const Certificate = await certificateService.updateCertificateService(id,req.body)
        if(!Certificate) return res.status(404).json({message:'data not found',success:false})
        res.status(201).json({
            message:'update a certificate data',
            success:true,
            data:Certificate
        })
    }catch(err){
        console.log(err)
    }
}
const deleteCertificateController = async (req:Request,res:Response) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const Certificate = await certificateService.deleteCertificateService(id)
        if(!Certificate) return res.status(404).json({message:'data not found',success:false})
        res.status(201).json({
            message:'delete a certificate data',
            success:true,
            data:Certificate
        })
    }catch(err){
        console.log(err)
    }
}

export const certificateController = {
    createCertificateController,
    getAllCertificateController,
    getACertificateController,
    updateCertificateController,
    deleteCertificateController
}
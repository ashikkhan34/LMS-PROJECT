import type { Request, Response } from "express";
import { studentReviewService } from "./studentReview.service.js";

const createStudentReviewController = async (req:Request,res:Response) => {
    try{
         const studentReview = await studentReviewService.createStudentReviewService(req.body)
         res.status(201).json({
            message:'student review add',
            success:true,
            data:studentReview
         })

    }catch(err){
        console.log(err)
    }
}
const getAllStudentReviewController = async (req:Request,res:Response) => {
    try{
         const studentReview = await studentReviewService.getAllStudentReviewService()
         res.status(201).json({
            message:'get all student review',
            success:true,
            data:studentReview
         })

    }catch(err){
        console.log(err)
    }
}
const getAStudentReviewController = async (req:Request,res:Response) => {
    try{
        const id = req.params.id
         const studentReview = await studentReviewService.getAStudentReviewService(id)
         res.status(201).json({
            message:'get a student review',
            success:true,
            data:studentReview
         })

    }catch(err){
        console.log(err)
    }
}
const updateStudentReviewController = async (req:Request,res:Response) => {
    try{
        const id = req.params.id
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
         const studentReview = await studentReviewService.updateStudentReviewService(id,req.body)
         if(!studentReview) return res.status(404).json({message:'data not found',success:false})
         res.status(201).json({
            message:'update a student review',
            success:true,
            data:studentReview
         })

    }catch(err){
        console.log(err)
    }
}
const deleteStudentReviewController = async (req:Request,res:Response) => {
    try{
        const id = req.params.id
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
         const studentReview = await studentReviewService.deleteStudentReviewService(id)
         if(!studentReview) return res.status(404).json({message:'data not found',success:false})
         res.status(201).json({
            message:'delete a student review',
            success:true,
            data:studentReview
         })

    }catch(err){
        console.log(err)
    }
}

export const studentReviewController = {
    createStudentReviewController,
    getAllStudentReviewController,
    getAStudentReviewController,
    updateStudentReviewController,
    deleteStudentReviewController
    
}

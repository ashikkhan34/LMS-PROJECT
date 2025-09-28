import type { Request, Response } from "express";
import { courseService } from "./course.service.js";


const createCourseController = async(req:Request,res:Response) =>{
    try{
        const course = await courseService.createCourseService(req.body)
    res.status(201).json({
        message:'data added successfully',
        success:'true',
        data:course
    })
    }catch(err){
        console.log(err)
    }
}

const getAllCourseController = async(req:Request,res:Response) => {
    try{
        const getCourse = await courseService.getAllCourseService()
         res.status(201).json({
        message:'get all data',
        success:'true',
        data:getCourse
    })
    }catch(err){
        console.log(err)
    }
    }


export const courseController = {
    createCourseController,
    getAllCourseController
}
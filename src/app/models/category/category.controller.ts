import type { Request, Response } from "express";
import { categoryService } from "./category.service.js";


const createCategoryController = async(req:Request,res:Response) =>{
    try{
        const category = await categoryService.createCategoryService(req.body)
        res.status(201).json({
            success:true,
            message:'category data add',
            data:category
        })
    }catch(err){
        console.log(err)
    }
}

const getAllCategoryController = async (req:Request,res:Response) =>{
      try{
        const allCategory = await categoryService.getAllCategoryService()
        res.status(201).json({
            success:true,
            message:'get all category data',
            data:allCategory
        })
    }catch(err){
        console.log(err)
    }
}
const getACategoryController = async (req:Request,res:Response) =>{
      try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const aCategory = await categoryService.getACategoryService(id)
        if(!aCategory) return res.status(404).json({message:'data not found', success:false})
        res.status(201).json({
            success:true,
            message:'get all category data',
            data:aCategory
        })
    }catch(err){
        console.log(err)
    }
}
const updateACategoryController = async (req:Request,res:Response) =>{
      try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const aCategory = await categoryService.updateCategoryService(id,req.body)
        if(!aCategory) return res.status(404).json({message:'data not found', success:false})
        res.status(201).json({
            success:true,
            message:'update a category data',
            data:aCategory
        })
    }catch(err){
        console.log(err)
    }
}
const deleteACategoryController = async (req:Request,res:Response) =>{
      try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:'id is required',
                success:false
            })
        }
        const aCategory = await categoryService.deleteCategoryService(id)
        if(!aCategory) return res.status(404).json({message:'data not found', success:false})
        res.status(201).json({
            success:true,
            message:'delete a category data',
            data:aCategory
        })
    }catch(err){
        console.log(err)
    }
}

export const categoryController = {
    createCategoryController,
    getAllCategoryController,
    getACategoryController,
    updateACategoryController,
    deleteACategoryController
}
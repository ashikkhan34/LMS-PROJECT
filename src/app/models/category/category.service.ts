import type { ICategory } from "./category.interface.js";
import { categoryModel } from "./category.model.js";

const createCategoryService = async (payLoad:ICategory) =>{
    const category = await categoryModel.create(payLoad)
    return category;
}

const getAllCategoryService = async () =>{
    const allCategory = await categoryModel.find()
    return allCategory
}

const getACategoryService = async(id : any)=>{
    const category = await categoryModel.findById(id)
    return category;
}

export const categoryService = {
    createCategoryService,
    getAllCategoryService,
    getACategoryService
}
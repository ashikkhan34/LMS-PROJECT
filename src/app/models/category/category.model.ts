import { model, Schema } from "mongoose";
import type{ ICategory } from "./category.interface.js";


const categorySchema = new Schema<ICategory>({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    slug:{type:String,required:true},
    icon:{type:String,required:true},
})

const categoryModel = model<ICategory>('category',categorySchema)
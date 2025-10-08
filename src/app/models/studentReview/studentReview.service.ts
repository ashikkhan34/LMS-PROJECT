import { studentReviewModel } from "./studentReview.model.js";
import type { IStudentReview } from "./stuentReview.interface.js";


const createStudentReviewService = async (payLoad:IStudentReview) => {
    const studentReview = await studentReviewModel.create(payLoad)
    return studentReview;
}

const getAllStudentReviewService = async () =>{
    const allReview = await studentReviewModel.find()
    return allReview
}
const getAStudentReviewService = async (id:any) =>{
    const allReview = await studentReviewModel.findById(id)
    return allReview
}

const updateStudentReviewService = async(id:string, payLoad:Partial<IStudentReview>) =>{
    return await studentReviewModel.findByIdAndUpdate(
        id,
        {$set:payLoad},
        {new:true, runValidators:true}
    )
}

const deleteStudentReviewService = async(id:string) =>{
    return await studentReviewModel.findByIdAndDelete(id)
}

export const studentReviewService = {
    createStudentReviewService,
    getAllStudentReviewService,
    getAStudentReviewService,
    updateStudentReviewService,
    deleteStudentReviewService
}
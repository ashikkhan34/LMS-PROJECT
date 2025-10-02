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

export const studentReviewService = {
    createStudentReviewService,
    getAllStudentReviewService,
    getAStudentReviewService
}
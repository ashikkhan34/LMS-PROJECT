import type { ICourse } from "./course.interface.js";
import { courseModel } from "./course.model.js";

const createCourseService = async(payLoad:ICourse)=>{
    const course = await courseModel.create(payLoad)
    return course;
}

const getAllCourseService = async () =>{
    const allCourse = await courseModel.find()
    return allCourse;
}
export const courseService = {
    createCourseService,
    getAllCourseService
}


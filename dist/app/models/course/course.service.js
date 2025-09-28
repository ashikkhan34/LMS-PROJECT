import { courseModel } from "./course.model.js";
const createCourseService = async (payLoad) => {
    const course = await courseModel.create(payLoad);
    return course;
};
const getAllCourseService = async () => {
    const allCourse = await courseModel.find();
    return allCourse;
};
export const courseService = {
    createCourseService,
    getAllCourseService
};
//# sourceMappingURL=course.service.js.map
import { courseService } from "./course.service.js";
const createCourseController = async (req, res) => {
    try {
        const course = await courseService.createCourseService(req.body);
        res.status(201).json({
            message: 'data added successfully',
            success: 'true',
            data: course
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllCourseController = async (req, res) => {
    try {
        const getCourse = await courseService.getAllCourseService();
        res.status(201).json({
            message: 'get all data',
            success: 'true',
            data: getCourse
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const courseController = {
    createCourseController,
    getAllCourseController
};
//# sourceMappingURL=course.controller.js.map
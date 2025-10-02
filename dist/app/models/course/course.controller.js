import { courseService } from "./course.service.js";
const createCourseController = async (req, res) => {
    try {
        const course = await courseService.createCourseService(req.body);
        res.status(201).json({
            message: "data added successfully",
            success: "true",
            data: course,
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
            message: "get all data",
            success: "true",
            data: getCourse,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getACourseController = async (req, res) => {
    try {
        const id = req.params.id;
        const getCourse = await courseService.getACourseService(id);
        res.status(201).json({
            message: "get a data",
            success: "true",
            data: getCourse,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteCourseController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                success: false,
                message: 'course id is required'
            });
        }
        const getCourse = await courseService.getACourseService(id);
        res.status(201).json({
            message: "course is deleted successfully",
            success: "true",
            data: getCourse,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateCourseController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                success: false,
                message: 'course id is required'
            });
        }
        const updateCourse = await courseService.updateCourseService(id, req.body);
        res.status(202).json({
            message: "course is update successfully",
            success: "true",
            data: updateCourse,
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const courseController = {
    createCourseController,
    getAllCourseController,
    getACourseController,
    deleteCourseController,
    updateCourseController
};
//# sourceMappingURL=course.controller.js.map
import { studentReviewService } from "./studentReview.service.js";
const createStudentReviewController = async (req, res) => {
    try {
        const studentReview = await studentReviewService.createStudentReviewService(req.body);
        res.status(201).json({
            message: 'student review add',
            success: true,
            data: studentReview
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllStudentReviewController = async (req, res) => {
    try {
        const studentReview = await studentReviewService.getAllStudentReviewService();
        res.status(201).json({
            message: 'get all student review',
            success: true,
            data: studentReview
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAStudentReviewController = async (req, res) => {
    try {
        const id = req.params.id;
        const studentReview = await studentReviewService.getAStudentReviewService(id);
        res.status(201).json({
            message: 'get a student review',
            success: true,
            data: studentReview
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const studentReviewController = {
    createStudentReviewController,
    getAllStudentReviewController,
    getAStudentReviewController
};
//# sourceMappingURL=studentReview.controller.js.map
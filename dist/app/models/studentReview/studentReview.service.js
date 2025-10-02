import { studentReviewModel } from "./studentReview.model.js";
const createStudentReviewService = async (payLoad) => {
    const studentReview = await studentReviewModel.create(payLoad);
    return studentReview;
};
const getAllStudentReviewService = async () => {
    const allReview = await studentReviewModel.find();
    return allReview;
};
const getAStudentReviewService = async (id) => {
    const allReview = await studentReviewModel.findById(id);
    return allReview;
};
export const studentReviewService = {
    createStudentReviewService,
    getAllStudentReviewService,
    getAStudentReviewService
};
//# sourceMappingURL=studentReview.service.js.map
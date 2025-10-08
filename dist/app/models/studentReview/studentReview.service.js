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
const updateStudentReviewService = async (id, payLoad) => {
    return await studentReviewModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteStudentReviewService = async (id) => {
    return await studentReviewModel.findByIdAndDelete(id);
};
export const studentReviewService = {
    createStudentReviewService,
    getAllStudentReviewService,
    getAStudentReviewService,
    updateStudentReviewService,
    deleteStudentReviewService
};
//# sourceMappingURL=studentReview.service.js.map
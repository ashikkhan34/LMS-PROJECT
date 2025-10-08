import { studentModel } from "./student.model.js";
const createStudentService = async (payLoad) => {
    const student = await studentModel.create(payLoad);
    return student;
};
const getAllStudentService = async () => {
    const allStudent = await studentModel.find();
    return allStudent;
};
const getAStudentService = async (id) => {
    const allStudent = await studentModel.findById(id);
    return allStudent;
};
const updateStudentService = async (id, payLoad) => {
    return await studentModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteStudentService = async (id) => {
    return await studentModel.findByIdAndDelete(id);
};
export const createStudent = {
    createStudentService,
    getAllStudentService,
    getAStudentService,
    updateStudentService,
    deleteStudentService
};
//# sourceMappingURL=student.service.js.map
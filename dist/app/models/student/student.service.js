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
export const createStudent = {
    createStudentService,
    getAllStudentService,
    getAStudentService
};
//# sourceMappingURL=student.service.js.map
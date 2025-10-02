import type { IStudent } from "./student.interface.js";
import { studentModel } from "./student.model.js";


const createStudentService = async (payLoad:IStudent) =>{
    const student = await studentModel.create(payLoad)
    return student
}

const getAllStudentService = async () =>{
    const allStudent = await studentModel.find()
    return allStudent;
}
const getAStudentService = async (id:any) =>{
    const allStudent = await studentModel.findById(id)
    return allStudent;
}

export const createStudent = {
    createStudentService,
    getAllStudentService,
    getAStudentService
}
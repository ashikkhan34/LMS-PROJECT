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

const updateStudentService = async(id:any, payLoad:Partial<IStudent>) =>{
    return await studentModel.findByIdAndUpdate(
        id,
        {$set:payLoad},
        {new:true, runValidators:true}
    )
}

const deleteStudentService = async(id:any) =>{
    return await studentModel.findByIdAndDelete(id)
}

export const createStudent = {
    createStudentService,
    getAllStudentService,
    getAStudentService,
    updateStudentService,
    deleteStudentService

}
import type { IMentor } from "./mentor.interface.js";
import { mentorModel } from "./mentor.model.js";

const CreateMentorService = async( payLoad:IMentor)=>{
    const mentor = await mentorModel.create(payLoad)
    return mentor
}

const getAllMentorService = async()=>{
    const mentor = await mentorModel.find()
    return mentor;
}
const getAMentorService = async(id:any)=>{
    const mentor = await mentorModel.findById(id)
    return mentor;
}


const updateMentorService = async(id:string, payLoad:IMentor) =>{
    const updateMentor = await mentorModel.findByIdAndUpdate(id, {$set:payLoad},{new:true, runValidators:true})
    return updateMentor
}

const deleteMentorService = async(id:any)=>{
    return await mentorModel.findByIdAndDelete(id)
}


export const mentorService = {
    CreateMentorService,
    getAllMentorService,
    getAMentorService,
    updateMentorService,
    deleteMentorService
}
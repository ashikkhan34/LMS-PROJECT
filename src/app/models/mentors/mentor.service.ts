import type { IMentor } from "./mentor.interface.js";
import { mentorModel } from "./mentor.model.js";

const CreateMentorService = async( payLoad:IMentor)=>{
    const mentor = await mentorModel.create(payLoad)
    return mentor
}

export const mentorService = {
    CreateMentorService
}
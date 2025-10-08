import { seminarModel } from "./seminar.model.js";
import type { ISeminarEvent } from "./seminerEvent.interface.js";


const createSeminarEventService = async (payLoad:ISeminarEvent) =>{
    const seminar = await seminarModel.create(payLoad)
    return seminar
}

const getSeminarEventService = async () =>{
    const seminar = await seminarModel.find()
    return seminar
}
const getASeminarEventService = async (id:any) =>{
    const seminar = await seminarModel.find()
    return seminar
}

const updateSeminarService = async(id:any, payLoad:Partial<ISeminarEvent>) =>{
    return await seminarModel.findByIdAndUpdate(id,{$set:payLoad},{new:true, runValidators:true})
}

const deleteSeminarService = async(id:any) =>{
    return await seminarModel.findByIdAndDelete(id)
}

export const seminarEventService = {
    createSeminarEventService,
    getSeminarEventService,
    getASeminarEventService,
    updateSeminarService,
    deleteSeminarService
}
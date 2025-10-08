import type { ICertification } from "./certification.interface.js";
import { certificationModel } from "./certification.model.js";


const createCertificateService = async (payLoad:ICertification) =>{
    const certificate = await certificationModel.create(payLoad)
    return certificate
}

const getAllCertificateService = async () =>{
    const allCertificate = await certificationModel.find()
    return allCertificate;
}

const getACertificateService = async(id:any)=>{
    const aCertificate = await certificationModel.findById(id)
    return aCertificate
}

const updateCertificateService = async(id:any, payLoad:Partial<ICertification>) =>{
    return await certificationModel.findByIdAndUpdate(id,payLoad)
}

const deleteCertificateService = async(id:any) =>{
    return await certificationModel.findByIdAndDelete(id)
}

export const certificateService = {
    createCertificateService,
    getAllCertificateService,
    getACertificateService,
    updateCertificateService,
    deleteCertificateService

}
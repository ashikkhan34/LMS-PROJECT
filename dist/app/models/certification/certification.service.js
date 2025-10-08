import { certificationModel } from "./certification.model.js";
const createCertificateService = async (payLoad) => {
    const certificate = await certificationModel.create(payLoad);
    return certificate;
};
const getAllCertificateService = async () => {
    const allCertificate = await certificationModel.find();
    return allCertificate;
};
const getACertificateService = async (id) => {
    const aCertificate = await certificationModel.findById(id);
    return aCertificate;
};
const updateCertificateService = async (id, payLoad) => {
    return await certificationModel.findByIdAndUpdate(id, payLoad);
};
const deleteCertificateService = async (id) => {
    return await certificationModel.findByIdAndDelete(id);
};
export const certificateService = {
    createCertificateService,
    getAllCertificateService,
    getACertificateService,
    updateCertificateService,
    deleteCertificateService
};
//# sourceMappingURL=certification.service.js.map
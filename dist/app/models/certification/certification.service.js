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
export const certificateService = {
    createCertificateService,
    getAllCertificateService,
    getACertificateService
};
//# sourceMappingURL=certification.service.js.map
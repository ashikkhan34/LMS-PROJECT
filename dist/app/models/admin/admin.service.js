import { adminModel } from "./admin.model.js";
const createAdminService = async (payLoad) => {
    const admin = await adminModel.create(payLoad);
    return admin;
};
const getAllAdminService = async () => {
    const getAllAdmin = adminModel.find();
    return getAllAdmin;
};
const getAAdminService = async (id) => {
    const admin = await adminModel.findById(id);
    return admin;
};
const updateAdminService = async (id, payLoad) => {
    return await adminModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteAdminService = async (id) => {
    return await adminModel.findByIdAndDelete(id);
};
export const adminService = {
    createAdminService,
    getAllAdminService,
    getAAdminService,
    updateAdminService,
    deleteAdminService
};
//# sourceMappingURL=admin.service.js.map
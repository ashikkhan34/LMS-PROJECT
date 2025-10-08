import { seminarModel } from "./seminar.model.js";
const createSeminarEventService = async (payLoad) => {
    const seminar = await seminarModel.create(payLoad);
    return seminar;
};
const getSeminarEventService = async () => {
    const seminar = await seminarModel.find();
    return seminar;
};
const getASeminarEventService = async (id) => {
    const seminar = await seminarModel.find();
    return seminar;
};
const updateSeminarService = async (id, payLoad) => {
    return await seminarModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
};
const deleteSeminarService = async (id) => {
    return await seminarModel.findByIdAndDelete(id);
};
export const seminarEventService = {
    createSeminarEventService,
    getSeminarEventService,
    getASeminarEventService,
    updateSeminarService,
    deleteSeminarService
};
//# sourceMappingURL=seminar.service.js.map
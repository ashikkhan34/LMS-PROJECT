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
export const seminarEventService = {
    createSeminarEventService,
    getSeminarEventService,
    getASeminarEventService
};
//# sourceMappingURL=seminar.service.js.map
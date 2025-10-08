import { mentorModel } from "./mentor.model.js";
const CreateMentorService = async (payLoad) => {
    const mentor = await mentorModel.create(payLoad);
    return mentor;
};
const getAllMentorService = async () => {
    const mentor = await mentorModel.find();
    return mentor;
};
const getAMentorService = async (id) => {
    const mentor = await mentorModel.findById(id);
    return mentor;
};
const updateMentorService = async (id, payLoad) => {
    const updateMentor = await mentorModel.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
    return updateMentor;
};
const deleteMentorService = async (id) => {
    return await mentorModel.findByIdAndDelete(id);
};
export const mentorService = {
    CreateMentorService,
    getAllMentorService,
    getAMentorService,
    updateMentorService,
    deleteMentorService
};
//# sourceMappingURL=mentor.service.js.map
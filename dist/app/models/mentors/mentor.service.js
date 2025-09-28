import { mentorModel } from "./mentor.model.js";
const CreateMentorService = async (payLoad) => {
    const mentor = await mentorModel.create(payLoad);
    return mentor;
};
export const mentorService = {
    CreateMentorService
};
//# sourceMappingURL=mentor.service.js.map
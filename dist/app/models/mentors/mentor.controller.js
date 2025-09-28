import { mentorService } from "./mentor.service.js";
const createMentorController = async (req, res) => {
    try {
        const mentor = await mentorService.CreateMentorService(req.body);
        res.status(201).json({
            message: 'mentor data added',
            success: true,
            mentor: mentor
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const mentorController = {
    createMentorController
};
//# sourceMappingURL=mentor.controller.js.map
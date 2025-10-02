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
const getAllMentorController = async (req, res) => {
    try {
        const allMentor = await mentorService.getAllMentorService();
        res.status(201).json({
            message: 'get all mentor data',
            success: true,
            mentor: allMentor
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAMentorController = async (req, res) => {
    try {
        const id = req.params.id;
        const allMentor = await mentorService.getAMentorService(id);
        res.status(201).json({
            message: 'get a mentor data',
            success: true,
            mentor: allMentor
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateMentorController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.send(404).json({
                success: false,
                message: 'id is required'
            });
        }
        const allMentor = await mentorService.updateMentorService(id, req.body);
        res.status(201).json({
            message: 'get a mentor data',
            success: true,
            mentor: allMentor
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const mentorController = {
    createMentorController,
    getAllMentorController,
    getAMentorController,
    updateMentorController
};
//# sourceMappingURL=mentor.controller.js.map
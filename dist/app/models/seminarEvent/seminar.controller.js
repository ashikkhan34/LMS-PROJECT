import { seminarEventService } from "./seminar.service.js";
const createSeminarEventController = async (req, res) => {
    try {
        const seminarEvent = await seminarEventService.createSeminarEventService(req.body);
        res.status(201).json({
            success: true,
            message: 'seminar data create',
            data: seminarEvent
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getAllSeminarEventController = async (req, res) => {
    try {
        const allEventData = await seminarEventService.getSeminarEventService();
        res.status(201).json({
            message: "get all seminar event",
            success: "true",
            data: allEventData,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const getASeminarEventController = async (req, res) => {
    try {
        const id = req.params.id;
        const allEventData = await seminarEventService.getASeminarEventService(id);
        res.status(201).json({
            message: "get a seminar event",
            success: "true",
            data: allEventData,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const updateASeminarEventController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: 'id is required',
                success: false
            });
        }
        const EventData = await seminarEventService.updateSeminarService(id, req.body);
        if (!EventData)
            return res.status(404).json({ message: 'data not found', success: false });
        res.status(201).json({
            message: "update a seminar event",
            success: "true",
            data: EventData,
        });
    }
    catch (err) {
        console.log(err);
    }
};
const deleteASeminarEventController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: 'id is required',
                success: false
            });
        }
        const EventData = await seminarEventService.deleteSeminarService(id);
        if (!EventData)
            return res.status(404).json({ message: 'data not found', success: false });
        res.status(201).json({
            message: "delete a seminar event",
            success: "true",
            data: EventData,
        });
    }
    catch (err) {
        console.log(err);
    }
};
export const seminarEventController = {
    createSeminarEventController,
    getAllSeminarEventController,
    getASeminarEventController,
    updateASeminarEventController,
    deleteASeminarEventController
};
//# sourceMappingURL=seminar.controller.js.map
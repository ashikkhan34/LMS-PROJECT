import { Router } from "express";
import express from "express";
import { seminarEventController } from "./seminar.controller.js";
const router = express.Router();
router.post('/create-seminar-event', seminarEventController.createSeminarEventController);
router.get('/', seminarEventController.getAllSeminarEventController);
router.get('/:id', seminarEventController.getASeminarEventController);
router.put('/update-seminar/:id', seminarEventController.updateASeminarEventController);
router.delete('/delete-seminar/:id', seminarEventController.deleteASeminarEventController);
export const seminarRoute = router;
//# sourceMappingURL=seminar.route.js.map
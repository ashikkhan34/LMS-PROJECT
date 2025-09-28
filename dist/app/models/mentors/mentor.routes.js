import express from "express";
import { mentorController } from "./mentor.controller.js";
const router = express.Router();
router.post('/create-mentor', mentorController.createMentorController);
export const mentorRoute = router;
//# sourceMappingURL=mentor.routes.js.map
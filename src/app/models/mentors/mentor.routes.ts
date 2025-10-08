import express from "express";
import { mentorController } from "./mentor.controller.js";

const router = express.Router()

router.post('/create-mentor',mentorController.createMentorController)
router.get('/',mentorController.getAllMentorController)
router.get('/:id',mentorController.getAMentorController)
router.put('/update-mentor/:id',mentorController.updateMentorController)
router.delete('/delete-mentor/:id', mentorController.deleteMentorController)


export const mentorRoute = router;
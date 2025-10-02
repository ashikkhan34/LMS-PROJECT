import { Router } from "express";
import express from "express";
import { seminarEventController } from "./seminar.controller.js";


const router = express.Router()

router.post('/create-seminar-event',seminarEventController.createSeminarEventController)
router.get('/',seminarEventController.getAllSeminarEventController)
router.get('/:id',seminarEventController.getASeminarEventController)


export const  seminarRoute = router;

import express from 'express';
import { studentController } from './student.controller.js';


const router = express.Router()

router.post('/create-student',studentController.createStudentController);
router.get('/',studentController.getAllStudentController)
router.get('/:id',studentController.getAStudentController)
router.put('/update-student/:id',studentController.updateAStudentController)
router.delete('/delete-student/:id',studentController.deleteAStudentController)

export const studentRouter = router;
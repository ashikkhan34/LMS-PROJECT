import { Router } from 'express';
import express from 'express';
import { studentController } from './student.controller.js';
const router = express.Router();
router.post('/create-student', studentController.createStudentController);
router.get('/', studentController.getAllStudentController);
router.get('/:id', studentController.getAStudentController);
export const studentRouter = router;
//# sourceMappingURL=student.routes.js.map
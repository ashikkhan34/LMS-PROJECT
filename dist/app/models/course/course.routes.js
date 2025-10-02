import express from "express";
import { courseController } from "./course.controller.js";
const router = express.Router();
router.post('/create-courses', courseController.createCourseController);
router.get('/', courseController.getAllCourseController);
router.get('/:id', courseController.getACourseController);
router.put('/course-update/:id', courseController.updateCourseController);
router.delete('/course-delete/:id', courseController.deleteCourseController);
export const CourseRoutes = router;
//# sourceMappingURL=course.routes.js.map
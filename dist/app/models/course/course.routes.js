import express from "express";
import { courseController } from "./course.controller.js";
const router = express.Router();
router.post('/create-courses', courseController.createCourseController);
router.get('/', courseController.getAllCourseController);
export const CourseRoutes = router;
//# sourceMappingURL=course.routes.js.map
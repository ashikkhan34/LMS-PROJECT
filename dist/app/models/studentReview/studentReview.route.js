import { Router } from 'express';
import express from 'express';
import { studentReviewController } from './studentReview.controller.js';
const router = express.Router();
router.post('/create-studentReview', studentReviewController.createStudentReviewController);
router.get('/', studentReviewController.getAllStudentReviewController);
router.get('/:id', studentReviewController.getAStudentReviewController);
export const studentReviewRouter = router;
//# sourceMappingURL=studentReview.route.js.map
import express from 'express'
import { categoryController } from './category.controller.js';

const router = express.Router()

router.post('/create-category',categoryController.createCategoryController)
router.get('/',categoryController.getAllCategoryController)
router.get('/:id',categoryController.getACategoryController)
router.put('/update-category/:id',categoryController.updateACategoryController)
router.delete('/delete-category/:id',categoryController.deleteACategoryController)

export const categoryRoute = router;
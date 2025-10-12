
import { Router } from 'express';
import express from 'express'
import { userController } from './user.controller.js';
import { validatedUserMiddleware } from '../middleware/validateUserMiddleware.js';

const router = express.Router()

router.post('/create-user',userController.createUserController)
router.get('/',userController.getAllUserController)
router.get('/:id',userController.getAUserController)
router.delete('/delete-user/:id',userController.deleteAUserController)
router.put('/update-user/:id',userController.updateAUserController)

export const userRoutes = router;